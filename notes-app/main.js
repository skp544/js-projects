let addBtn = document.getElementById("add-btn");
let addTitle = document.getElementById("note-title");
let addText = document.getElementById("note-text");
let clear = document.querySelector(".clear");

function getNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (addTitle.value == "" || addText.value == "") {
    alert("Please Add Note Title and Details");
  }

  getNotes();
  let myObj = {
    title: addTitle.value,
    text: addText.value,
  };

  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  document.querySelector("form").reset();

  //   console.log(notesObj);

  showNotes();
});

function showNotes() {
  getNotes();
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        
    <div class="note">
    <p class="note-counter">Note ${index + 1}</p>
    <h3 class="note-title">${element.title}</h3>
    <p class="note-text">${element.text}</p>

    <button id="${index}" onclick= "deleteNote(this.id)" class="note-btn delete-btn" >Delete Note</button>
    <button onclick= "editNote(this.id)" class="note-btn edit-btn">Edit Note</button>
  </div>
        

        `;
  });

  let noteElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    noteElm.innerHTML = html;
  } else {
    noteElm.innerHTML = "No Notes Yet. Please add a note.";
  }
}

function deleteNote(index) {
  let confirmDel = confirm("Delete this note?");

  if (confirmDel) {
    getNotes();
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
  }
}

function editNote(index) {
  if (addTitle.value !== "" || addText.value !== "") {
    alert("Clear the form before editing note");
  } else {
    getNotes();
    notesObj.findIndex((element, index) => {
      addTitle.value = element.title;
      addText.value = element.text;
    });
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
  }
}

// Delte all notes

clear.addEventListener("click", () => {
  let confirmClear = confirm("You want to delete all notes?");

  if (confirmClear) {
    localStorage.clear();
    showNotes();
  }
});

showNotes();
