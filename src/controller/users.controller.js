import bcrypt from 'bcrypt';

import { response } from "../util/response.js";
import User from "../models/user.model.js";

export const controllerUsersGetMe = (req, res) => {
    return res.status(200).json(response(true, req.user));
}

export const controllerUsersGetAll = (req, res) => {
    return res.status(200).send();
}

export const controllerUsersGetOne = (req, res) => {
    return res.status(200).send();
}

export const controllerUsersPostOne = async (req, res) => {
    // get username & password from body
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(422).json(response(false, 'Missing username or password in request body'));
    }

    // check if username already exists
    if (await User.exists({username})) {
        return res.status(400).json(response(false, 'Username already exists'));
    }

    // hash pw
    const hash = await bcrypt.hash(password, 10);

    // safe user
    const user = new User({
        uid: 0,
        username,
        role: 'user',
        hash
    })
    await user.save();

    return res.status(200).json(response(true, 'User created'));
}

export const controllerUsersPatchOne = (req, res) => {
    return res.status(200).send();
}

export const controllerUsersDeleteOne = (req, res) => {
    return res.status(200).send();
}