function addTask() {
    var input = document.getElementById('new-task');
    var newTask = input.value;
    if (newTask) {
        var listItem = document.createElement('li');
        listItem.textContent = newTask;
        document.getElementById('tasks').appendChild(listItem);
        input.value = ''; // Clear the input
    }
}
