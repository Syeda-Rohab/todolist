#! /usr/bin/env node

import inquirer from "inquirer";

let todos: string[] = [];
let condition = true;


while(condition) {
let ans = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select an operation",
        choices: ["Add", "View", "update", "delete", "Exit"],

    }

]);
if (ans.select === "Add")[]
let addTodo = await inquirer.prompt({
    name: "todo",
    type: "input",
    message: "Add items in the list",
    validate: function (input) {
        if(input.trim() == "") {
            return "Please enter a non-empty item."
        }
        return true;
    }

})
if (addTodo.todo.trim() !== ""){
    console.log(todos);
    todos.forEach(todo => console.log(todo));
}
todos.push(addTodo.todo);
console.log(todos);

if (ans.select === "update"){
 let updateTodo = await inquirer.prompt({
    name: "todo",
    type: "list",
    message: "Update items in the list",
    choices: todos.map(item => item)
 })   
 let addTodo = await inquirer.prompt({
    name: "todo",
    type: "input",
    message: "Add items in the list",
 })
 let newTodo = todos.filter(val =>val !== updateTodo.todo);
 todos = [...newTodo,addTodo.todo];
 console.log(todos);
}

if (ans.select === "view"){
    console.log("***** TO-DO LIST *****");
    todos.forEach(todo => console.log(todo))
}

if (ans.select === "delete"){
    let deleteTodo  = await inquirer.prompt({
        name: "todo",
        type: "list",
        message:"Select item to delete",
        choices: todos.map(item => item)
    })
    let newTodo = todos.filter(val =>val !== deleteTodo.todo)
    todos = [...newTodo,addTodo.todo];
    todos.forEach(todo => console.log(todo))
}

if (ans.select === "exit"){
    console.log("Exitingprogram...");
    condition = false;
}





//if (ans.select === "view")[]
//if (ans.select === "delete")[]
//if (ans.select === "Exit")[]

}
    
        