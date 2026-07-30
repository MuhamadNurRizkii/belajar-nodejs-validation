const Joi = require("joi");

describe("Joi", () => {
  it("should can validate array", () => {
    const hobbiesSchema = Joi.array()
      .items(Joi.string().required().min(3))
      .min(1)
      .unique();

    const hobbies = ["olahraga", "trading", "baca buku"];

    const result = hobbiesSchema.validate(hobbies);

    if (result.error) {
      console.log(result.error.message);
    }

    console.log(result);
  });
});
