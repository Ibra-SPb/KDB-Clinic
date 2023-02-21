'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stock.init({
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    img: DataTypes.TEXT,
    valid: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};