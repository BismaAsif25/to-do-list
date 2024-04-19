#! /usr/bin/env node
import inquirer from "inquirer";
let todos = ["sara", "sana"];
do {
    let ans = await inquirer.prompt([
        {
            name: "todo",
            type: "list",
            message: "Select an operation",
            choices: ["add", "update", "view", "delete"]
        }
    ]);
    //}
    if (ans.todo == "add") {
        let addTask = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "what do you want to add in your todo list?"
            },
            {
                name: "addMore",
                type: "confirm",
                message: "Are you sure you want to add this in your todo list?",
                default: "false"
            }
        ]);
        todos.push(addTask.todo);
        todos.forEach(todo => console.log(todo));
    }
    if (ans.todo == "update") {
        let update = await inquirer.prompt([
            {
                name: "updatetodo",
                type: "list",
                message: "update litems in the list",
                choices: todos.map(item => item)
            }
        ]);
        let addTask = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "what do you want to add in your todo list?"
            }
        ]);
        let newTodo = todos.filter(val => val !== update.updatetodo);
        todos = [...newTodo, addTask.todo];
        console.log(todos);
    }
    if (ans.todo == "view") {
        console.log("to do list");
        console.log(todos);
    }
    if (ans.todo == "delete") {
        let deletetodo = await inquirer.prompt([
            {
                name: "todo",
                type: "list",
                message: "delete items in the list",
                choices: todos.map(item => item)
            }
        ]);
        let newTodo = todos.filter(val => val !== deletetodo.todo);
        todos = [...newTodo];
        console.log(todos);
    }
} while (true);
