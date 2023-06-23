const axios = require("axios")
const dataLines = require("./dataLines")
require("dotenv").config()

const BASE_URL = process.env.BASE_URL
const TOKEN = process.env.TOKEN
const END_POINT = process.env.END_POINT

async function postData(data) {
  try {
    await axios.post(`${BASE_URL}${END_POINT}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    console.log("Data posted successfully.")
  } catch (error) {
    console.error("Error posting data:", error.message)
  }
}

dataLines.forEach((line, index) => {
  console.log(`Posting data for line ${index + 1}`)
  postData(line)
})
