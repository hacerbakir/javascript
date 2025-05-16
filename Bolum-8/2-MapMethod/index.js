const points = [70, 75, 25, 35, 10, 80, 27];

const newPoint = points.map(point => {
    return point + 10;
})
console.log(newPoint);

const students = [
    { name: 'can', point: 40 },
    { name: 'tuba', point: 60 },
    { name: 'elif', point: 30 },
    { name: 'osman', point: 100 },
];

const newStudentsPoints = students.map(student => {
    if (student.point < 50) {
       // return { name: student.name, point: student.point + 15 };
       student.point+=15;
       return student;
    } else {
        return student;
    }
})

console.log(newStudentsPoints);
