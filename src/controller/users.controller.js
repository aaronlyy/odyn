import { response } from "../util/response.js";

export const controllerUsersGetMe = (req, res) => {
    return res.status(200).json(response(true, req.user));
}

export const controllerUsersGetAll = (req, res) => {
    return res.status(200).send();
}

export const controllerUsersGetOne = (req, res) => {
    return res.status(200).send();
}

export const controllerUsersPostOne = (req, res) => {
    return res.status(200).send();
}

export const controllerUsersPatchOne = (req, res) => {
    return res.status(200).send();
}

export const controllerUsersDeleteOne = (req, res) => {
    return res.status(200).send();
}