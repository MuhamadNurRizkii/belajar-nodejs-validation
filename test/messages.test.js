const Joi = require("joi");

describe("Joi", () => {
  it("should can custom message", () => {
    const schema = Joi.string().min(3).max(100).required().messages({
      "string.min": "{{#label}} panjang harus minimal {{#limit}} karakter",
      "string.max": "{{#label}} panjang harus maksimal {{#limit}} karakter",
    });

    const value = "ri";

    const result = schema.validate(value);

    console.log(result);
  });

  it.only("should can use custom validation in object", () => {
    const loginSchema = Joi.object({
      username: Joi.string().required().email().messages({
        "any.required": "{{#label}} harus diisi!",
        "string.email": "{{#label}} harus berupa email!",
      }),
      password: Joi.string().min(6).max(20).required().messages({
        "any.required": "{{#label}} harus diisi!",
        "string.min": "panjang {{#label}} minimal {{#limit}} karakter",
        "string.max": "panjang {{#label}} maksimal {{#limit}} karakter",
      }),
    });

    const value = {
      username: "rizuka@yahoo.com",
      password: "hahaha",
    };

    const result = loginSchema.validate(value, {
      abortEarly: false,
    });

    if (result.error) {
      console.log(result.error.message);
    }

    console.log(result);
  });
});
