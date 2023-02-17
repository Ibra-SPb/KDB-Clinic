"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Visit }) {
      Service.hasMany(Visit, { foreignKey: "servisId" });
    }
  }
  Service.init(
    {
      title: DataTypes.TEXT,
      body: DataTypes.TEXT,
      img: DataTypes.TEXT,
      price: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Service",
    }
  );
  return Service;
};
