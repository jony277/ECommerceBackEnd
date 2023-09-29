const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class ProductTag extends Model {}

ProductTag.init(
  {
    // Add the missing 'id' field
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Add the missing 'product_id' field
    product_id: {
      type: DataTypes.INTEGER,
      // other constraints can go here
    },
    // Add the missing 'tag_id' field
    tag_id: {
      type: DataTypes.INTEGER,
      // other constraints can go here
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
