import express from 'express'

import {
    controllerRecordsGetAll,
    controllerRecordsDeleteAll,
    controllerRecordsDeleteOne,
    controllerRecordsGetOne,
    controllerRecordsPatchOne
} from '../controller/records.controller.js';

const routerRecords = express.Router();

routerRecords.get('/', controllerRecordsGetAll) // get all records
routerRecords.delete('/', controllerRecordsDeleteAll) // delete all records
routerRecords.get('/:rid', controllerRecordsGetOne) // get specific record
routerRecords.patch('/:rid', controllerRecordsPatchOne) // patch specific record
routerRecords.delete('/:rid', controllerRecordsDeleteOne) // delete specific record


export default routerRecords;