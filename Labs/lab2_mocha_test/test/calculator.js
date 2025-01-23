const assert = require("assert");
const { add, sub, mul, div } = require("../app/calculator");

// ADD
describe("Validating the add() function", function () {
  // Pass.
  it("should return 7 when the value is 5 + 2", function () {
    assert.equal(add(5, 2), 7);
  });

  // Fail.
  it("should return 7 when the value is 5 + 2", function () {
    assert.equal(add(5, 2), 8);
  });
});

// SUB
describe("Validating the sub() function", function () {
  // Pass.
  it("should return 3 when the value is 5 - 2", function () {
    assert.equal(sub(5, 2), 3);
  });

  // Fail.
  it("should return 3 when the value is 5 - 2", function () {
    assert.equal(sub(5, 2), 5);
  });
});

// MUL
describe("Validating the mul() function", function () {
  // Pass.
  it("should return 10 when the value is 5 * 2", function () {
    assert.equal(mul(5, 2), 10);
  });

  // Fail.
  it("should return 10 when the value is 5 * 2", function () {
    assert.equal(mul(5, 2), 12);
  });
});

// DIV
describe("Validating the div() function", function () {
  // Pass.
  it("should return 5 when the value is 10 / 2", function () {
    assert.equal(div(10, 2), 5);
  });

  // Fail.
  it("should return 5 when the value is 10 / 2", function () {
    assert.equal(div(10, 2), 2);
  });
});
