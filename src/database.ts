import { Db, MongoClient } from 'mongodb'

let db: Db;

export default async (): Promise<Db> => {
  if (db)
    return db

  const client = new MongoClient(`${process.env.MONGO_DB}`)
  await client.connect()
  db = client.db(process.env.DB_NAME)
  return db
}
