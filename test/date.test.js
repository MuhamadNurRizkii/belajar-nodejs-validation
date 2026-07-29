const Joi = require("joi");

describe("Joi", () => {
  it("should can validate date", () => {
    const birthDateSchema = Joi.date().required().max("now").min("1-1-2001");

    const { value, error } = birthDateSchema.validate("12-8-1998");

    if (error) {
      console.log(error.message);
    }

    console.log(value);
  });
});
