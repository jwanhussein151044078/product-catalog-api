const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalogController');

router.route("/")
  .get(catalogController.getAllCatalogs);

router.route("/:id")
  .get(catalogController.getCatalogDetailById);

router.route("/:id/check")
  .post(catalogController.checkCatalogAvalibility);

module.exports = router;