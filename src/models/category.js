"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      url: DataTypes.STRING,
      highlight: DataTypes.BOOLEAN,
      order: DataTypes.INTEGER,
      icon: DataTypes.STRING,
      banner: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
