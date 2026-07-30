const Joi = require("joi");

describe("Joi", () => {
  it("should can validate object", () => {
    const loginSchema = Joi.object({
      username: Joi.string().min(3).max(100).email().required(),
      password: Joi.string().min(6).max(100).required(),
    });

    const request = {
      username: "rizki@gmail.com",
      password: "rahasia",
    };

    const result = loginSchema.validate(request, {
      abortEarly: false,
    });

    console.log(result);
  });

  it.only("should can validate nested object", () => {
    const createUserSchema = Joi.object({
      id: Joi.string().required().max(100),
      name: Joi.string().required().max(100),
      address: Joi.object({
        street: Joi.string().required().max(200),
        city: Joi.string().required().max(100),
        country: Joi.string().required().max(100),
        zipCode: Joi.string().required().max(10),
      }).required(),
    });

    const request = {
      id: "1",
      name: "user",
      address: {
        street: "Cisauk Lapan",
      },
    };

    const result = createUserSchema.validate(request, {
      abortEarly: false,
    });

    console.log(result);

    if (result.error) {
      result.error.details.forEach((detail) => {
        console.log(detail.message);
      });
    }
  });
});
