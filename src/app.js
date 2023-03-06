import express from 'express';

// helmet & cors for securing the application
import cors from 'cors';
import helmet from 'helmet';

// morgan for logging
import morgan from 'morgan';

// create the app
const app = express();

// 3rd party middleware
app.use(morgan('combined'));
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send();
})

// start app
app.listen(4000, () => {
    console.log(`App listening on port ${4000}`);
})


// database connection