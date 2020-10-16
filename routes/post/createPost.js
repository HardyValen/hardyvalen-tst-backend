// URL: /post/create

var express = require('express');
var router = express.Router();
const services = require('../../services');

router.post('/', async function(req, res, next) {
  try {
    await services.PostService.createPost(req.body);
    res.status(200).send("CREATE OK");
  } catch (error) {
    res.status(503).send(`Cannot create new post: ${error}`);
  }
});

module.exports = router;