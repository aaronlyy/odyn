import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import { response } from "../util/response.js";

export const controllerAuthLogin = async (req, res) => {

    // get username & password
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(422).json(response(false, 'Missing username or password'));
    }

    // check if user exists
    if (!await User.exists({username})) {
        return res.status(404).json(response(false, `User with username ${username} could not be found`));
    }

    // get user
    const user = await User.findOne({username});

    // compare hashes
    if (!await bcrypt.compare(password, user.hash)) {
        return res.status(401).json(response(false, 'Wrong password'));
    }

    // create jwt
    const token = jwt.sign({uid: user.uid}, process.env.ACCESS_SECRET, {expiresIn: process.env.ACCESS_EXPIRES});

    // set cookie
    res.cookie('accessToken', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    });

    return res.status(201).json(response(true, 'Authenticated'));
}

export const controllerAuthLogout = (req, res) => {
    res.clearCookie('accessToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    });

    return res.status(200).json(response(true, 'Cookies cleared'))
}