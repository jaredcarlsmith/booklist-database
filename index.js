import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config()
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
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let booklist = [];

app.get("/", async (req, res) => {
    try {
        const result = await (await db.query('SELECT * FROM books'));
        booklist = result.rows; 
        res.render('index.ejs', { books: booklist });
    }
    catch (error) {
        console.log(error);
    }
});

app.post("/add", async (req, res) => {
    const { title, author, recommendation, image, review } = req.body;
    try {
        const query = await (await db.query('INSERT INTO books (title, author, recommendation, image, review) VALUES ($1, $2, $3, $4, $5)', [title, author, recommendation, image, review]));
        booklist.push(query.rows[0]);
        res.redirect('/');
    }
    catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});