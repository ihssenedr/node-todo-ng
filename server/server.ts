import express, { Application } from "express"
import cors from "cors"

const app: Application = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
const TodoRouter = require("./routes/todo.route")

app.use("", TodoRouter)

app.listen(PORT ,() =>{
  console.log(`App running on port ${PORT}`)
})
