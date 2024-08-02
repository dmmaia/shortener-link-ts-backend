import { Router } from "express"
import LinkController from "./Link/link.controller"

const router: Router = Router()

router.get("/:key", LinkController.findAndGotToLink)

export { router }
