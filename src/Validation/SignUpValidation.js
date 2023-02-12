
const SignUpValidation = (user) => {
  const Joi = require('joi');
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let statusObj = { message: "", status: false }
  const schema = Joi.object({
    first_name: Joi.string()
      .pattern(new RegExp(/[\u0600-\u06FF]/))
      .min(2)
      .max(30)
      .required()
      .messages(
          {
          "string.empty": "برجاء كتابة الاسم",
          "string.min": "يجب أن يتكون الاسم من حرفين أو أكثر",
          "string.max": "يجب ألا يزيد الاسم عن 16 عشر حرفاً",
          "string.pattern.base":"يجب كتابة الاسم بحروف عربية"
          }),
    last_name: Joi.string()
      .pattern(new RegExp(/[\u0600-\u06FF]/))
      .min(2)
      .max(30)
      .required()
      .messages(
        {
          "string.empty": "برجاء كتابة اسم الأب",
          "string.min": "يجب أن يتكون الاسم من حرفين أو أكثر",
          "string.max": "يجب ألا يزيد الاسم عن 16 عشر حرفاً",
          "string.pattern.base": "يجب كتابة الاسم بحروف عربية"
        }),
    age: Joi.number()
      .min(18)
      .max(60)
      .required()
      .messages(
        {
          "number.empty": "برجاء كتابة العمر",
          "number.min": "عذراً يجب أن يكون السن أكبر من 18 سنة",
          "number.max": "عذراً يجب أن يكون السن أصغر من 60 سنة",
        }
      ),
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

  let isValid = schema.validate(user)
  if (!isValid.error) {
    statusObj.status = true
  } else {
    statusObj.message = isValid.error.message
    statusObj.status = false
  }
  return statusObj 

}

export default SignUpValidation