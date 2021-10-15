const { writeFile } = require('fs');
const axios = require('axios');
const { argv, exit } = require("process")
const lineReader = require('line-reader');

// url: http://foozlemcblargh.com does not return anything

let file = argv[2]


if (file) {
    try {
        lineReader.eachLine(file, async (line) => {
            let url = line.trim()
            
            try {
                // async function to get html from url
                const content = await axios.get(url)
                // remove http or https from url
                url = url.split("/")[2]
                
                // write content to file with name url
                writeFile(`${url}`, content.data, 'utf8', (err) => {
                    if (err) {
                        console.log(`Error writing to file: ${url}`, err)
                        exit(1)
                    }
                    console.log("Success writing to file:", url)
                })
            } catch (err) {console.log(`Error fetching ${url}`)}  
        })
    } catch (err) {
        console.log("Can't read file:", file)
        exit(1)
    }
} else {
    console.log("Did you forget to type a file path?")
}
