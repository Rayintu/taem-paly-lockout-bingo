import { v4 as uuidv4 } from "uuid";
import { IUser } from "~/types/IUser";

export default class RoomInstance {
  players: IUser[] = [];
  roomId: string;

  constructor(_host: IUser) {
    this.roomId = uuidv4();
    _host.isHost = true;
    this.players.push(_host);
  }
}
