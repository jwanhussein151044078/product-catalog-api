const apiClient = require("../utils/apiClient");
const CustomError = require("../utils/CustomError");

async function getAllCatalogs(data){
  try {
    const response = await apiClient.get('/product',{params : {offset:data.offset,limit:data.limit}});
    return response.data;
  } catch (error) {
    if(error.response?.status){
      throw new CustomError(error.response?.data?.errors?.[0].message,error.response?.status)
    }else{
      throw new CustomError(error.message , 500);
    }
  }
}

async function getCatalogDetailById(id){
  try {
    const response = await apiClient.get('/product/'+id);
    return response.data;
  } catch (error) {
    if(error.response?.status){
      throw new CustomError(error.response?.data?.errors?.[0].message,error.response?.status)
    }else{
      throw new CustomError(error.message , 500);
    }
  }
}

async function checkCatalogAvalibility(id,data){
  try {
    const response = await apiClient.post("/product/"+id+"/check",{
      ...data,
      IP : "94.123.238.104"
    });
    return response.data;
  } catch (error) {
    if(error.response?.status){
      throw new CustomError(error.response?.data?.errors?.[0].message,error.response?.status)
    }else{
      throw new CustomError(error.message , 500);
    }
  }
}

module.exports = {
  getAllCatalogs,
  getCatalogDetailById,
  checkCatalogAvalibility
};