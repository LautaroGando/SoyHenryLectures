const {Router} = require("express");
const petRouter = require("./petRouter");
const userRouter = require("./userRouter");

const router = Router();

router.use("/pets", petRouter);
router.use("/users", userRouter);

module.exports = router;