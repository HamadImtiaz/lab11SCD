const calculator=require("./calculator");

test("Testing add",()=>{
    expect(calculator.add(1,2)).toBe(3)
});

test("Testing Product",()=>{
    expect(calculator.Product(2,2)).toBe(4)
});

test("Testing Divide",()=>{
    expect(calculator.Divide(10,5)).toBe(2)
});

test("Testing Divide",()=>{
    expect(calculator.Divide(4,0)).toBe(undefined)
});

test("Testing Subtract",()=>{
    expect(calculator.subtract(5,2)).toBe(3)
});


