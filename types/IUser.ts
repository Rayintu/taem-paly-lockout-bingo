export enum UserType {
  PLAYER,
  SPECTATOR,
}

export interface IUser {
  connectionId: string;
  username: string;
  role: UserType;
  isHost: boolean;
}
