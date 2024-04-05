const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.user_company_role, {
        foreignKey: 'id_user',
      });
    }

    async getCompaniesRoles() {
      const roles = await DB.user_company_role.findAll({
        where: { id_user: this.id },
        attributes: ['id'],
        include: [{ model: DB.company }, { model: DB.role }],
      });

      return roles;
    }
  }

  User.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      id_identification_type: DataTypes.NUMERIC,
      id_number: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'user',
      underscored: true,
      freezeTableName: false,
    }
  );

  return User;
};
