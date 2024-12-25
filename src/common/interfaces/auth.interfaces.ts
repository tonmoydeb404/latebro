import { User } from '@/modules/user/entities/user.entity';

export interface IAuthPayload {
  _id: string;
}

export interface IAuthResponse {
  user: User;
  payload: IAuthPayload;
  token: string;
}
