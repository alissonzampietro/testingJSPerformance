function testLoop(func) {
    for(let i = 0; i < 3000000; i++) {
        func(i)
    }
}

console.time('native')
function isOddNative(number) {
    return number % 2 !== 0; 
}
testLoop(isOddNative)
console.timeEnd('native')

console.time('binary')
function isOddBinary(number) {
    let converted = (number).toString(2);
    return converted[converted.length - 1] === '1';
}
testLoop(isOddBinary)
console.timeEnd('binary')