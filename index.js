import express from "express";
import bodyParser from "body-parser";

import userRouters from './routes/users.js';

let app = express();
const PORT = 5000

app.set('port', process.env.PORT || PORT);
app.use(bodyParser.json());
app.use('/users', userRouters)

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
});

app.listen(app.get('port'), () => { console.log('Listening on port ', app.get('port')) });