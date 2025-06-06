const {categoryModel} = require("../models")


let categoryService = {};


categoryService.save = async (dataToSave)=>{
    return await  categoryModel(dataToSave).save();
};


module.exports = categoryService;