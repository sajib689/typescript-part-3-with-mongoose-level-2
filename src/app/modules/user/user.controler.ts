import { Request, Response } from "express"
import { createUserToDb, getUserByIdFromDB, getUsersFromDB } from "./user.service"

export const createUser = async (req: Request, res: Response) => {
   const data = req.body 
   const user = await createUserToDb(data)
   res.status(200).send({
    status: "success",
    data: user,
 })
}

export const getUsers = async (req: Request, res: Response) => {
   const user = await getUsersFromDB()
   res.status(200).json({user})
}

export const getUserById = async (req: Request, res: Response) => {
   const {id} = req.params
   const user = await getUserByIdFromDB(id)
   res.status(200).json({user})
}