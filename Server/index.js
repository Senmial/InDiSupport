// this  process - (index.js, db.js and .env) connects our app to the backend server.

import express from 'express'; // Express runs in node to create more routes within.
import connectdb from './utils/db.js'; // needs mongoose
import dotenv from "dotenv" // npm i dontenv
import userRoutes from "./routes/userRoutes.js"
import { registerUser } from './controllers/userController.js';

dotenv.config()

const port = process.env.PORT
const app = express()

connectdb()  // creating API - a path and a function
    app.get('/', registerUser)
    console.log("User registered successfully");
app.use(express.json())

app.use("/api/users", userRoutes) //

// app.post('/signup', (req,res) => {  // each api should have a request and response parameters.
//    const {fullname, email, password} = req.body
// })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})