import { model, Schema } from "mongoose";

interface IAnimePage {
  name: string;
  // page owner mety pluieurs user array ana user
  pageOwner: Array<string>;
  followers: Array<string>;
  notification: Array<notif>;
  Rates: number;
  // TODO array ana video apres
  videos : Array<string>;
}

interface notif {
  // du genre new anime dandan hier op dimanche
  messages: string;
  time: string;
}
interface rate {
  allStarsEarned : number,
  allViewsEarned : number
}
const animePageSchema = new Schema<IAnimePage>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  pageOwner: Array<String>,
  followers : Array<String>,
  notification : Array<notif>,
  videos: Array<String>,
  Rates: Number,
});
export default model("Pages",animePageSchema)