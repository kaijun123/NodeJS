const fs = require ("fs");

// Note: This file shows the function of the unlink() and unlinkSync() functions
// These 2 functions serve the same purpose.
// They delete files

fs.unlinkSync("../text/writeFile.txt")

// Asynchronously removes a file or symbolic link.
// Method: fs.unlink(path, callback)
// path — Filepath
// callback — The callback function takes the err parameter

;(async()=> {
  await fs.unlink("../text/writeFileSync.txt", (err)=> {
    if (err) {
      throw err
    }
    console.log("File deleted using fs.unlink()")
  }) 

})()