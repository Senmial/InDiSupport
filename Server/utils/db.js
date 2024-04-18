// creating a database using MongoDB and Mongoose
import mongoose, { connect } from "mongoose";

const  connectdb = async () => {
try {
  await mongoose.connect(process.env.MONGO_URI) // calls for mongoose to coonect to save data in  mongodb_uri in .env file
  console.log('Connected to MongoDB');
} catch (err) {
  console.log(err);
};
};
export default connectdb;



// // const { MongoClient, ServerApiVersion } = require('mongodb');
// import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = "mongodb+srv://senmial:J1BHii8SYfIIReN4@cluster0.m7mfvdb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

//  export async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     // await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

