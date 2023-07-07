const express = require("express");
const axios = require("axios");
const cors = require("cors")
const app = express();
require("dotenv").config();
const { OPENAI_KEY } = process.env;

app.use(cors({origin: "http://localhost:3000"}));

app.get("/title/:topic/:description", (req, res) => {
  let topic = req.params.topic;
  let description = req.params.description;
  let prompt = `I am giving you a category and description. Give me a book of that category matching as close as possible to the description. OUTPUT MUST BE IN FOLLOWING FORMAT ONLY:"title/author/description"
    Topic: ${topic} Description: ${description}`;
  axios
    .post(
      "https://api.openai.com/v1/completions",
      {
        prompt: prompt,
        model: "text-davinci-003",
        max_tokens: 256,
        temperature: 1,
        n: 1,
        stop: null,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_KEY}`,
        },
      }
    )
    .then((r) => {
      let books = r.data.choices[0].text;
      let bookTitle = "";
      for (let i = 0; i < books.length; i++) {
        if (books[i] !== "\n") {
          bookTitle += books[i];
        }
      }
      let bookArr = bookTitle.split("/");
      let returnItem = {title: bookArr[0], author: bookArr[1], description: bookArr[2]}
      res.json(returnItem);
    })
    .catch((e) => {
      console.log(e);
    });
});
app.listen(8080, () => {
  console.log("listening at port 8080");
});