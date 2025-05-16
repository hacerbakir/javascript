const addform = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <img class="w-auto delete " src="img/delete.svg"></img>
    </li>
    `;
    list.innerHTML += html;
}

addform.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addform.add.value.trim(); //trimstart() yazılan todo nun başındaki boşlukları kaldırır trimEnd sonundaki boşlukları kaldırır sadece trim hem başını hem sonundaki boşlukları kaldırır

    if (todo.length) {
        generateTemplate(todo);
        addform.reset();
    }
})

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

search.addEventListener('keyup',e=>{
    const term = search.value.trim().toLowerCase();

    filterTodos(term);
})

const filterTodos = term=>{
    // console.log(list.children); html colection foreach kulanamıyoruz
    // console.log(Array.from(list.children)); nodelist 

    Array.from(list.children)
    .filter(todo=> !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtred'));
    Array.from(list.children)
    .filter(todo=> todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtred'));

}



