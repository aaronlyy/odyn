import express from 'express';

// security & logging imports
import cors from 'cors'; // allow cross origin requests
import helmet from 'helmet'; // secure http headers
import cookieParser from 'cookie-parser'; // get jwt from httpOnly cookies
import morgan from 'morgan'; // logging
import { methods } from './middleware/methods.js'; // setting allowed methods

// router imports
import routerStatus from './router/status.router.js';
import routerUsers from './router/users.router.js';

// create the app
const app = express();

// express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser('supersecrettoken'));

// 3rd party middleware
app.use(morgan('combined'));
app.use(helmet());
app.use(cors());

// own middlware
app.use(methods());

// routes
app.use('/status', routerStatus);
app.use('/users', routerUsers);
// app.use('/customers')

// disable stuff
app.disable('x-powered-by');

// start app
app.listen(4000, () => {
    console.log(`App listening on port ${4000}`);
})


// database connection