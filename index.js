const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express() //initialising express

const url = 'https://store.epicgames.com/en-US/' //Change url of website here

axios(url) //works by passing througha url
    .then(response => { //get the response of anything that comes back from the url
        const html = response.data //saves the response data as html
        console.log(html)
        const $ = cheerio.load(html) //this line allows us to look through all the html when we use the dollar sign
        const data = [] //creating array to capture specific data into
        
        $('.css-8uhtka', html).each(function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            data.push({
                title,
                url
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log('server running on PORT 8000'))