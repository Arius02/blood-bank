
const ContactValidation = (user) => {
  const Joi = require('joi');
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex = /01[0-2|5]\d{1,8}$/
  let statusObj= {message:"",status: false}
  const schema = Joi.object({
    name: Joi.string()
      .pattern(new RegExp(/[\u0600-\u06FF]/))
      .min(2)
      .max(30)
      .required()
      .messages(
        {
          "string.empty": "برجاء كتابة الاسم",
          "string.min": "يجب أن يتكون الاسم من حرفين أو أكثر",
          "string.max": "يجب ألا يزيد الاسم عن 16 عشر حرفاً",
          "string.pattern.base": "يجب كتابة الاسم بحروف عربية"
        }),
        phoneNumber: Joi.string()
        .pattern(phoneRegex)
        .min(11)
        .max(11)
        .messages(
          {
            "string.empty": "برجاء كتابة رقم الهاتف",
            "string.min": "رقم الهاتف لا يمكن أن يكون أقل من 11 رقم",
            "string.max": "رقم الهاتف لا يمكن أن يكون أكثر من 11 رقم",
            "string.pattern.base": "رقم الهاتف يجب أن يبدأ بـ[011,015,012,010] ويتكون من أحد عشر رقماً"
          }
        )
        .required(),
    email: Joi.string()
      .pattern(emailRegex)
      .required()
      .messages(
        {
          "string.empty": "برجاء كتابة بريدك الإلكتروني",
          "string.pattern.base": "يجب كتابة بريد إلكتروني صالح مثل 'gameover@example.com'"
        }
    ), 
    message: Joi.string()
      .pattern(new RegExp(/[\u0600-\u06FF]/))
      .min(24)
      .max(200)
      .required()
      .messages(
        {
          "string.empty": "برجاء كتابة الرسالة",
          "string.min": "يجب أن لا تقل الرسالة عن 24 حرفاً",
          "string.max": "يجب أن لا تزيد الرسالة عن 200 حرفاً",
          "string.pattern.base": "يجب كتابة الرسالة بحروف عربية"
        }),
  })
  let isValid = schema.validate(user)
  if (!isValid.error) {
    statusObj.status = true
  } else {
    statusObj.message= isValid.error.message
    statusObj.status= false 
  }
  return statusObj 

}

export default ContactValidation