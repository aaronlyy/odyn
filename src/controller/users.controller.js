import bcrypt from 'bcrypt';

import { response } from "../util/response.js";
import User from "../models/user.model.js";

export const controllerUsersGetMe = (req, res) => {
    return res.status(200).json(response(true, 'User read', req.user));
}

export const controllerUsersGetAll = async (req, res) => {
    // get users
    const users = await User.find();

    if (users.length === 0) {
        return res.status(404).json(response(false, 'No users found'));
    }
    
    // remove hashes
    const usersNoHash = []
    users.map((user) => {
        usersNoHash.push({
            username: user.username,
            role: user.role
        })
    })

    return res.status(200).json(response(true, 'Users read', usersNoHash));
}

export const controllerUsersGetOne = async (req, res) => {
    // get uid
    const uid = req.params.uid;

    // check if uid exists
    if (!await User.exists({uid})) {
        return res.status(404).json(response(false, `User with uid = ${uid} could not be found`));
    }

    // get user
    const user = await User.findOne({uid});

    return res.status(200).json(response(true, 'User read', {
        username: user.username,
        role: user.role
    }));
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

    // get latest uid
    const latestUsers = await User.find().sort({_id: -1}).limit(1);
    const uid = latestUsers.length > 0 ? latestUsers[0].uid + 1 : 0;

    // hash pw
    const hash = await bcrypt.hash(password, 10);

    // // save user
    const user = new User({
        uid,
        username,
        role: 'user',
        hash
    })
    await user.save();

    return res.status(200).json(response(true, 'User created'));
}

export const controllerUsersPatchOne = async (req, res) => {
    // get uid from url
    const uid = req.params.uid;

    // check body
    const username = req.body.username;
    const password = req.body.password;

    if (!username && !password) {
        return res.status(422).json(response(false, 'Missing username or password'));
    }

    // check if uid exists
    if (!await User.exists({uid})) {
        return res.status(404).json(response(false, `User with uid = ${uid} could not be found`));
    }

    // run update
    if (username && password) {
        // check if new username already exists
        if (await User.exists({username})) {
            return res.status(406).json(response(false, 'Username already exists'));
        }
        // hash new password
        const hash = await bcrypt.hash(password, 10);
        // update user
        await User.updateOne({uid}, {
            username,
            hash
        })
        return res.status(200).json(response(true, 'Updated username and password'))
    }

    if (password) {
        // hash new password
        const hash = await bcrypt.hash(password, 10);
        // update user
        await User.updateOne({uid}, {
            hash
        })
        return res.status(200).json(response(true, 'Password updated'));
    }

    if (username) {
        // check if new username already exists
        if (await User.exists({username})) {
            return res.status(406).json(response(false, 'Username already exists'));
        }
        await User.updateOne({uid}, {
            username
        })
        return res.status(200).json(response(true, 'Username updated'));
    }

    return res.status(200).send();
}

export const controllerUsersDeleteOne = async (req, res) => {
    // check if uid exists
    if (!await User.exists({uid})) {
        return res.status(404).json(response(false, `User with uid = ${uid} could not be found`));
    }

    // delete user
    await User.deleteOne({uid});

    return res.status(200).json(response(true, 'User deleted'));
}