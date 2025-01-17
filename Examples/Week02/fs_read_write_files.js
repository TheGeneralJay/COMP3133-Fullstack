const fs = require("fs");

// r+ is read/write. The file must exist with this mode.
fs.open("data.txt", "r+", (err, fd) => {
  if (err) {
    console.log(err);
    return;
  }

  var buffer = Buffer.alloc(10);

  fs.readSync(fd, buffer, 0, buffer.length);

  console.log(buffer.toString());
});
