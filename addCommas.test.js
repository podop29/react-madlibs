const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});


describe("tests add commas", ()=>{
  test("tests 1234", ()=>{
    expect(addCommas(1234)).toBe("1,234")
  })
  test("tests 1000000", ()=>{
    expect(addCommas(1000000)).toBe("1,000,000")
  })
  test("tests 9876543210", ()=>{
    expect(addCommas(9876543210)).toBe("9,876,543,210")
  })
  test("tests 6", ()=>{
    expect(addCommas(6)).toBe("6")
  })
  test("tests -10", ()=>{
    expect(addCommas(-10)).toBe("-10")
  })
  test("tests -5678", ()=>{
    expect(addCommas(-5678)).toBe("-5,678")
  })
})
