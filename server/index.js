const express = require('express')
const massive = require('massive')
const session = require('express-session')
require('dotenv').config()
const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env
const app = express()
const cc = require('./controller')

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    console.log('We Chillin')
})


app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30
    }
}))

app.get('/api/houses', cc.getAll)
app.post('/api/houses', cc.create)
app.delete('/api/houses/:id', cc.delete)



app.listen(SERVER_PORT, () => {
    console.log('bruhh', SERVER_PORT)
})