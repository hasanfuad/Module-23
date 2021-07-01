const numbers = [22,98,48,29,84,2,4];

// const part = numbers.slice(1,6);
const part = numbers.splice(2,3, 44);
// console.log(part);

const all = numbers.join(",")
console.log(all);