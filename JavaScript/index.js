
let list = document.querySelector('[list]');
let btn = document.querySelector('[enter]');
let sortBtn = document.querySelector('[sort]');

btn.addEventListener('click', toDo);
sortBtn.addEventListener('click', sortTasks);

function toDo() {
    let enteredText = document.querySelector('[enteredList]').value.trim();

    if (enteredText) {
        let toDoItem = {
            text: enteredText,
            timestamp: new Date().toLocaleString(),
            completed: false
        };

        // Create list item
        let listItem = document.createElement('li');

        // Create checkbox
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            toDoItem.completed = checkbox.checked;
            updateTaskStatus();
        });

        // Display task text
        let taskText = document.createElement('span');
        taskText.textContent = `${toDoItem.text} (Created on: ${toDoItem.timestamp})`;

        // Create delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            listItem.remove();
        });

        // Append elements to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        listItem.appendChild(deleteBtn);

        // Append the list item to the list
        list.appendChild(listItem);

        // Clear the input field
        document.querySelector('[enteredList]').value = '';
    }
}

function updateTaskStatus() {
    // Handle the task completion logic here
}

function sortTasks() {
    // Sort tasks alphabetically
    let items = Array.from(list.children);
    items.sort((a, b) => {
        let textA = a.textContent.toLowerCase();
        let textB = b.textContent.toLowerCase();
        return textA.localeCompare(textB);
    });

    // Clear the current list
    list.innerHTML = '';

    // Append sorted tasks to the list
    items.forEach(item => list.appendChild(item));
}



let klear = document.querySelector('[clear]')

klear.addEventListener('click', clear)

function clear (){
    document.querySelector('[enteredList]').value = '';
    document.querySelector('[list]').value = '';
}