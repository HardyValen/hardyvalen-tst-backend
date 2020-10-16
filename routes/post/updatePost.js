// URL: /post

var express = require('express');
var router = express.Router();
const services = require('../../services');

router.post('/', async function(req, res, next) {
  try {
    await services.PostService.updatePost(req.body);
    res.status(200).send("UPDATE OK");
  } catch (error) {
    res.status(503).send(`Cannot delete requested post: ${error}`);
  }
});
module.exports = router;