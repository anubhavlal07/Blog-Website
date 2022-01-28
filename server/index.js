import express from "express";
import cors from 'cors';
import bodyparser from 'body-parser';

import connection from "./database/db.js";
import router from "./routes/route.js";

const app = express();

app.use(cors());
app.use(bodyparser.json({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));

app.use('/', router);
const port = 8000;
app.listen(port,()=> console.log(`Server is running at Port ${port}`));

connection();