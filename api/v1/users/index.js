const router = require("express").Router();
const cntrl = require("./user.controller");
const validationSchema = require("./user.validationSchema");
const validator = require("express-joi-validation").createValidator({
  passError: true
});
// const { auth, headerSchema } = require("../../../utilities/common");

/* Get User profile*/
router.get(
  "/",
  // validator.headers(headerSchema),
  validator.params(validationSchema.list),
  // auth(null, true),
  cntrl.list
);


module.exports = router;
