import { Request, Response } from "express"
import { createUserToDb, getUsersFromDB } from "./user.service"

export const createUser = async (req: Request, res: Response) => {
 const user = await createUserToDb()
 res.status(200).send({
    status: "success",
    data: user,
 })
}

export const getUsers = async (req: Request, res: Response) => {
   const user = await getUsersFromDB()
   res.status(200).json({user})
}