const ScientificCalculator=require('./ScientificCalculator');

test ("testcase1",()=>{
    expect(ScientificCalculator.power(3,4)).toBe(81)
});

test ("testcase2",()=>{
    expect(ScientificCalculator.round(6.7)).toBe(7)
});
test ("testcase3",()=>{
    expect(ScientificCalculator.ceil(3.7)).toBe(4)
});
