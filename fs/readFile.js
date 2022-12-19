const fs = require("fs")

// Note: This file shows the function of the readFileSync() and readFile() functions
// These 2 functions serve the same purpose.
// It will read the data in the files


// Note: By default readFileSync returns the data as a Buffer
const buffer = fs.readFileSync("../text/caymon.json");
console.log(buffer);

// The data returned can be converted to utf-8 by including a second param
const getData = () => {
  const data = fs.readFileSync("../text/caymon.json", "utf8")
  if (!data) {
    return data
  }
  else {
    const parsedData = JSON.parse(data)
    return parsedData
  }
}
console.log("This is data using readFileSync\n", getData())

// Method : fs.readFile(path[, options], callback)
// path — Filepath
// options — Take extra options like encoding. This parameter is optional
// callback — The callback function takes two parameters — err and data
;(async () => {
  await fs.readFile("../text/caymon.json", "utf8", (err, data) => {
    if (err) {
      throw err
    }
    console.log("This is data using readFile\n", JSON.parse(data))
  })
})()