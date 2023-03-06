import express from 'express';

// security & logging
import cors from 'cors'; // allow cross origin requests
import helmet from 'helmet'; // secure http headers
import cookieParser from 'cookie-parser'; // get jwt from httpOnly cookies
import morgan from 'morgan'; // logging
import { methods } from './middleware/methods.js'; // setting allowed methods

// create the app
const app = express();

// express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser('supersecrettoken'));

// own middlware
app.use(methods());

// 3rd party middleware
app.use(morgan('combined'));
app.use(helmet());
app.use(cors());

// disable stuff
app.disable('x-powered-by');

// start app
app.listen(4000, () => {
    console.log(`App listening on port ${4000}`);
})


// database connection