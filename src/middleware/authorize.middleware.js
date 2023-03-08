import { response } from "../util/response.js";

const authorize = (roles) => {
    return (req, res, next) => {

        // check for httpOnly cookies
        const accessToken = req.cookies.accessToken;
        if (!accessToken) {
            console.log('No accessToken in cookies');
            return res.status(401).json(response(false));
        }

        // verify jwt
        if (accessToken != '123') {
            console.log('No valid accessToken')
            return res.status(401).json(response(false));
        }

        // get user & remove hashes from object
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