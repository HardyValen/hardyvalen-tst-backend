'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    
    static associate(models) { 
    }
  };
  
  Post.init({
    "post-id": {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    "post-title": {
      type: DataTypes.STRING
    },
    "post-body": {
      type: DataTypes.STRING
    },
    "post-author": {
      type: DataTypes.STRING,
    },
    "post-created-at": {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Post',
    timestamps: false
  });

  return Post;
};