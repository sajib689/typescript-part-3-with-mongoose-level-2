import express, { Application } from 'express';
import cors from 'cors';
const app:Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))
import userRoute from './app/modules/user/user.route'

app.use("/api/v1/user", userRoute);

export default app;