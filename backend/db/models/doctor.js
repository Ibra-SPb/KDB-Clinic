"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Visit, Service, Service_Doctor }) {
      // Doctor.hasMany(Visit, { foreignKey: "visitId" });
      Doctor.belongsToMany(Service, {
        through: Service_Doctor,
        foreignKey: "doctorId",
        otherKey: "serviceId",
      });
    }
  }
  Doctor.init(
    {
      name: DataTypes.TEXT,
      img: DataTypes.TEXT,
      specific: DataTypes.TEXT,
      info: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Doctor",
    }
  );
  return Doctor;
};
