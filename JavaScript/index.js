let toDoList = document.querySelector('[enteredList]').value.split(',');

// No need to wrap it in an additional array
let toDoListArray = toDoList;

let list = document.querySelector('[list]');

let display1 = document.querySelector('[display1]');
let display2 = document.querySelector('[display2]');
let display3 = document.querySelector('[display3]');
let display4 = document.querySelector('[display4]');
let display5 = document.querySelector('[display5]');

let btn = document.querySelector('[enter]');

btn.addEventListener('click', toDo);

function toDo() {
    let toDoList = document.querySelector('[enteredList]').value.split(',');

    // No need to wrap it in an additional array
    let toDoListArray = toDoList;

    console.log(toDoListArray[0]);
    console.log(toDoListArray[1]);
    console.log(toDoListArray[2]);
    console.log(toDoListArray[3]);
    console.log(toDoListArray[4]);

    display1.value = toDoListArray[0];
    display2.value = toDoListArray[1];
    display3.value = toDoListArray[2];
    display4.value = toDoListArray[3];
    display5.value = toDoListArray[4];
}


let cleanList = document.querySelector('[clear]')

cleanList.addEventListener('click', clear)

function clear (){
    document.querySelector('[display1]').value = '';
    document.querySelector('[display2]').value = '';
    document.querySelector('[display3]').value = '';
    document.querySelector('[display4]').value = '';
    document.querySelector('[display5]').value = '';
    document.querySelector('[enteredList]').value = '';
}