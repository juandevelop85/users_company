'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.user_company_role, {
        foreignKey: 'id_company',
      });
      this.hasMany(models.company_point_of_sale, {
        foreignKey: 'id_company',
      });
    }

    async getPointsOfSales() {
      const roles = await DB.company_point_of_sale.findAll({
        where: { id_company: this.id },
        attributes: ['id'],
        include: [{ model: DB.point_of_sale }],
      });

      return roles;
    }
  }
  company.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      nit: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'company',
      underscored: true,
      freezeTableName: false,
    }
  );
  return company;
};
