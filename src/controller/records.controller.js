import { response } from "../util/response.js"

export const controllerRecordsGetAll = (req, res) => {
    return res.status(200).json(response(true, 'Records read'));
}

export const controllerRecordsGetOne = (req, res) => {
    return res.status(200).json(response(true, 'Record read'));
}

export const controllerRecordsPatchOne = (req, res) => {
    return res.status(200).json(response(true, 'Record patched'));
}

export const controllerRecordsDeleteAll = (req, res) => {
    return res.status(200).json(response(true, 'Records deleted'));
}

export const controllerRecordsDeleteOne = (req, res) => {
    return res.status(200).json(response(true, 'Record deleted'));
}

export const controllerUsersPostOne = (req, res) => {
    return res.status(201).json(response(true, 'Record created'));
}