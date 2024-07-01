import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config()
const app = express();
const port = 4000;

// Set the directory for static files
app.use(express.static(path.join(path.resolve(), 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');


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
app.use(express.static(path.join(path.resolve(), 'public')));
app.set('view engine', 'ejs');

let booklist = [];

app.get("/", async (req, res) => {
    try {
        const result = await (await db.query('SELECT * FROM books'));
        booklist = result.rows; 
        res.render('index', { books: booklist });
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

app.post("/edit", async (req, res) => {
    const { id, title, author, recommendation, image, review } = req.body;
    try {
        const query = await (await db.query('UPDATE books SET title = $1, author = $2, recommendation = $3, image = $4, review = $5 WHERE id = $6', [title, author, recommendation, image, review, id]));
        booklist.splice(query.rows[0].id - 1, 1, query.rows[0]);
        res.redirect('/');
    }
    catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});