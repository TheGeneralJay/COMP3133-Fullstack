const fs = require("fs");
const csv = require("csv-parser");

fs.exists("canada.txt", (flag) => {
  // If flag is true, file exists. So we can delete it.
  if (flag) {
    // Deletes the file.
    fs.unlinkSync("canada.txt");
    console.log("File deleted successfully.");
  } else {
    console.log("No file to delete.");
  }
});

fs.exists("usa.txt", (flag) => {
  // If flag is true, file exists. So we can delete it.
  if (flag) {
    // Deletes the file.
    fs.unlinkSync("usa.txt");
    console.log("File deleted successfully.");
  } else {
    console.log("No file to delete.");
  }
});

// Read from input_countries.csv.
fs.createReadStream("input_countries.csv")
  .pipe(csv())
  .on("data", (row) => {
    if (row.country == "Canada") {
      appendData("canada.txt", row.country, row.year, row.population);
    } else if (row.country == "United States") {
      appendData("usa.txt", row.country, row.year, row.population);
    }
  })
  .on("end", () => {
    console.log("Finished processing input_countries.csv.");
  });

async function appendData(fileName, country, year, pop) {
  try {
    await fs.promises.appendFile(fileName, `${country},${year},${pop}\n`);
    console.log("Country record added to file.");
  } catch (err) {
    console.log("Error occured while adding to file.");
  }
}
