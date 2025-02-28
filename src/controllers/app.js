import express, { json, urlencoded } from "express"
import aiRoutes from './route/ai.routes'
import cors from 'cors'
const app = express()

app.get("/", (req, res)=>{
    res.send("Hello World, Chando")
})

app.use(json())
app.use(urlencoded({extended: true}))
app.use(cors())

app.use('/ai', aiRoutes);

export default app