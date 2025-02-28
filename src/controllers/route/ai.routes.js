import { Router } from "express"

const router  = Router()

import { getResponse } from "../controller/ai.controllers"

router.post("/get-review", getResponse)

export default router