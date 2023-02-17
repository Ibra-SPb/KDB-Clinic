"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Visit, Doctor, Service_Doctor }) {
      Service.hasMany(Visit, { foreignKey: "serviceId" });
      Service.belongsToMany(Doctor, {
        through: Service_Doctor,
        foreignKey: "serviceId",
        otherKey: "doctorId",
      });
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
