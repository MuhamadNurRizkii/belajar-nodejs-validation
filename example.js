import Joi from "joi";

const schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

try {
  const value = schema.validate({ username: 1234, password: "akuka" });
  console.log(value.value);

  value.error.details.forEach((err) => {
    console.log(err);
  });
} catch (error) {
  console.log(err);
}
