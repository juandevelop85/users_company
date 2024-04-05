'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_company_role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: 'id_user',
        constraints: false,
      });
      this.belongsTo(models.company, {
        foreignKey: 'id_company',
        constraints: false,
      });
      this.belongsTo(models.role, {
        foreignKey: 'id_role',
        constraints: false,
      });
    }
  }
  user_company_role.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      id_user: DataTypes.UUID,
      id_company: DataTypes.UUID,
      id_role: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: 'user_company_role',
      underscored: true,
      freezeTableName: false,
    }
  );
  return user_company_role;
};
