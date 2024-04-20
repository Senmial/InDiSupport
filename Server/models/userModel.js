// this defines the structure of what collection(fields, data types). It guides what information should be collected - schema.

import mongoose from 'mongoose';
import bcrypt from 'bcrypt'; //used for password encryption - password hashing

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}
)

userSchema.methods.matchPassword = async function (enteredPassowrd){
    return await bcrypt.compare(enteredPassowrd, this.password);
}

userSchema.pre("save", async function(){
    const salt = await bcrypt.genSalt(10); // re-encrypts the password 10 times for security.
    this.password = await bcrypt.hash(this.password, salt);
})


const User = mongoose.model('User', userSchema);

export default User; 