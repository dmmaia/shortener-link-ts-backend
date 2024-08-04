import express from 'express';
import { router } from './router';
import dotenv from 'dotenv'

export class App {
  public server: express.Application

  constructor() {
    this.server = express()
    this.middleware()
    this.router()
  }

  private middleware() {
    this.server.use(express.json())
    dotenv.config()
  }

  private router() {
    this.server.use(router)
  }

}
