"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Visit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Doctor, Service }) {
      Visit.belongsTo(User, { foreignKey: "userId" });
      Visit.belongsTo(Doctor, { foreignKey: "doctorId" });
      Visit.belongsTo(Service, { foreignKey: "serviceId" });
    }
  }
  Visit.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      doctorId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Doctors",
          key: "id",
        },
      },

      serviceId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Services",
          key: "id",
        },
      },
      date: DataTypes.DATE,
      time: DataTypes.TEXT,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Visit",
    }
  );
  return Visit;
};
