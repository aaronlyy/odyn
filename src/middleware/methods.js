import { response } from "../util/response.js";

export const methods = (methods = ['GET', 'POST']) => {
    return (req, res, next) => {
        if (!methods.includes(req.method)) {
            return res.status(405).json(response(false));
        }
        next();
    }
}