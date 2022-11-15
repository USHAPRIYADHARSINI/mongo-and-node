// const add = (a,b)=> a+b;
// console.log (add(2,6));

const double = (n)=> n*2;

const [ , ,num] = process.argv
console.log(double(num));