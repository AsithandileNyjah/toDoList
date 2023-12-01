
let list = document.querySelector('[list]');
let btn = document.querySelector('[enter]');
let sortBtn = document.querySelector('[sort]');

btn.addEventListener('click', toDo);
btn.addEventListener('click', clear)
sortBtn.addEventListener('click', sortTasks);

function toDo() {
    let enteredText = document.querySelector('[enteredList]').value.trim();

    if (enteredText) {
        let toDoItem = {
            text: enteredText,
            timestamp: new Date().toLocaleString(),
            completed: false
        };


        let listItem = document.createElement('li');


        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            toDoItem.completed = checkbox.completed;
            updateTaskStatus();
            if (checkbox = checked){
                taskElement.style.textDecoration = 'line-through';
            }
            
        });
        let taskText = document.createElement('span');
        taskText.textContent = `${toDoItem.text} (${toDoItem.timestamp})`;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', () => {
            listItem.remove();
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        listItem.appendChild(deleteBtn);

        list.appendChild(listItem);

        
        enteredList.value = '';
    }
}

function updateTaskStatus() {
}

function sortTasks() {
    let items = Array.from(list.children);
    items.sort((a, b) => {
        let textA = a.textContent.toLowerCase();
        let textB = b.textContent.toLowerCase();
        return textA.localeCompare(textB);
    });

    list.innerHTML = '';

    
    items.forEach(item => list.appendChild(item));
}
function clear (){
    document.querySelector('[enteredList]').value = '';
}