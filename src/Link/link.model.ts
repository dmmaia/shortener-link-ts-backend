import { ObjectId } from 'mongodb'

export default class Link {
  _id?: ObjectId;
  link: string;
  shortted: string;

  constructor(link: string, shortted: string, id?: ObjectId) {
    this.link = link;
    this._id = id;
    this.shortted = shortted;
  }

}
