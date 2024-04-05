'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company_point_of_sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.company, {
        foreignKey: 'id_company',
        constraints: false,
      });
      this.belongsTo(models.point_of_sale, {
        foreignKey: 'id_point_of_sales',
        constraints: false,
      });
    }
  }
  company_point_of_sale.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      id_company: DataTypes.UUID,
      id_point_of_sales: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: 'company_point_of_sale',
      underscored: true,
      freezeTableName: false,
    }
  );
  return company_point_of_sale;
};
