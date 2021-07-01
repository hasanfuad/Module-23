
function stopWatch(){
    let count = 0;
    return function(){
        count ++;
        return count;
    }
}

const clock1 = stopWatch()
console.log(clock1());
console.log(clock1());
console.log(clock1());

const cl2 = stopWatch();
console.log(cl2());
console.log(cl2());
console.log(clock1());
