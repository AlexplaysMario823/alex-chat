const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world. This is my first express endpoint.')
})

app.get('/alex', (req, res) => {
    res.send('Alex Mizzi was here.')
})

const messages = [];

function addMessage(from, to, content) {
    messages.push({
        from: from,
        to: to,
        content: content
    })
}

addMessage('Alex', 'Saief', 'Hello Saief')

console.log(messages);

app.get('/messages', (req, res) => {
    res.json({
        messages: messages
    })
})

app.post('/messages', (req, res) => {
    addMessage(req.body.from, req.body.to, req.body.content) 
    console.log(messages)
    res.send();
})

app.listen(3000, () => {
    console.log('Started server at localhost:3000')
})
