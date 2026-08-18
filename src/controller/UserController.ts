import { Request, Response } from "express";
import {UserService} from "../service/UserService";

export class UserController{
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }


    async register(req: Request, res: Response) {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({
                message: "Email et mot de passe requis"
            });
            return;
        }

        try {
            const user = await this.userService.createUser(
                email,
                password
            );

            res.status(201).json(user);

        } catch (err) {
            console.error(err);

            if (err instanceof Error && err.message === "Email déjà utilisé") {
                res.status(409).json({
                    message: err.message
                });
                return;
            }

            res.status(500).json({
                message: "Erreur de connexion à la base"
            });
        }
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({
                message: "Email et mot de passe requis"
            });
            return;
        }

        try {
            const user = await this.userService.login(
                email,
                password
            );

            res.status(200).json({
                message: "Connexion réussie",
                user
            });

        } catch (err) {
            console.error(err);

            res.status(401).json({
                message: "Email ou mot de passe incorrect"
            });
        }
    }

}