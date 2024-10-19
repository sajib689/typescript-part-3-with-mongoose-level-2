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
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      }
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
    emergencyContactNumber: {
      type: String,
    },
    presentAddress: {
      type: String,
    },
    permanentAddress: {
      type: String,
    }
  })


    
  });

  export default app;