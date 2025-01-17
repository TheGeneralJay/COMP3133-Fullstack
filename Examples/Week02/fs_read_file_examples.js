const fs = require("fs");

// Read the file ASYNCHRONOUSLY.
// readFile(path, encoding, flags, callbacks(err, data)).

console.log("START");
// The "utf-8" made it human readable.
// If it were called like this:
// fs.readFile("input.txt", (err, data) => {}) it would have printed a buffer.
fs.readFile("input.txt", "utf-8", (err, data) => {
  // The file MUST exist or else it will error out. When called successfully, data is handled.
  // If there is an error, err will be used.

  // Good practice to print error first if it exists.
  if (err) {
    console.log(err);
    return;
  }

  // Print the data.
  console.log(`1. ASYNC DATA: ${data}`); // Would need to be data.toString() if 'utf-8' not specified.
});

// Sync.
const dataSync = fs.readFileSync("input.txt");
console.log(`2. SYNC DATA: ${dataSync.toString()}`);

// Async with promise.
fs.promises
  .readFile("input.txt")
  .then((data) => {
    console.log(`3. PROMISE DATA: ${data.toString()}`);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("END");
