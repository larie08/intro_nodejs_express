const express = require('express');
const app = express();
const port = 3000;
const items = ['Apple', 'Banana', 'Orange'];

app.use(express.static('public'));
app.use(express.json()); //Middleware

app.use((req, res, next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});

app.post('/submit', (req, res)=>{
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

app.get('/', (req, res)=>{
    res.send('Hello, World!');
});

app.get('/about', (req, res)=>{
    res.send('About Us');
});

app.get('/items', (req, res)=>{
    res.json(items);
});

app.post('/items', (req, res)=>{
    const newItem = req.body.item;
    items.push(newItem);
    res.json(items);
});

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});

