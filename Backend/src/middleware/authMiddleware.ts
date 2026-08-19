import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../Security/jwt";

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
}