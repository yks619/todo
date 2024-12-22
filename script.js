const todoForm = document.getElementById('todoForm');
    const taskInput = document.getElementById('taskInput');
    const todoList = document.getElementById('todoList');

    todoForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission

      const taskText = taskInput.value.trim();

      if (taskText === '') {
        alert('Please enter a task!');
        return;
      }

      const listItem = document.createElement('li');
      listItem.className = 'flex justify-between items-center bg-gray-200 p-2 rounded-lg';

      listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600">Delete</button>
      `;

      // Add delete functionality
      listItem.querySelector('button').addEventListener('click', () => {
        todoList.removeChild(listItem);
      });

      todoList.appendChild(listItem);
      taskInput.value = ''; // Clear input
    });