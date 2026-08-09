import express from 'express';
import cookieParser from 'cookie-parser';
import { authRouter } from './routes/auth-routes.js';
import { memberRouter } from './routes/members-routes.js';
import { trainerRouter } from './routes/trainers-routes.js';
import { configDotenv } from 'dotenv';
import { connectDb } from './database/db.js';
configDotenv();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/auth', authRouter);
app.use('/member', memberRouter);
app.use('/trainer', trainerRouter);
connectDb();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('lestening to port, ', port);
});
//# sourceMappingURL=server.js.map