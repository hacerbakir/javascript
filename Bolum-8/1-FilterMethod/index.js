const points = [70,75,25,35,10,80,27];
const studentsPassed= points.filter(point=>{
    return point>50;
})

console.log(studentsPassed);

const students = [
    {name:'can', passed: true},
    {name:'elif', passed: false},
    {name:'tuba', passed: false},
    {name:'osman', passed: true},
];

const passingStudents = students.filter(student=>{
    return student.passed
})

console.log(passingStudents);
