const Joi = require("joi");


// password: Joi.string()
//     .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"))
//     .required()
//     .messages({
//       "string.pattern.base": "Password must include uppercase, lowercase, number, and special character, and be 8+ chars.",
//     }),   // use it for strong password 


//Admin Login


const adminRegisterSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    "string.base": "Name must be a string.",
    "string.empty": "Name is required.",
    "string.min": "Name should have at least 3 characters.",
    "any.required": "Name is required.",
  }),
  email: Joi.string().email().lowercase().required().messages({
    "string.email": "Please enter a valid email.",
    "any.required": "Email is required."
    
    ,
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters.",
    "any.required": "Password is required",
  }),
  phoneNumber: Joi.string()
    .pattern(/^\+[1-9]\d{7,14}$/)
    .required()
    .messages({
      "string.pattern.base":
        "Phone number must be in international format, e.g., +911234567893",
      "string.empty": "Phone number is required.",
      "any.required": "Phone number is required.",
    }),
  accountType: Joi.string().valid("admin").messages({
    "any.only": "Account type must be admin.",
    "any.required": "Account type is required.",
  }),
  role: Joi.string().optional(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().lowercase().required().messages({
    "string.email": "Please enter a valid email.",
    "any.required": "Email is required.",
  }),
  password: Joi.string().required().messages({
    "any.required": "Password is required",
  }),
});

const otpVerifySchema = Joi.object({
  email: Joi.string().email().lowercase().required().messages({
    "string.email": "Please enter a valid email.",
    "any.required": "Email is required.",
  }),
  otp: Joi.string().length(6).required().messages({
    "string.length": "OTP must be 6 digits.",
    "any.required": "OTP is required.",
  }),
});

const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().lowercase().required().messages({
    "string.email": "Please enter a valid email",
    "any.required": "Email is required.",
  }),
});

const resetPasswordSchema = Joi.object({
  email: Joi.string().email().lowercase().required().messages({
    "string.email": "Please enter a valid email.",
    "any.required": "Email is required.",
  }),
  otp: Joi.string().length(6).required().messages({
    "string.length": "OTP must be 6 digits.",
    "any.required": "OTP is required.",
  }),
  newPassword: Joi.string().min(6).messages({
    "string.min": "Password must be at least 6 characters.",
    "any.required": "Password is required",
  }),
});



const adminUpdateSchema = Joi.object({
  name: Joi.string().min(3).messages({
    "string.base": "Name must be a string.",
    "string.empty": "Name is required.",
    "string.min": "Name should have at least 3 characters.",
    "any.required": "Name is required.",
  }),
  email: Joi.string().email().lowercase().messages({
    "string.email": "Please enter a valid email.",
    "any.required": "Email is required."
    
    ,
  }),
  password: Joi.string().min(6).messages({
    "string.min": "Password must be at least 6 characters.",
    "any.required": "Password is required",
  }),
  phoneNumber: Joi.string()
    .pattern(/^\+[1-9]\d{7,14}$/)
    .messages({
      "string.pattern.base":
        "Phone number must be in international format, e.g., +911234567893",
      "string.empty": "Phone number is required.",
      "any.required": "Phone number is required.",
    }),
  accountType: Joi.string().valid("admin").messages({
    "any.only": "Account type must be admin.",
    "any.required": "Account type is required.",
  }),
  role: Joi.string().optional(),
});

module.exports = {
  adminRegisterSchema,
  loginSchema,
  otpVerifySchema,
  resetPasswordSchema,
  forgotPasswordSchema,
  adminUpdateSchema
};
