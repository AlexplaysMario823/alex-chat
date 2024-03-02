const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello world. This is my first express endpoint.')
})

app.get('/alex', (req, res) => {
    res.send('Alex Mizzi was here.')
})

app.get('/messages', (req, res) => {
    res.json({
        messages: [
            {
                from: 'Alex',
                to: 'Saief',
                content: 'Message one',
            },
            {
                from: 'Saief',
                to: 'Alex',
                content: 'Hi Alex!',
            },
            {
                from: 'Alex',
                to: 'Saief',
                content: 'How are you?',
            }
        ]
    })
})

app.listen(3000, () => {
    console.log('Started server at localhost:3000')
})