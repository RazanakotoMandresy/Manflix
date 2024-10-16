export interface Payload {
  userId: string;
  userName: string;
}
//
export interface Mess {
  // du genre new anime dandan hier op dimanche
  text: string;
  time: string;
}
interface Rate {
  allStarsEarned: number;
  allViewsEarned: number;
}
// Interface
export interface IVideo {
  src: string;
  categories: string;
  description: string;
  views: number;
  comments: Array<Mess>;
  createdBy: string;
}

export interface IUser {
  name: string;
  email: string;
  passwords: string;
  isPrenium: boolean;
  StaredVideo: Array<string>;
  FollowedPages: Array<string>;
  Notification: Array<Mess>;
}
export interface IAnimePage {
  name: string;
  // page owner mety pluieurs user array ana user
  pageOwner: Array<string>;
  followers: Array<string>;
  notification: Array<Mess>;
  Rates: number;
  // TODO array ana video apres
  videos: Array<string>;
}
