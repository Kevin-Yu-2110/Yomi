import { Request, Response } from 'express'

export const dummyController = {
    hello: (req: Request, res: Response) => {
        res.json({ message: 'hello world'});
    },
    error: (req: Request, res: Response) => {
        throw new Error('test error');
        res.end();
    }
}