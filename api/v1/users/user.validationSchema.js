const Joi = require("joi");

module.exports = {
  list: Joi.object({
    sort_order: Joi.string()
      .valid("ASC", "DESC")
      .default("DESC")
      .optional()
      .label("Sort Order"),
    sort_key: Joi.string()
      .trim()
      .optional()
      .valid("updated_at", "created_at")
      .default("created_at")
      .label("Sort Key"),
    limit: Joi.number()
      .min(1)
      .default(20)
      .optional()
      .label("Limit"),
    skip: Joi.number()
      .min(0)
      .default(0)
      .optional()
      .label("Skip"),
    search: Joi.string()
      .trim()
      .optional()
      .label("Search keyword")
  }),
};
