import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/order/:id', async (req: Request, res: Response) => {

});

export { router as orderDetailsRouter };