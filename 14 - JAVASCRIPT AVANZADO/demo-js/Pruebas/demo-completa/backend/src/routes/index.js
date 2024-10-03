const {Router} = require("express");
const userRouter = require("./userRouter");
const petRouter = require("./petRouter");

const router = Router();

router.use("/users", userRouter);
router.use("/pets", petRouter);

module.exports = router;