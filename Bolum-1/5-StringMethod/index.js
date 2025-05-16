let nameSurname = "Hacer Bakir";

let last = nameSurname.lastIndexOf("k");
console.log("Index Number of k : ", last);

let name = nameSurname.slice(0, 5);
console.log("Name : ", name);

let lastName = nameSurname.substr(6, 6);
console.log("Lastname : ", lastName);

let updatedNameSurname = nameSurname.replace("H", "h");
console.log("Replace using the name : ", updatedNameSurname);
