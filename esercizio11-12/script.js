

document.addEventListener('DOMContentLoaded', (e) => {
    const newTaskInput = document.querySelector('#new-task-input');
    const addTaskButton = document.querySelector('#add-task-button');
    const taskList = document.querySelector('#task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value;
        if (taskText.trim()) {
            const newTask = document.createElement('li');
            newTask.textContent = taskText;
          
            // Bottone per eliminare il task
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Elimina';
            deleteButton.style.marginLeft = '10px';
            deleteButton.style.backgroundColor = "red";
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(newTask);
            });

            newTask.appendChild(deleteButton);
            newTask.addEventListener('click', () => {
                newTask.classList.toggle('completed');
            });

            taskList.appendChild(newTask);
            newTaskInput.value = '';
        }
    });
});
 