const {Router} = require("express");
const teamRouter = require("./teamRouter");

const router = Router();

router.use("/teams", teamRouter);

module.exports = router;