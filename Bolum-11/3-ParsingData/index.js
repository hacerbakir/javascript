const veriable = [
    {"hobby":"swimming", "person":"can"},
    {"hobby":"playing game", "person":"can"},
    {"hobby":"take a trip", "person":"can"}

]//arrayi localStorage e set etmek için string ifadeye çevirmemiz lazım

console.log(JSON.stringify(veriable));
localStorage.setItem('todos',JSON.stringify(veriable)); //array i json string e çevirir

const storedData = localStorage.getItem('todos');
console.log(JSON.parse(storedData));// string ifadeyi json a çevirdik

