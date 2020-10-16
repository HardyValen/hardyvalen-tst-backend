const PostService = {
  "getAllPosts"   : require("./posts/getAllPosts"),
  "getPostByID"   : require("./posts/getPostByID"),
  "createPost"    : require("./posts/createPost"),
  "deletePost"    : require("./posts/deletePost"),
  "updatePost"    : require("./posts/updatePost"), 
};

module.exports = {
  PostService
}