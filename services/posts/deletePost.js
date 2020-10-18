const { DataTypes } = require('sequelize');
var sequelize = require('../../db/connect');
const post = require('../../db/models/post')(sequelize, DataTypes);

// Post service for delete post by id.
// ASYNC function

module.exports = async ({id}) => {
  let t = await sequelize.transaction();
  try {
    await post.destroy(
      {
        where: {
          "post_id": id
        }
      }, 
      { transaction: t }
    );

    await t.commit();
    
  } catch (error) {
    await t.rollback();
    throw new Error(error);
  }
}