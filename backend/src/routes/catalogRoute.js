const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalogController');

/**
 * @swagger
 * /catalog:
 *   get:
 *     summary: Retrieve a list of products from the catalog
 *     description: Fetches the full list of available products with optional pagination.
 *     parameters:
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *         required: false
 *         description: "The number of items to skip (default: 0)."
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: false
 *         description: "The number of items to retrieve (default: 50, max: 200)."
 *     responses:
 *       200:
 *         description: A successful response with the list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: Unique product ID.
 *                       sku:
 *                         type: string
 *                         description: Publisher SKU.
 *                       genericName:
 *                         type: string
 *                         description: Product name.
 *                       platform:
 *                         type: string
 *                         description: Product platform (e.g., Steam).
 *                       prices:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             currency:
 *                               type: string
 *                             price:
 *                               type: integer
 *                             divider:
 *                               type: integer
 *       404:
 *         description: No products found.
 *       500:
 *         description: Internal server error.
 */
router.route("/")
  .get(catalogController.getAllCatalogs);


/**
 * @swagger
 * /catalog/{id}:
 *   get:
 *     summary: Getting your availability stock for a given product you can sell
 *     description: Given the product id, the API returns useful information regarding the product and its availability.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: "The id of items "
 *     responses:
 *       404:
 *         description: No products found.
 *       500:
 *         description: Internal server error.
 */  
router.route("/:id")
  .get(catalogController.getCatalogDetailById);

/**
 * @swagger
 * /catalog/{id}/check:
 *   post:
 *     summary: Allow you to check if a sale is possible given its context. 
 *     description: Given the product id, a country code, a currency, and a price, the API returns if a compatible key is available.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: "The id of the product."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               countryCode:
 *                 type: string
 *                 description: "ISO 3166 alpha 2 country code format representing the buyer's country (optional)."
 *                 example: "FR"
 *               currency:
 *                 type: string
 *                 description: "ISO 4217 currency code (e.g., EUR, USD_CIS, USD_LATAM)."
 *                 example: "EUR"
 *               price:
 *                 type: integer
 *                 description: "The public price applied in cents (e.g., 10.00$ is 1000 if divisor = 2)."
 *                 example: 1000
 *             required:
 *               - currency
 *               - price
 *     responses:
 *       404:
 *         description: No products found.
 *       500:
 *         description: Internal server error.
 */
router.route("/:id/check")
  .post(catalogController.checkCatalogAvalibility);

module.exports = router;