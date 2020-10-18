'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    
    static associate(models) { 
    }
  };
  
  Post.init({
    "post_id": {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    "post_title": {
      type: DataTypes.STRING,
      allowNull: false
    },
    "post_body": {
      type: DataTypes.STRING,
      allowNull: false
    },
    "post_author": {
      type: DataTypes.STRING,
      allowNull: false
    },
    "post_created_at": {
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