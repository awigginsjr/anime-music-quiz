const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Choice extends Model {}

Choice.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    choiceText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quizId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'quiz',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'choice',
  }
);

module.exports = Choice;
