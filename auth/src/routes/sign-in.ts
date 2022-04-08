import express from 'express';

const router = express.Router();

router.post('/api/users/signIn', (req, res) => {
    res.send('Hi There');
});

export { router as signInRouter };