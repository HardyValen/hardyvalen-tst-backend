const { DataTypes } = require('sequelize');
var sequelize = require('../../db/connect');
const post = require('../../db/models/post')(sequelize, DataTypes);

// Post service for create new post.
// ASYNC function

module.exports = async ({id, title, body, author}) => {
  let t = await sequelize.transaction();
  try {
    await post.update({
      "post-title": title,
      "post-body": body,
      "post-author": author,
      "post-created-at": new Date()
    }, { 
      where: {
        "post-id": id
      },
      transaction: t 
    });

    await t.commit();
  } catch (error) {
    await t.rollback();
    throw error
  }
}