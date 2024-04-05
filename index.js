#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            message: "What Do You Want To Add In Todos?",
            type: "input"
        },
        {
            name: "addMore",
            message: "Do You Want To Add More?",
            type: "confirm",
            default: "true"
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
