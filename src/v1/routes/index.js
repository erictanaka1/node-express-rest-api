// Currently in file src/v1/routes/index.js
const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send(`<h1>${req.method} in ${req.baseUrl}</h1>`);
});

module.exports = router;