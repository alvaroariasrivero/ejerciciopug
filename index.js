const express = require('express');
const app = express()
const port = 3000

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/',(req, res) => {
    res.render('home')
})

app.get('/location',(req, res) => {
    res.render('donde')
})

app.get('/about', (req, res) => {
    res.render('quien')
})

app.get('/contact', (req, res) => {
    res.render('contacto')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })