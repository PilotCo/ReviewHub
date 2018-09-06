const router = require("express").Router();
const videosController = require("../../controllers/videosController");

router.route("/")
  .get(videosController.findAll);
  //.post(adventuresController.create);

// // Matches with "/api/adventures/:category"
// router
//   .route("/category/:category")
//   .get(adventuresController.findAllCategories)
//   .put(adventuresController.update)
//   .delete(adventuresController.remove);

// router
//   .route("/:id")
//   .get(adventuresController.findById)
//   .put(adventuresController.update)
//   .delete(adventuresController.remove);

module.exports = router;