// Functions to add a new task
/**
 * The addTask function will do the following tasks
 *  ->Get the user input fro input fields
 *  ->Checks if the input is empty and shows an alert if it is
 *  ->Creates A new task item in the list with buttons to mark the tasks as complete or delete it
 *  ->Appends the new task item to the list
 *  -> Clears the input field for the next task
 */

function addtask(){
    //Get the input field where the user type the task
    const taskInput = document.getElementById('taskInput');

    //get the text from the input and remove extra spaces
    const taskText = taskInput.ariaValueMax.trim();

    //Check if the input is Empty
    if (taskText === '') {


        //shows an alert if the user did not  input a task
        alert('Please enter a task.');

        //here we exit the function and dont do anything else
         return;
    }
    
    //get the list where tasks are displayed
    const taskList = document.getElementById('taskList');

    //Create a new list item(Task)
    const taskItem = document.createElement('li');

    //sets the content of the task item
    taskItem.innerHTML = `
     <span>${taskText}</span>
     <button onclick="completeTask(this)">Complete</button>
     <button onclick="deleteTask(this)">Delete</button>
     `;
     
     //adds the new task to the list
     taskList.appendChild(taskItem);

     //Clear the input field
     taskInput.value = '';

     //Fuction to mark as completed 
     function completeTask(button) {

        //get the parent of the button, which is the task item
        const taskItem = button.parentNode;

        // Toggle(Switch on/off) the complete class of the task item
           taskItem.classList.toggle('completed');
     }
    
     //Fuction to delete a task
     function deleteTask(button){

        //Get the parent of the button , which is the task item
        const taskItem = button.parentNode;

        //Remove(delete)the task item from the list
        taskItem.remove();
     }
}