const Joi =require("joi")

const roleSchema = Joi.object({
    name:Joi.string().required().messages({
        "any.required":"Role name is required"
    }),
    permissions: Joi.array().items(Joi.string()).messages({
        "array.base":"Permissions must be an array of strings.",
    })
});


module.exports = {roleSchema};