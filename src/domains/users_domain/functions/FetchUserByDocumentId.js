// const DB = require('../../../db/models/postgres');

async function FetchUserByDocumentId(params) {
  const { id_identification_type, id_number } = params;
  const user = await DB.user
    .findOne({ where: { id_identification_type, id_number } })
    .catch((e) => {
      throw e;
    });

  if (user) {
    const responseData = user.dataValues;
    responseData.roles_by_company = await user.getCompaniesRoles();
    return responseData;
  }
  throw Error('Usuario no existe');
}

exports.default = FetchUserByDocumentId;
