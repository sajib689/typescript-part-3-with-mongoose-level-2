import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { Schema } from 'mongoose';
const app:Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.get("/", (req: Request, res: Response) => {
  // create a new interface
  interface IUser {
    id: string;
    role: 'student';
    password: string;
    name: {
      firstName: string,
      middleName: string,
      lastName: string,
    }
    dateOfBirth?: string;
    gender: 'male' | 'female';
    email?: string;
    contactNumber?: string;
    emergencyContactNumber?: string;
    presentAddress?: string;
    permanentAddress?: string;
  }
  // creating a new Schema object

  const useSchema = new Schema <IUser> ({
    
  })


    
  });

  export default app;