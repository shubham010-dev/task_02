const form = document.querySelector("form");
const taskInput = document.getElementById("taskinput");
const taskList = document.getElementById("tasklist");
const toggleThemeButton = document.getElementById("toggletheme");
function createTaskElement(taskText) {
    // Create elements
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "taskdone";

    const taskName = document.createElement("p");
    taskName.className = "taskname";
    taskName.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "Delete";

    // Append elements
    li.appendChild(checkbox);
    li.appendChild(taskName);
    li.appendChild(deleteBtn);

    // Add event listeners
    checkbox.addEventListener("change", () => {
        taskName.style.color = checkbox.checked ? "#888" : "#000";
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    return li;
}

// Form submit handle
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = createTaskElement(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = ""; // Clear input
    }
});
toggleThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Update button icon/text
    if (document.body.classList.contains("dark-mode")) {
        toggleThemeButton.textContent = "☀️";
    } else {
        toggleThemeButton.textContent = "🌙";
    }
});
