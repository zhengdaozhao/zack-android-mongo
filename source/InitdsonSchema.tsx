import Realm, { BSON } from 'realm';

export class Initdson extends Realm.Object<Initdson> {
  _id!: BSON.ObjectId;
  username!: string;
  chname!: string;
  allsub!: { key: string, label: string }[];
  beginday!: Date;
  modday!: Date;

  static schema: Realm.ObjectSchema = {
    name: 'Initdson',
    primaryKey: '_id',
    properties: {
      _id: { type: 'objectId', default: () => new BSON.ObjectId() },
      username: 'string',
      chname: 'string',
      allsub: 'object[]',
      beginday: 'date',
      modday: 'date',
    },
  };
}
