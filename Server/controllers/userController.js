import User from "../models/userModel.js";

const registerUser = async (req, res) => {
    console.log(req.body)
  const {firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    res.status(400).json({ message: "Please fill in all fields" });
  }
  const user = await User.findOne({ email });
  // console.log(user);
  if (user) {
    res.status(400).json({ message: "User already exists" });
  }
  const newUser = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });
  
  await newUser.save();
  res.status(200).send({ message: "User created successfully" });
};


export {registerUser};