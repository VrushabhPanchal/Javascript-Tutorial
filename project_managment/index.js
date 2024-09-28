const prompt = require('prompt-sync')({sigint : true});
let projectList = [];
let projectObj = {};
let taskObj = {};
console.log(projectList.length === 0);
let exit = true;
let projectDate;
console.log(projectList);

const projectTitlePrompt = prompt("Enter Your Project Name : ");
const projectDatePrompt = prompt("Enter Project Date : ");
const projectDescPrompt = prompt("Enter Project Description : ");
const taskTitlePrompt = prompt("Enter Your Task Name : ");
const taskDatePrompt = prompt("Enter Task Add Date : ");
const taskDeadlinePrompt = prompt("Enter Task Deadline : ");
const taskDescPrompt = prompt("Enter Task Description : ");
const taskAssignPrompt = prompt("Enter Task Assign To : ");

projectObj = {
    projectTitle : projectTitlePrompt,
    projectDate : projectDatePrompt,
    projectDate : projectDescPrompt,
    projectTasks : [taskObj],
}

taskObj = {
    taskTitle : taskTitlePrompt,
    taskDate : taskDatePrompt,
    taskDeadline : taskDeadlinePrompt,
    taskDesc : taskDescPrompt,
    taskAssign : taskAssignPrompt,
}

if(projectList.length === 0){
    projectList.push(projectObj);
    console.log("New project added : ", projectList);
}
else{
    console.log("Existing projects : "+projectList);
}

console.log("All Project List : "+projectList);



// while (exit) {
//     if (projectList.length === 0) {
//         const projectTitle = prompt("Enter Your Project Name : ");
//         projectList.push(projectTitle);
//         console.log("your project title is "+projectTitle);
//         console.log("your project title is "+projectTitle);
//     }
//    console.log(projectList);
   
//     break;
//     console.log("Your Project List is Empty")
// }