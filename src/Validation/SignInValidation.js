
const SignInValidation = (newUser) => {
  const Joi = require('joi');
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let statusObj = { message: "", status: false }
  const schema = Joi.object({
    email: Joi.string()
      .pattern(regex)
      .required()
      .messages(
        {
          "string.empty": "برجاء كتابة بريدك الإلكتروني",
          "string.pattern.base": "يجب كتابة بريد إلكتروني صالح مثل 'gameover@example.com'"
        }
    ), 
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required().messages(
        {
          "string.empty": "برجاء كتابة كلمة السر",
          "string.pattern.base": "يجب كتابة كلمة سر صالحة مثل'gameover123'"
        }
      ),
  })

  let isValid = schema.validate(newUser)
  if (!isValid.error) {
    statusObj.status = true
  } else {
    statusObj.message = isValid.error.message
    statusObj.status = false
  }
  return statusObj 

}

export default SignInValidation