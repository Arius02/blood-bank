const DonationValidation=(user)=>{

    const Joi = require('joi');
    let statusObj = { message: "", status: false }
  const arabicRegex = /[\u0600-\u06FF]/
  const bloodTypeRegex = /(A|B|AB|O)[+-]/
  const phoneRegex = /01[0-2|2]\d{1,8}$/
    const schema = Joi.object({
      first_name: Joi.string()
        .pattern(arabicRegex)
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
      last_name: Joi.string()
        .pattern(arabicRegex)
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
      country: Joi.string()
        .pattern(arabicRegex)
        .min(2)
        .max(30)
        .required()
        .messages(
          {
            "string.empty": "برجاء كتابة اسم الدولة",
            "string.min": "يجب أن يتكون اسم البلد من حرفين أو أكثر",
            "string.max": "يجب ألا يزيد اسم البلد عن 20 عشر حرفاً",
            "string.pattern.base": "يجب كتابة اسم البلد بحروف عربية"
          }),
      location: Joi.string()
        .pattern(arabicRegex)
        .min(3)
        .max(30)
        .required()
        .messages(
          {
            "string.empty": "برجاء كتابة اسم المدينة",
            "string.min": "يجب أن يتكون اسم المدينة من حرفين أو أكثر",
            "string.max": "يجب ألا يزيد اسم المدينة عن 20 عشر حرفاً",
            "string.pattern.base": "يجب كتابة اسم المدينة بحروف عربية"
          }), 
          phone_number: Joi.string()
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
      gander: Joi.string()
        .required()
        .messages({
          "string.empty": "برجاء تحديد الجنس"
        }),
      blood_type: Joi.string()
        .pattern(bloodTypeRegex)
        .required()
        .messages(
          {
            "string.empty": "برجاء كتابة فصيلة الدم",
            "string.pattern.base": "برجاء كتابة فصيلة الدم [A+,A-,B+,B-,AB+,AB-,O+,O-]"
          }),
      last_time: Joi.string()
        .required()
        .messages({
          "string.empty": "برجاء تحديد المدة من أخر تبرع"
        }),
      first_message: Joi.string()
        .pattern(new RegExp(/[\u0600-\u06FF]/))
        .max(200)
        .required()
        .messages(
          {
            "string.empty": "اجابتك تساعدنا كثيراً لذا لطفاً أجب عن جميع الأسئلة",
            "string.max": "يجب أن لا تزيد الرسالة عن 200 حرفاً",
            "string.pattern.base": "يجب كتابة الرسالة بحروف عربية"
          }),
      last_message: Joi.string()
        .pattern(new RegExp(/[\u0600-\u06FF]/))
        .max(200)
        .required()
        .messages(
          {
            "string.empty": "اجابتك تساعدنا كثيراً لذا لطفاً أجب عن جميع الأسئلة",
            "string.max": "يجب أن لا تزيد الرسالة عن 200 حرفاً",
            "string.pattern.base": "يجب كتابة الرسالة بحروف عربية"
          }),
       
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

export default DonationValidation