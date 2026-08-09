import bcrypt from 'bcrypt';
import { Users } from '../models/user-model.js';
import Jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
const createToken = (_id, fullName, role) => {
    const token = Jwt.sign({ _id, fullName, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};
export const signup = async (req, res) => {
    try {
        const { fullName, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = {
            fullName: fullName,
            email: email,
            password: hashedPassword,
            role: role
        };
        const newUser = await Users.create(user);
        res.status(201).send({
            msg: "UserCreated",
            data: newUser
        });
    }
    catch (err) {
        console.error(err);
    }
};
export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const requiredUser = await Users.findOne({ email: email });
        if (!requiredUser) {
            res.status(404).send("User not found");
            return;
        }
        const checkPassword = await bcrypt.compare(password, requiredUser.password);
        if (!checkPassword) {
            res.status(401).send("Password is not correct");
            return;
        }
        const { _id, fullName, role } = requiredUser;
        const token = createToken(_id, fullName, role);
        res.cookie('token', token, {
            httpOnly: true
        });
        res.status(200).send({
            msg: "user logged in successfully",
            data: requiredUser,
            tok: token
        });
    }
    catch (err) {
        console.error(err);
    }
};
export const signout = async (req, res) => {
    try {
        const token = req.cookies.token;
        const requiredToken = await Jwt.verify(token, process.env.JWT_SECRET);
        if (!requiredToken) {
            res.status(404).send("user not found");
        }
        else {
            res.status(200).clearCookie('token').send("User signed out");
        }
    }
    catch (err) {
        console.error(err);
    }
};
//# sourceMappingURL=authentication-controllers.js.map