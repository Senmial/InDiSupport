// seperating functions to align them with their routes - this creates functions that feed into the schema in the userModel. 
// This is the function to register a user.

import User from "../models/userModel.js";

const registerUser = async (req, res) => {
  User.create({
    firstName: "John",
    email: "john@example.com",
    lastName: "Doe",
    phoneNumber: "09075738393",
    password: "<PASSWORD>",
  })
  res.send("done succesfully") 
}
export {registerUser};



{/* 
// console.log(req.body)
// const {firstName, lastName, email, phoneNumber, password } = req.body;
// if (!firstName || !lastName || !email || !phoneNumber || !password) { */}
{/* //   res.status(400).json({ message: "Please fill in all fields" });
// }
// const user = await User.findOne({ email });
// // console.log(user);
// if (user) { */}
{/* //   res.status(400).json({ message: "User already exists" });
// }
// const newUser = new User({ */}
{/* //   firstName: firstName,
//   lastName: lastName,
//   email: email,
phoneNumber: phoneNumber,
//   password: password,
// });

// await newUser.save();
// res.status(200).send({ message: "User created successfully" }); // api keeps running so you need to send a response. Every API called is supposed to give a response

}
// }; */}