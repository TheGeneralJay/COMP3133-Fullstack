const fs = require("fs");

// Write ASYNC callback.
let dataToWrite = Buffer.from("Welcome to GBC, Toronto.");

// If file does not exist, it will create it. If file exists, it will overwrite whatever is in it.
fs.writeFile("output.txt", dataToWrite, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Write Async success.");
});

// Write SYNC.
fs.writeFileSync("output.txt", dataToWrite);

// Write Promise.
fs.promises.writeFile("output.txt", dataToWrite).then(() => {
  console.log("Async Write Promise Success.");
});
