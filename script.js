const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const prioritySelect = document.getElementById("priority");

// Add Task
function addTask() {
    const taskText = inputBox.value.trim();
    const priority = prioritySelect.value;

    if (taskText === "") {
        alert("You must write something!");
        return;
    }

    // Create li
    const li = document.createElement("li");
    li.textContent = taskText;
    li.classList.add(priority); // high / medium / low

    // Create delete span
    const span = document.createElement("span");
    span.textContent = "×";
    li.appendChild(span);

    listContainer.appendChild(li);

    // Clear input
    inputBox.value = "";

    saveData();
}

// Click Event (Check/Uncheck & Delete)
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

// Save to localStorage
function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

// Load from localStorage
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks") || "";
}

showTasks();
