const fs = require ("fs")

// Note: This file shows the function of the renameSyns() and rename() functions
// These 2 functions serve the same purpose.
// They rename files

fs.renameSync("../text/caymon.json", "../text/caymon2.json")

// Asynchronously rename file at oldPath to the pathname provided as newPath. In the case that newPath already exists, it will be overwritten.
// Method: fs.rename(oldPath, newPath, callback)
// oldPath — Filepath of renaming the file
// newPath — New filename
// callback — The callback function takes the err parameter
;(async () => {
  await fs.rename("../text/caymon2.json", "../text/caymon.json", (err)=> {
    if (err) {
      throw err
    }
    console.log("File renamed using fs.rename()")
  })
})()