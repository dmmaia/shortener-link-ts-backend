import { Request, Response } from 'express'
import Link from './link.model'
import connect from '../database.ts'
import short from 'short-uuid'

const collection = "links"

class LinkController {
  public async findAndGotToLink(req: Request, res: Response) {
    const { key } = req.params
    const db = await connect()

    const link = await db.collection(collection).findOne({ shortted: key })

    res.json(link)

  }

  public async create(req: Request, res: Response) {
    const body = req.body
    const db = await connect()

    const link = await db.collection(collection).insertOne({
      link: body.link,
      shortted: short.generate()
    })

    res.json(link)
  }
}

export default new LinkController()
