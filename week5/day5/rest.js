const calculate = (x, y, ...rest) => {
    const restresult = rest.reduce((sum, a) => sum + a, 0)
    return x * y + restresult
}

console.log(calculate(1,2,23,4,2,4,324,32,4,32,432,4,32,4,324))