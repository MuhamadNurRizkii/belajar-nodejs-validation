const Joi = require("joi");

describe("Joi", () => {
  it("should return validation error", () => {
    const usernameSchema = Joi.string().min(5).email().required();

    const personSchema = Joi.object({
      name: Joi.string().required(),
      age: Joi.number().min(0).max(100),
      address: Joi.string().required(),
    });

    const result = usernameSchema.validate("user");
    const resultPerson = personSchema.validate(
      {
        name: "Rizki",
        age: -1,
        address: 23,
      },
      {
        abortEarly: false,
      },
    );
    console.log(result);

    console.log(resultPerson);

    const errorLog = [];

    if (resultPerson.error) {
      resultPerson.error.details.forEach((detail) => {
        errorLog.push({ path: detail.path[0], message: detail.message });
      });
    }

    errorLog.forEach((err) => console.log(err.path));
  });
});
