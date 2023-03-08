import { response } from "../util/response.js";

const authorize = (role) => {
    return (req, res, next) => {
        // check for httpOnly cookies
        const accessToken = req.cookies.accessToken;

        if (!accessToken) {
            return res.status(401).json(response(false));
        }

        // get user

        // check role

        next();
    }
}

export default authorize;