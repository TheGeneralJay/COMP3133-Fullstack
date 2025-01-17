const fs = require("fs");

fs.stat("input.txt", (err, stat) => {
  if (err) {
    console.log(err);
    return;
  }

  // console.log(stat);
  console.log(stat.isDirectory());
  console.log(stat.isFile());
});

// USEFUL FOR LAB.
fs.exists("output.txt", (flag) => {
  // If flag is true, file exists. So we can delete it.
  if (flag) {
    // Deletes the file.
    fs.unlinkSync("output.txt");
    console.log("File deleted successfully.");
  } else {
    console.log("No file to delete.");
  }
});
