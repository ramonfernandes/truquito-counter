export interface GameModel {
  player: PlayerModel;
  oponent: PlayerModel;
  _id: string;
  gameId: string
}

export interface PlayerModel {
  name: string;
  score: number;
}

