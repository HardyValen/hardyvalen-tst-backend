// URL: GET /post/get-all

var express = require('express');
const services = require('../../services');
var router = express.Router();

router.get('/', async function(req, res, next) {
  try {
    let data = await services.PostService.getAllPosts();
    res.status(200).send(data);
  } catch (error) {
    res.status(503).send("Cannot fetch all posts from database: " + error);
  }
});

module.exports = router;