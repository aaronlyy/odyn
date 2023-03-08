import express from 'express';

// security & logging imports
import cors from 'cors'; // allow cross origin requests
import helmet from 'helmet'; // secure http headers
import cookieParser from 'cookie-parser'; // get jwt from httpOnly cookies
import morgan from 'morgan'; // logging
import methods from './middleware/methods.middleware.js'; // setting allowed methods

// router imports
import routerAuth from './router/auth.router.js';
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
app.use(cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true
}));

// own middlware
app.use(methods(['GET', 'POST', 'PATCH', 'DELETE']));

// routes
app.use('/auth', routerAuth);
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