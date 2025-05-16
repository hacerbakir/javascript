

const students = [
    { name: 'can', point: 40 },
    { name: 'tuba', point: 60 },
    { name: 'elif', point: 30 },
    { name: 'osman', point: 100 },
    { name: 'hakan', point: 45 },
    { name: 'deniz', point: 70 },
];

const filtred = students.filter(student =>student.point<50);
const plusPoint = filtred.map(student=>{
    return `${student.name} adlı öğrencinin yeni notu ${student.point+15}`;
})

console.log(plusPoint);

const newNotes = students.filter(student=>student.point<50).map(student=>{
    return `${student.name} adlı öğrencinin yeni notu ${student.point+15}`;
})

const newsNotes = students.filter(student=>student.point<50)
.map(student=> `${student.name} adlı öğrencinin yeni notu ${student.point+15}`);

console.log(newNotes);
console.log(newsNotes);

