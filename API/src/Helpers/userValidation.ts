import joi from 'joi'

export const registerSchema = joi.object(
  {
    name: joi.string().required().min(5),
    email: joi.string().email().required(),
    password:joi.string().required().min(8),
    role:joi.string().required()
  }
)

export const loginSchema = joi.object({
  email: joi.string().email().required(),
  password:joi.string().required().min(8),
})