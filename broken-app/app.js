const express = require('express');
let axios = require('axios');
const ExpressError = require('./error');
const app = express();

app.use(express.json())

app.post('/', async function(req, res, next) {
  try {
    const users = req.body.developers
    const user_data = await Promise.all(users.map(async d => {
      const res = await axios.get(`https://api.github.com/users/${d}`)
      return res.data
      
    }))
    if (!user_data) {
      throw new ExpressError("Could not resolve request", 400)
    }
    const result = user_data.map(user => {
      return {  bio : user.bio, name: user.name }
    })
 
    res.status(201).json(result)
  } catch (err) {
    
    next(err);
  }
});

app.use((error, req, res, next) => {
    let status = error.status || 500
    let message = error.message

    res.status(status).send(message)
})


app.listen(3000);
