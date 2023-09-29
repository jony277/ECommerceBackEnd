const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Tag extends Model {}

Tag.init(
  {
    // Add the missing 'id' field
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Existing fields
    tag_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
