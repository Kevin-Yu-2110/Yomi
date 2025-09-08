import { Request, Response } from 'express'

export const authController = {
    register: (req: Request, res: Response) => {
        res.send('register logic to be implemented');
    },
    login: (req: Request, res: Response) => {
        res.send('login logic to be implemented');
    },
    logout: (req: Request, res: Response) => {
        res.send('logout logic to be implemented');
    },
};