const express = require('express')
const addDays = require('date-fns/addDays')
const app = express()

app.get('/', (request, response) => {
  let date = new Date()
  let result = addDays(date.getFullYear(), date.getMonth(), date.getDay(), 100)

  response.send(
    `${result.getDay()}/${result.getMonth()+1}/${result.getFullYear()}`,
  )
})

app.listen(3000)


