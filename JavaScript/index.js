
let list = document.querySelector('[list]');
let btn = document.querySelector('[enter]');

btn.addEventListener('click', toDo);

function toDo() {
    let enteredText = document.querySelector('[enteredList]').value.split(' ');

    if (enteredText) {
        let toDoItem = {
            text: enteredText,
            timestamp: new Date().toLocaleString()
        };

        // Create list item
        let listItem = document.createElement('li');
        listItem.textContent = `${toDoItem.text} (Created on: ${toDoItem.timestamp})`;

        // Create check button
        let checkBtn = document.createElement('button');
        checkBtn.textContent = 'Check';
        checkBtn.addEventListener('click', () => {
            // Handle check functionality (you can add your logic here)
            alert(`Checked: ${toDoItem.text}`);
        });

        // Create delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            // Handle delete functionality (you can add your logic here)
            listItem.remove();
        });

        // Append buttons to the list item
        listItem.appendChild(checkBtn);
        listItem.appendChild(deleteBtn);

        // Append the list item to the list
        list.appendChild(listItem);

        // Clear the input field
        document.getElementById('enteredList').value = '';
    }
}



let klear = document.querySelector('[clear]')

klear.addEventListener('click', clear)

function clear (){
    document.querySelector('[enteredList]').value = '';
    document.querySelector('[list]').value = '';
}