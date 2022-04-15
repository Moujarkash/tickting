import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/order', async (req: Request, res: Response) => {

});

export { router as ordersRouter };