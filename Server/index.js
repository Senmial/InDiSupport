import express from 'express'; // this is module type in package.json , using common js will have const assigned
import {run} from './db.js';

const app = express()

run()
    app.get('/', (req,res) => { //get is the default method
        res.send("Hello World!")
    }
)

app.post('/signup', (req,res) => { 
   const {fullname, email, password} = req.body
})

app.listen(8093, () => {
    console.log("Server is running on port 3005")
})