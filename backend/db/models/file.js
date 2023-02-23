const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    static associate({ User }) {
      File.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  File.init(
    {
      userId: DataTypes.INTEGER,
      path: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'File',
    }
  );
  return File;
};
