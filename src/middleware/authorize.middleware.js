import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import { response } from "../util/response.js";

const authorize = (roles) => {
    return async (req, res, next) => {

        // check for httpOnly cookies
        const accessToken = req.cookies.accessToken;
        if (!accessToken) {
            return res.status(401).json(response(false, 'Missing token in cookies'));
        }

        // verify jwt and get uid from it
        let uid;
        jwt.verify(accessToken, process.env.ACCESS_SECRET, (err, payload) => {
            if (err) {
                return res.status(400).json(response(false, 'Invalid token'));
            }
            uid = payload.uid;
        })

        // check if user exists
        if (!await User.exists({uid})) {
            return res.status(404).json(response(false, `User with uid = ${uid} could not be found`));
        }

        // get user by jwt uid
        const user = await User.findOne({uid});

        // check role
        if (!roles.includes(user.role)) {
            return res.status(401).json(response(false, 'Unauthorized'));
        }

        // save user req object

        req.user = {
            uid: user.uid,
            username: user.username,
            role: user.role
        }

        next();
    }
}

export default authorize;