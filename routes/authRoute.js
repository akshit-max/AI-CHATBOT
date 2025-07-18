import express from "express";
import { loginController, registerController, testController,forgotPasswordController } from "../controller/authController.js";
import { isAdmin,requireSignIn } from "../middleware/authMiddleware.js";

//router object
const router = express.Router();

//routing
// REGISTER || METHOD POST
router.post("/register", registerController);

// // //LOGIN || POST
router.post("/login", loginController);

// //Forgot Password || POST
router.post("/forgot", forgotPasswordController);


// //test routes
// router.get("/test", requireSignIn, isAdmin, testController);
// router.get("/test", requireSignIn,  testController);
router.get("/test",  testController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});


// //protected Admin route auth
// router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
//   res.status(200).send({ ok: true });
// });





export default router;