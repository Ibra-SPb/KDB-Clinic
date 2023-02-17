"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service_Doctor extends Model {
    static associate() {}
  }
  Service_Doctor.init(
    {
      doctorId: DataTypes.INTEGER,
      serviceId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Service_Doctor",
    }
  );
  return Service_Doctor;
};
