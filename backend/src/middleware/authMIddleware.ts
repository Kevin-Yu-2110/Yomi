import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface JwtUserPayload {
  userId: string;
  role: string;
}

declare module "express-serve-static-core" {
  interface Request {
    user?: JwtUserPayload;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json("authorization header is blank");
    return;
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    res.status(401).json("token is missing");
    return;
  }

  const secret = process.env.secret;
  if (!secret) throw new Error("JWT Secret not set in env variable");

  jwt.verify(token, secret, (err, user) => {
    if (err) {
        res.status(401).json("token rejected");
        return
    }
    req.user = user as JwtUserPayload;
    next();
  });
}