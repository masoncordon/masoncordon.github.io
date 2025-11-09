// Store todos in localStorage under this key
const STORAGE_KEY = 'my_todos';
let fullList = [];
let currentCount = sessionStorage.clickcount ? Number(sessionStorage.clickcount) : 0;

// Load saved todos when starting
function loadTodos() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            fullList = JSON.parse(saved);
            renderList(); // Show saved items
        }
    } catch (e) {
        console.error('Failed to load todos:', e);
        fullList = []; // Reset if load fails
    }
}

// Save todos to localStorage
function saveTodos() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(fullList));
    } catch (e) {
        console.error('Failed to save todos:', e);
    }
}

//simple html sanitizer
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Render the current list to HTML
function renderList() {
    const list = document.getElementById("todoList");
    if (!list) return;
    
    list.innerHTML = fullList.map(item => 
        `<li data-id="${item.id}">
            ${escapeHtml(item.text)}
            <button onclick="deleteTodo('${item.id}')">Delete</button>
        </li>`
    ).join("");
}

// Generate a unique ID for each todo
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

//function to add item to the todo list
function addItem() {
    const inputEl = document.getElementById("todoInput");
    let itemInput = (inputEl && inputEl.value) ? inputEl.value.trim() : '';
    if(itemInput === "") {
        alert("Please enter an item.");
        return;
    }

     // Create a todo object with unique ID
    const todo = {
        id: generateId(),
        text: itemInput,
        done: false,
        created: new Date().toISOString()
    };

    fullList.push(todo);
    saveTodos(); // Save to localStorage
    renderList(); // Update the display

    // Reset input field
    inputEl.value = "";

    itemCountUp();
}

// display item count
function displayItemCount() {
    document.getElementById("itemCount").innerText = currentCount;
}

// count how many items are added to the list in the current session
function itemCountUp() {
    if (currentCount) {
        currentCount = Number(currentCount) + 1;
    } else {
        currentCount = 1;
    }

    console.log(currentCount);
    displayItemCount();
}

function itemCountDown() {
    if (currentCount) {
        currentCount = Number(currentCount) - 1;
    } else {
        currentCount = 1;
    }

    console.log(currentCount);
    displayItemCount();
}

// Delete a todo by ID
function deleteTodo(id) {
    fullList = fullList.filter(item => item.id !== id);
    saveTodos();
    renderList();
    itemCountDown();
}

// Toggle a todo's done state
function toggleTodo(id) {
    const todo = fullList.find(item => item.id === id);
    if (todo) {
        todo.done = !todo.done;
        saveTodos();
        renderList();
    }
}

// Attach form submit handler and load saved todos when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    loadTodos(); // Load saved todos first
    displayItemCount();
    
    //set css based on cookies collected from index.html
    function getCookie(name) {
        const match = document.cookie.split('; ').find(row => row.startsWith(name + '='));
        return match ? decodeURIComponent(match.split('=')[1]) : null;
    }

    const cssMode = getCookie('mode');

    if (cssMode === "dark") {
        DarkMode();
    } else if (cssMode === "light") {
        LightMode();
    } else {
        DefaultMode();
    }
    
    const form = document.getElementById('todoForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            addItem();
        });
    }


});