require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('twitter')
  })
app.get('/login',(req,res)=>{
    res.send('<h1>hi hru</h1>')
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
