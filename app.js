const express = require('express')
const app = express()
const bookRoutes = require('./routes/book')
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/books', bookRoutes)

app.listen(port, ()=> {
    console.log(`listening on port: ${port}`)
})
