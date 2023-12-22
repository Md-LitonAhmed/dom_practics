let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let toDoUl = document.querySelector(".items");
let completeUl = document.querySelector(".completed-list");

let createTask=function(task){
    let listItem=document.createElement('li');
    let checkBox=document.createElement('inpute');
    let label=document.createElement('label');
    label.innerText=task;
    checkBox.type='checkbox';
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    return listItem;

}

let addTask=function(e){
e.preventDefault();
let listItem=createTask(newTask.value);
toDoUl.appendChild(listItem)
newTask.value='';
bindInCompleteItems(listItem, completeTask)
}

let bindInCompleteItems=function(taskItem,checkBoxClick){
    let checkBox=taskItem.querySelector('inpute[type="checkbox"]');
    checkBox.onchange = checkBoxClick;

}