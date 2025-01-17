// const fs = require("fs").promises --> This will make all of them use promises.
const fs = require("fs");

async function addHeader(fileName) {
  try {
    await fs.promises.appendFile(fileName, `StudentID,firstName,lastName`);

    console.log("Student header added.");
  } catch (err) {
    console.log("Error while appending student header.");
  }
}

// Append will create the file if it doesn't exist, or it will simply append new data.
async function appendData(fileName, sid, fName, lName) {
  try {
    await fs.promises.appendFile(fileName, `\r\n${sid},${fName},${lName}`);

    console.log("Student record added.");
  } catch (err) {
    console.log("Error while appending student data.");
  }
}

const file = "student.csv";
addHeader(file);
appendData(file, 1, "Amanda", "Gurney");
