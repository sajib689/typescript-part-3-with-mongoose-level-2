import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  await user.save();
  return user;
};

export const getUsersFromDB = async () => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({id: payload});
    return user;
}