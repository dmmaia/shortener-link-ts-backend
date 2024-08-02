import { Request, Response } from 'express'

class LinkController {
  public findAndGotToLink(req: Request, res: Response) {
    const { key } = req.params
    console.log(key)
  }
}

export default new LinkController()
