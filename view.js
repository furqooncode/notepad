let newHead = document.getElementById("newHead");
let newText = document.getElementById("newText");

localStorage.setItem("notes", JSON.stringify(notes));

newHead.textContent = notes;