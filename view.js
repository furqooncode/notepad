function backhome() {
    location.href = "index.html";
}

let notes = JSON.parse(localStorage.getItem('notes')) || [];
const container = document.getElementById('notesContainer');


if (notes.length === 0) {
    container.innerHTML = "<p>No notes found.</p>";
} else {
    notes.forEach(note => {
        container.innerHTML += `
            <div class="singleNote" style="border:1px solid #ccc; padding:10px; margin:10px;">
                <h5>${note.head}</h5>
                <p>${note.text}</p>
                <small>${note.date}</small>
            </div>
        `;
        if (note.text.length = 15) {
            `${note.text} + "..."`
        }
    });
};