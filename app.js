const calculator={
add:(a,b)=>{
    return a+b;
},
subtract:(a,b)=>{
    return a-b;
},
multiply:(a,b)=>{
    return a*b;
},
divide:(a,b)=>{
    return a/b;
}
console.log('Addition: ${calculator.add(10,20)}')
console.log('Subtraction: ${calculator.subtract(10,20)}')
console.log('Multiplication: ${calculator.multiply(10,20)}')
console.log('Division: ${calculator.divide(10,20)}')
}
