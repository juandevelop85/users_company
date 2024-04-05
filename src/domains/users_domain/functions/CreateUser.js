const {
  getParamsModelAttributes,
} = require('../../../shared/functions/GetModelAttributes');

async function CreateUser(body) {
  const { id_identification_type, id_number, company_nit, role } = body;

  const {
    user: User,
    role: Role,
    company: Company,
    user_company_role: UserCompanyRole,
    sequelize,
  } = DB;
  const t = await sequelize.transaction();

  const selectedRole = await Role.findOne({ where: { name: role } });
  const selectedCompany = await Company.findOne({
    where: { nit: company_nit },
  });

  if (!selectedRole?.id) {
    throw Error('El rol no es valido');
  }

  if (!selectedCompany?.id) {
    throw Error('La compañia no es valida');
  }

  const userAttributes = getParamsModelAttributes(body, User);

  try {
    const [newNuser, created] = await User.findOrCreate({
      where: { id_identification_type, id_number },
      defaults: userAttributes,
      transaction: t,
    }).catch((e) => {
      throw e;
    });

    if (created) {
      console.log({ newNuser });

      await UserCompanyRole.create(
        {
          id_user: newNuser.id,
          id_company: selectedCompany.id,
          id_role: selectedRole?.id,
        },
        { transaction: t }
      );

      await t.commit();

      const responseData = newNuser.dataValues;
      responseData.roles_by_company = await newNuser.getCompaniesRoles();

      return responseData;
    }
  } catch (error) {
    console.log(error);
    await t.rollback();
    throw Error('Ha ocurrido un error');
  }

  throw Error('El usuario ya existe');
}

exports.default = CreateUser;
