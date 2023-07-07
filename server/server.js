const express = require('express')
const axios = require('axios')
const app = express()

require('dotenv').config()
const {OPENAI_KEY}  = process.env

app.get("/recommendations", (req, res) => {
    let topic = req.body.topic
    let description = req.body.description

    let prompt = `I am giving you a topic and description. Give me 5 books of that topic matching as close as possible to the description. OUTPUT MUST BE IN FOLLOWING FORMAT ONLY:"isbnbook1 isbnbook2 isbnbook3 isbnbook4 isbnbook5"
    Topic: ${topic} Description: ${description}`

    let booksStr = axios.post(
        'https://api.openai.com/v1/completions',
        {
          prompt: prompt,
          model: 'text-davinci-003',
          max_tokens: 256,
          temperature: 1,
          n: 1,
          stop: null
        }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${OPENAI_KEY}`
            }
          }
        ).then((r) => {
            return r.data.choices[0].text
        }).catch((e) => {console.log(e)})
    
    let booksArr = booksStr.split("")

    res.json(booksArr)
})

function testing() {
    let topic = "finance"
    let description = "im a broke college student and wanna get rich"

    let prompt = `I am giving you a topic and description. Give me 5 books of that topic matching as close as possible to the description. OUTPUT MUST BE IN FOLLOWING FORMAT ONLY:"isbnbook1 isbnbook2 isbnbook3 isbnbook4 isbnbook5"
    Topic: ${topic} Description: ${description}`

    let booksStr = axios.post(
        'https://api.openai.com/v1/completions',
        {
          prompt: prompt,
          model: 'text-davinci-003',
          max_tokens: 256,
          temperature: 1,
          n: 1,
          stop: null
        }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${OPENAI_KEY}`
            }
          }
        ).then((r) => {
            return r.data.choices[0].text
        }).catch((e) => {console.log(e)})
    
    let booksArr = booksStr.split("")

    console.log(booksArr)
}

app.listen(8080, ()=>{testing})