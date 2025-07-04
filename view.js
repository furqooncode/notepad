let newHead = document.getElementById("newHead");
let newText = document.getElementById("newText");

let notes = JSON.parse(localStorage.getItem("notes"));

console.log(notes)
if (notes.length > 0) {
let latex = notes[notes.length - 1];
newHead.textContent = latex.head;
newText.textContent = latex.text;
}