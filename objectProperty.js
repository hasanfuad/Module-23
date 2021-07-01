const student = [
    {id: 23, name: "dipjol"},
    { id: 27, name: "manana"},
    {id: 22, name: "sharukh"}
]

const studentName = []

// for ( let i = 0; i < student.length; i++){
//     const element = student[i];
//     studentName.push(element.name)
// }

const sName = student.map((element)=>{
    return element.name;
})

const bigger = student.filter(x => x.id > 22)
const big = student.find(x => x.id > 22)

console.log(big);