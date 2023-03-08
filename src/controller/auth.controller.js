import { response } from "../util/response.js"

export const controllerAuthLogin = (req, res) => {
    res.cookie('accessToken', '123', {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    });
    return res.status(200).json(response(true))
}