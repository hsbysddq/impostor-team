const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resetPasswordLink: {
      type: DataTypes.STRING,
      defaultValue: ''
    }
  },
  {
    sequelize,
    timestamps: true,
    tableName: 'User',
  }
);

module.exports = { User };
