document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('taskList');
    const newTaskInput = document.getElementById('newTask');
    const deadlineInput = document.getElementById('deadline');
    const addTaskButton = document.getElementById('addTask');

    addTaskButton.addEventListener('click', function () {
        const taskText = newTaskInput.value.trim();
        const deadline = deadlineInput.value;

        if (taskText !== '' && deadline !== '') {
            addTaskToList(taskText, deadline);
            newTaskInput.value = '';
            deadlineInput.value = '';
        }
    });

    function addTaskToList(taskText, deadline) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <span class="deadline">Deadline: ${deadline}</span>
            <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(listItem);
    }

    taskList.addEventListener('click', function (event) {
        const target = event.target;

        if (target.tagName === 'BUTTON' && target.classList.contains('delete-button')) {
            const listItem = target.closest('li');
            if (listItem) {
                taskList.removeChild(listItem);
            }
        }
    });
});
