require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tweets',(req,res)=>{
    res.send('shallow it')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at onlyfans</h1>')
})

app.get('/ipl',(req,res)=>{
    res.send('<h2>ipl 2024 winner is rajsthan</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})