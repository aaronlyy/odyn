import express from "express";
import authorize from "../middleware/authorize.middleware.js";
import {
    controllerUsersGetMe,
    controllerUsersGetAll,
    controllerUsersGetOne,
    controllerUsersDeleteOne,
    controllerUsersPostOne,
    controllerUsersPatchOne
} from "../controller/users.controller.js";

const routerUsers = express.Router();

routerUsers.get('/me', authorize(['user', 'admin']), controllerUsersGetMe) // get own user info
routerUsers.get('/', authorize('admin'), controllerUsersGetAll) // get all users
routerUsers.get('/:uid', authorize('admin'), controllerUsersGetOne) // get a specific user
routerUsers.post('/', authorize('admin'), controllerUsersPostOne) // create a new user
routerUsers.patch('/users/:uid', authorize('admin'), controllerUsersPatchOne) // modify a user
routerUsers.delete('/users/:uid'), authorize('admin'), controllerUsersDeleteOne // delete a user

export default routerUsers;