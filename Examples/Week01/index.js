console.log("Week01 - Buffer Examples");

// Creating a buffer object.

// new Buffer() is depreciated.
//let b1 = new Buffer("A Hello");

// This prints the hex translation of each ASCII values. (A = 41, space = 20).
let b1 = Buffer.from("A Hello");
console.log(b1);

// Can print the buffer in string format.
console.log(b1.toString());

// This will display the first byte, AKA it will give you the ASCII value of the first character.
console.log(b1[0]);

// Can convert to ASCII, utf8, hex, etc.
console.log(b1.toString("ASCII"));
console.log(b1.toString("utf8"));
console.log(b1.toString("hex"));
console.log(b1.toString("base64"));
console.log(b1.toString("ucs-2"));

// Prints true/false if your buffer includes the value given.
console.log(b1.includes("He")); // True.
console.log(b1.includes("z")); // False.

// Prints the amount of bytes.
console.log(b1.length);

// Alloc function.
// Defines the buffer size.
let b2 = Buffer.alloc(10);
console.log(b2); // <Buffer 00 00 00 00 00 00 00 00 00 00>

console.log(b2[10]); // Size is 0-9, so this is undefined.

// Cannot add or remove values from buffer outside of original range.
b2[10] = 66; // Does not work.

// To change a value, you have to give it the ASCII value.
b2[0] = 65;

console.log(b2.length);
console.log(b2.toString()); // A
console.log(b2);

// Unsafe because it may bring in junk data from memory.
// Faster because it doesn't clear out before running.
let b3 = Buffer.allocUnsafe(20);
console.log(b3);
b3.fill("B");
console.log(b3);
console.log(b3.toString());

// This takes 4 bytes because it is a complex character.
let b4 = Buffer.from("Hello🔥world");
console.log(b4);
console.log(b4.toString());
console.log(b4[0]);

console.log(b4.toString("utf8", 5, 9)); // 🔥

// Concat function.
// Have to pass in the buffers as an array [b3, b4].
let b6 = Buffer.concat([b3, b4]);
console.log(b6.toString());

// Slice function.
let b7 = b6.slice(20, 34); // Hello🔥world
console.log(b7.toString());

// Can write the data.
let b8 = Buffer.alloc(10);
b8.write("Buffer", 2);
console.log(b8);
console.log(b8.toString());

// Will not work.
//console.log(b8.read());

// This gives values.
// for (let c of b8) {
//   console.log(c);
// }

//console.log(b8.entries()); // Object [Array Iterator] {}

// This gives keys and values.
for (c of b8.entries()) {
  console.log(c);
}

// Can copy values.
let b9 = Buffer.alloc(10);

b8.copy(b9, 0, 2, 8);
console.log(b9.toString()); // Buffer.

let bufferJson = b9.toJSON();
console.log(bufferJson.data);

// Translates buffer JSON data and saves it as a buffer without issue.
let b10 = Buffer.from(bufferJson.data);

console.log(b10); // <Buffer 42 75 66 66 65 72 00 00 00 00>
console.log(b10.toString()); // Buffer

const arrayBytes = [0x41, 0x20, 0x48, 0x65, 0x6c, 0x6c, 0x6f];

let b11 = Buffer.from(arrayBytes);
console.log(b11.toString()); // A Hello

// Specifies an array with 10 bytes.
let arrayBuffer = new ArrayBuffer(10);
let b12 = Buffer.from(arrayBuffer, 0, 2);

console.log(b12);
