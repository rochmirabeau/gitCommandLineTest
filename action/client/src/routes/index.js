const path = require("path")
var router = require("express").Router();
var apiRoutes = require("./api");
//roch not using handlebars
//var viewRoutes = require("./view");

router.use("/api", apiRoutes);
router.use("/", viewRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html
})
module.exports = router;
