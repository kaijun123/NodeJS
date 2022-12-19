const fs = require("fs")

// Note: This file shows the function of the open() and openSync() functions
// These 2 functions serve the same purpose.
// They open the file specified

// Asynchronous file open.
// Method: fs.open(path[, flags[, mode]], callback)
// path — Filepath
// flags — File system flags
// mode — Sets the file mod default readable and writable
// callback — The callback function takes two parameters — err and fd
;(async () => { // Note the Automatic semicolon insertion (ASI) for self-executed anonymous functions
  await fs.open("../text/caymon.json", (err, fd) => {
    if (err) {
      throw err
    }
  })
})()