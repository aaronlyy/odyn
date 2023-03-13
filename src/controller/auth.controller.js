import { response } from "../util/response.js"

export const controllerAuthLogin = (req, res) => {

    // get user if exists check password

    // remove hash from user object

    // create jwt
    const jwt = '123'

    // set cookie
    res.cookie('accessToken', jwt, {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    });

    return res.status(201).json(response(true))
}

export const controllerAuthLogout = (req, res) => {
    res.clearCookie('accessToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    });

    return res.status(200).json(response(true, 'Authenticated'))
}