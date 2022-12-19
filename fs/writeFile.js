const fs = require("fs")

// Note: This file shows the function of the writeFileSync() and writeFile() functions
// These 2 functions serve the same purpose.
// If the file exists, it will wipe all the data and rewrite the content.
// If the file does not exist, it will create the file and write the data


// writeFileSync(): Synchronous function
const data = "This file is written using a synchronous function called writeFileSync(). Hence, there is no need to await"
fs.writeFileSync("../text/writeFileSync.txt", data)


// writeFile(): Asynchronous Function
// fs.writeFile(file, data[, options], callback)
// file — File location
// data — can be a string or a buffer.
// options — Take extra options like encoding, mode, and flag. This parameter is optional
// callback — The callback function takes one parameter — err
const data2 = "This file is written using an asynchronous function called writeFile(). Hence, need to await"

// Anonymous function that is auto-executed
;(async () => {
  await fs.writeFile("../text/writeFile.txt", data2, (err) => {
    if (err) {
      throw err
    }
    console.log("fs.writeFile() is successful")
  })
})()