const interactions = 2;
function testLoop(func) {
    for(let i = 0; i < interactions; i++) {
        func(i)
    }
}
// testing using mod
console.time('mod')
function isOddMod(number) {
    return number % 2 !== 0; 
}
testLoop(isOddMod)
console.timeEnd('mod')


// testing using binary
console.time('binary')
function isOddBinary(number) {
    let converted = (number).toString(2);
    return converted[converted.length - 1] === '1';
}
testLoop(isOddBinary)
console.timeEnd('binary')
console.log('interactions: ', interactions)