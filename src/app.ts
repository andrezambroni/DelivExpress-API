import express from "express"
import "express-async-errors"

import { errorHandling } from "./middlewares/error-handling"
import { routes } from "./routes"

const app = express()

app.use(routes)
app.use(express.json())

app.use(errorHandling)

export { app }
