import Joi from "joi";

describe("joi", () => {
  it("should can create schema", () => {
    const schema = Joi.string().min(3).max(10).required();

    const result = schema.validate("rizki");

    if (result.error) {
      console.log(result.error);
    }
  });

  it("should can validate data type", () => {
    const usernameSchema = Joi.string().email().required();
    const isAdminSchema = Joi.boolean().required();
    const priceSchema = Joi.number().min(0).max(1000000000).required();

    const userSchema = Joi.object({
      username: Joi.string().email().required(),
      isAdmin: Joi.boolean().required(),
      price: Joi.number().min(1000).max(1000000000).required(),
    });

    const user = {
      username: "rizki",
      isAdmin: "benar",
      price: 20000,
    };

    console.log("=== Joi Object ===");
    const resultUser = userSchema.validate(user, {
      abortEarly: false,
    });

    if (resultUser.error) {
      const messages = resultUser.error.details.map((err) => err.message);
      console.log(messages);
    }

    console.log(resultUser);

    // const resultUsername = usernameSchema.validate("rizki@gmail.com");
    // console.log(resultUsername);

    // const resultIsAdmin = isAdminSchema.validate(false);
    // console.log(resultIsAdmin);

    // const resultPrice = priceSchema.validate(100000);
    // console.log(resultPrice);
  });
});
