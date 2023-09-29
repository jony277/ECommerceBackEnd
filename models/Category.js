const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Category extends Model {}

Category.init(
  {
    // Add the 'id' field
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Existing fields
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
