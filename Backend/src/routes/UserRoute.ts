import { Router } from "express";
import { UserRepo } from "../repository/UserRepo";
import { UserService } from "../service/UserService";
import { UserController } from "../controller/UserController";

const router = Router();

const userRepository = new UserRepo();
const authService = new UserService(userRepository);
const authController = new UserController(authService);

router.post(
    "/register",
    authController.register.bind(authController)
);

router.post(
    "/login",
    authController.login.bind(authController)
);

export default router;