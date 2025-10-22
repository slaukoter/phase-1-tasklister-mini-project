document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')

  // Add event listener for form submission.

  form.addEventListener('submit', (event) => {

    // Prevent page from realoading.

    event.preventDefault()

    // Get the input value.

    const taskInput = event.target.elements['new-task-description'].value

    buildToDo(taskInput)

    // Reset the form after submit.

    form.reset()
  })

});
  // Add item to list and display

  function buildToDo(task){

    const taskList = document.getElementById('tasks')

    // Create a new list item. 
    
    const li = document.createElement('li')

    li.textContent = task

    taskList.append(li)
  }