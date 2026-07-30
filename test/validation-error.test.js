const Joi = require("joi");

describe("Joi", () => {
  it("should return validation error", () => {
    const usernameSchema = Joi.string().min(5).email().required();

    const result = usernameSchema.validate("user");
    console.log(result);

    if (result.error) {
      result.error.details.forEach((detail) => {
        console.log(`${detail.path} = ${detail.message}`);
      });
    }
  });
});
