import bcrypt from 'bcryptjs'; //hash password
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

                    // Sign In!
export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email }); // search for the user by email adress in db

        if (!existingUser) return res.status(404).json({ message: "User doesn't exist." });  // User doesnt exist

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password); // if password is correct!!

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invadid credentials." }); // Password Doesn't exist

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" }); // Token to logout after 1 hour

        res.status(200).json({ result: existingUser, token }); // Send user and token if everything is ok! 
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}

                        // Sign Up!
export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
                                // Check for users!!
        const existingUser = await User.findOne({ email }); // search for the user by email adress in db

        if (existingUser) return res.status(400).json({ message: "User already exists." });  // User already exists 

        if (password !== confirmPassword) return res.status(400).json({ message: "Password don't match." });  // Password don't match
                          
                            // Starting to create new user!
        const hashedPassword = await bcrypt.hash(password, 12); 
        
        const result = await User.create({ email,password: hashedPassword, name: `${firstName} ${lastName} `});

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" }); // Token to logout after 1 hour

        res.status(200).json({ result, token }); // Send user and token if everything is ok! 

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}   