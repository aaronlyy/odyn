import { response } from "../util/response.js";

const authorize = (roles) => {
    return (req, res, next) => {

        // check for httpOnly cookies
        const accessToken = req.cookies.accessToken;
        if (!accessToken) {
            console.log('No accessToken in cookies');
            return res.status(401).json(response(false));
        }

        // get user
        const user = {
            name: "aaron",
            role: "admin"
        }

        // check role
        if (!roles.includes(user.role)) {
            return res.status(401).json(response(false));
        }

        // set user in req object
        req.user = user;

        next();
    }
}

export default authorize;