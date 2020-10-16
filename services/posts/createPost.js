const { DataTypes } = require('sequelize');
var sequelize = require('../../db/connect');
const post = require('../../db/models/post')(sequelize, DataTypes);

// Post service for create new post.
// ASYNC function

module.exports = async ({title, body, author}) => {
  let t = await sequelize.transaction();
  try {
    await post.create({
      "post-title": title,
      "post-body": body,
      "post-author": author,
      "post-created-at": new Date()
    }, { transaction: t });

    await t.commit();
  } catch (error) {
    await t.rollback();
    throw error
  }
}