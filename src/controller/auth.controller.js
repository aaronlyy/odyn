import { response } from "../util/response.js"

export const controllerAuthLogin = (req, res) => {
    res.cookie('accessToken', '123', {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    });
    return res.status(201).json(response(true))
}