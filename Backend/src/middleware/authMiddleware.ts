import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../Security/jwt";
import { AuthenticatedUser, Role } from "../model/User";


declare global {
    namespace Express {
        interface Locals {
            user: AuthenticatedUser;
        }
    }
}

export function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({
            message: "Token manquant"
        });
        return;
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        res.status(401).json({
            message: "Token manquant"
        });
        return;
    }

    try {
        const decoded = verifyToken(token);

        res.locals.user = decoded;

        next();

    } catch (error) {
        res.status(401).json({
            message: "Token invalide ou expiré"
        });
    }
    export const authorize =
        (...roles: Role[]) =>
            (req: Request, res: Response, next: NextFunction) => {
                if (!res.locals.user || !roles.includes(res.locals.user.role)) {
                    res.status(403).json({
                        message: "Permissions insuffisantes"
                    });
                    return;
                }

                next();
            };
}