let head = document.getElementById("head");
let text = document.getElementById("text");
let burn = document.getElementById("burn")
let edd = document.getElementById("edd")
let ell = document.getElementById("ell")


text.addEventListener("input", function () {
    if(text.value === "") {
        burn.style.display = "none";
    }
    burn.style.display = "block";
})

function trash() { 
    head.value = "";
    text.value = "";
  burn.style.display = "none"
}

function save() {
    text.setAttribute("readonly", true);
    head.setAttribute("readonly", true);
let notes = JSON.parse(localStorage.getItem('notes')) || [];

notes.push({
    head :head.value,
    text: text.value,
    date:new Date().toLocaleString()
})
 
 localStorage.setItem('notes', JSON.stringify(notes));
 location.href = "view.html";

}


function edit() {
    text.removeAttribute("readonly");
    head.removeAttribute("readonly");
   
}
function back() {
    location.href = "home.html";
}
