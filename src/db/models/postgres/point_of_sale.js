'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class point_of_sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  point_of_sale.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'point_of_sale',
      underscored: true,
      freezeTableName: false,
    }
  );
  return point_of_sale;
};
