const arr = [23,99,20,22];
const output = [];

// for(let i = 0; i < arr.length; i++){
//     const element = arr[i]
//     const res = element * element;
//     output.push(res)
// }

const sqr = arr.map(function(element){
    return element * element;
})

const bigger = arr.filter(x => x % 2 == 0)

const big = arr.find(x => x > 5)

console.log(big);