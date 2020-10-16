// URL: GET /post/get?id=<id>

var express = require('express');
const services = require('../../services');
var router = express.Router();

router.get('/', async function(req, res, next) {
  const { id } = req.query;
  
  if (typeof id === 'undefined') {
    res.status(404).send("You must include ID as URL query");
  } else {
    try {
      let data = await services.PostService.getPostByID(id);
      res.status(200).send(data);
    } catch (error) {
      res.status(503).send(`Cannot fetch post with ID: ${id} from database: ${error}`);
    }
  }
});

module.exports = router;