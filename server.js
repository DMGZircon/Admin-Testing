const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// Fetch algorithms data
app.get('/api/admin/algorithms', (req, res) => {
    const query = 'SELECT * FROM algorithms';
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Fetch post history
app.get('/api/admin/history', (req, res) => {
    const query = 'SELECT * FROM post_history';
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Fetch top 10 posts
app.get('/api/admin/top-posts', (req, res) => {
    const query = 'SELECT * FROM top_posts ORDER BY score DESC LIMIT 10';
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Fetch weekly post data
app.get('/api/admin/weekly-posts', (req, res) => {
    const query = 'SELECT week_start, post_count FROM weekly_posts';
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        const data = {
            labels: results.map(row => row.week_start),
            data: results.map(row => row.post_count)
        };
        res.json(data);
    });
});

// Admin login route
app.post('/api/admin/login', async (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM admins WHERE username = ?';

    db.query(query, [username], async (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(401).send('User not found');

        const admin = results[0];
        const isMatch = await bcrypt.compare(password, admin.password_hash);

        if (!isMatch) return res.status(401).send('Incorrect password');
        res.status(200).send('Login successful');
    });
});
