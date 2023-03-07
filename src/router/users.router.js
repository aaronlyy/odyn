import express from "express";
import {
    controllerUsersGetAll,
    controllerUsersGetOne,
    controllerUsersDeleteOne,
    controllerUsersPostOne,
    controllerUsersPatchOne
} from "../controller/users.controller";

const routerUsers = express.Router();

routerUsers.get('/', controllerUsersGetAll) // get all users
routerUsers.get('/:uid', controllerUsersGetOne) // get a specific user
routerUsers.post('/', controllerUsersPostOne) // create a new user
routerUsers.patch('/users/:uid', controllerUsersPatchOne) // modify a user
routerUsers.delete('/users/:uid'), controllerUsersDeleteOne // delete a user

export default routerUsers;