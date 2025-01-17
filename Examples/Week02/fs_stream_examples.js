const fs = require("fs");

const readStream = fs.createReadStream("input_stream.txt");

const writeStream = fs.createWriteStream("output_stream.txt");

readStream.on("data", (chunk) => {
  console.log(chunk);
});

readStream.on("end", () => {
  console.log("Stream ended.");
});

readStream.on("error", (err) => {
  console.log(`Error occured: ${err}`);
});

readStream.on("close", () => {
  console.log("Stream closed.");
});
