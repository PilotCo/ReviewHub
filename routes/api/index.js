const router = require("express").Router();
const adventureRoutes = require("./videos");
//const usersRoutes = require("./users");

// adventure routes
router.use("/videos", adventureRoutes);
// users routes
//router.use("/users", usersRoutes);

module.exports = router;