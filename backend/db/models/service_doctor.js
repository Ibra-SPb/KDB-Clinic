'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service_Doctor extends Model {
    static associate({ Doctor, Service }) {
      Service_Doctor.belongsTo(Doctor, {
        foreignKey: 'doctorId',
        as: 'doctor',
      });
      Service_Doctor.belongsTo(Service, {
        foreignKey: 'serviceId',
        as: 'service',
      });
    }
  }
  Service_Doctor.init(
    {
      doctorId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Doctors',
          key: 'id',
        },
      },

      serviceId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Services',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Service_Doctor',
    }
  );
  return Service_Doctor;
};
