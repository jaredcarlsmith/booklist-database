import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app = express();
const port = 4000;
const db = new pg.Client(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'booklist',
        password: process.env.DB_PASSWORD,
        port: 5432
    }
);

app.get("/", (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});