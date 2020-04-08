const students = [
    {id:21, name:'kamrul'},
    {id:25, name:'Nazmul'},
    {id:30, name:'Siraz'}

]



// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const output = element.name
//     console.log(output);
    
// }

const studentName = students.map(x => x.name);
console.log(studentName);