var express = require('express');
const sequelize = require("../db/connect");
var router = express.Router();

// FIRST LEVEL ROUTES
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/check-db-connection', async function(req, res) {
  try {
    await sequelize.authenticate();
    res.status(200).send("Connected to azure database!");

  } catch (error) {
    res.status(503).send("Cannot connect database: " + error);
  }
})

// POST Routes
router.use('/post', require("./post"));

module.exports = router;
