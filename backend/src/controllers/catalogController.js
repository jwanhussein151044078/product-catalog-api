const catalogService = require('../services/catalogService');
const CustomError = require('../utils/CustomError');

async function getAllCatalogs(req, res){
  try {
    const {offset,limit} = req.query ;
    const status = await catalogService.getAllCatalogs({offset,limit});
    res.status(200).send(status);
  } catch (error) {
    next(new CustomError(error.message, error.statusCode || 500));
  }
}

async function getCatalogDetailById(req, res){
  try {
    const {id} = req.params;
    if(!id){
      throw new CustomError("Could not find { id }!!",400);
    }
    const status = await catalogService.getCatalogDetailById(id);
    res.status(200).send(status);
  } catch (error) {
    next(new CustomError(error.message, error.statusCode || 500));
  }
}

async function checkCatalogAvalibility(req, res,next){
  try {
    const {id} = req.params;
    const data = req.body;
    const status = await catalogService.checkCatalogAvalibility(id,data);
    res.status(200).send(status);
  } catch (error) {
    next(new CustomError(error.message, error.statusCode || 500));
  }
}

module.exports = {
  getAllCatalogs,
  getCatalogDetailById,
  checkCatalogAvalibility
};