const sequelize = require("../database/database");
const { DataTypes } = require("sequelize");
const User = require("./userModel");
const Model = require("./modelModel");

const Buy = sequelize.define(
  "buy",
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
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    modelId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Model,
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Buy;
