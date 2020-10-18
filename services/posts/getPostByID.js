const { DataTypes } = require('sequelize');
var sequelize = require('../../db/connect');
const post = require('../../db/models/post')(sequelize, DataTypes);

// Post service for read all data.
// ASYNC function

module.exports = async (id) => {
  return post.findOne({
    where: {
      "post_id": id
    }
  });
}