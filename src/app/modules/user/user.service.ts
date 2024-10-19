import { User } from "./user.model"

export  const createUserToDb = async () =>{
    const user =await new User ({
      id: '85',
      role: 'student',
      password: '4545',
      name: {
        firstName: 'Md',
        middleName: 'Test',
        lastName: 'Hossen',
      },
      dateOfBirth: '1-1-2000',
      gender: 'male',
      email: 'sajibbabu751@gmail.com',
      contactNumber: '01611970979',
      presentAddress: 'Muragacha ',
      permanentAddress: 'Muragacha',
    })
    await user.save()
    return user
   }

   export const getUsersFromDB =async () => {
    const users = await User.find()
    return users
   }