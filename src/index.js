import express from 'express';
import cors from 'cors';

import routeCollection from './routes/route.js';
import connectToDatabase from './connectionDB/connectionToDB.js';
import deserializerUser from './middlewair/deserializerUser.js';


const app = express();

app.use(cors());

app.use(cors({
    origin: '*',
}));

app.use(deserializerUser);

app.use(express.json());


app.listen(2000, (req, res) => {
    connectToDatabase()
    routeCollection(app)
    console.log('server is running on port 2000');
})
