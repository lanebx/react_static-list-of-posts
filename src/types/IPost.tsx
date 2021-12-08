import { IComments } from './IComments';
import { IUsers } from './IUser';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: IUsers | null;
  comments: IComments[] | null;
}
