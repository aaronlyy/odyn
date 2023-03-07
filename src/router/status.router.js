import express from "express";
import { controllerStatusGet } from "../controller/status.controller.js";

// router for all status related endpoints, no auth
const routerStatus = express.Router();

// basic health check
routerStatus.get('/', controllerStatusGet);

export default routerStatus;