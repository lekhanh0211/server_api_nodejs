'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    catId: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    salePrice: DataTypes.DOUBLE,
    desc: DataTypes.STRING,
    image: DataTypes.STRING,
    moreImage: DataTypes.STRING,
    order: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};