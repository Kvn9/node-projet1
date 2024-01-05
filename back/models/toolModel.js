const sequelize = require("../database/database");
const { DataTypes } = require("sequelize");
const Model = require("./modelModel");

const Tool = sequelize.define(
  "tool",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    prize: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    primary: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

Tool.belongsToMany(Model, {
  through: "get",
});
Model.belongsToMany(Tool, {
  through: "get",
});

module.exports = Tool;