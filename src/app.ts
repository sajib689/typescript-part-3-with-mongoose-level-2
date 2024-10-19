import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { model, Schema } from 'mongoose';
const app:Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.get("/", async(req: Request, res: Response) => {
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
  const userSchema = new Schema <IUser> ({
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
      enum: ["male", "female"],
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
  // create the model
  const User = model<IUser>('User', userSchema)
  
  const user = new User ({
    id: '232',
    role: 'student',
    password: '332334',
    name: {
      firstName: 'Md',
      middleName: 'Sajib',
      lastName: 'Hossen',
    },
    dateOfBirth: '1-1-1999',
    gender: 'male',
    email: 'sajibbabu751@gmail.com',
    contactNumber: '01611970979',
    presentAddress: 'Muragacha ',
    permanentAddress: 'Muragacha',
  })
  await user.save()
  console.log(user.email)
  });

  export default app;