// URL: GET /post

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send(`<p>
    Posts Route:<br/>
    &ensp;├ GET /post/get-all<br/>
    &ensp;├ GET /post/get<br/>
    &ensp;├ POST /post/update<br/>
    &ensp;├ POST /post/delete<br/>
    &ensp;└ POST /post/create<br/>
  </p>`);
});

router.use("/get-all", require("./getAllPosts"));
router.use("/get", require("./getPostByID"));
router.use("/update", require("./updatePost"));
router.use("/delete", require("./deletePost"));
router.use("/create", require("./createPost"));

module.exports = router;