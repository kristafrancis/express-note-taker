const fs = require("fs");
const path = require("path");
const util = require('util')
const readFileAsync = util.promisify(fs.readFile)

function createNewNote(body, notesArray) {
    const newNote = body;
    notesArray.push(newNote);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({notes: notesArray}, null, 2)
    );
    return newNote;
  }
  function readNotes() {
    return readFileAsync(
        path.join(__dirname, '../db/db.json'),
        "UTF-8"
    )
  }

function getNotes() {
    // read the file
    // get it and bring it to the page
    let newNotes;
    readNotes().then( notes => {
        newNotes = [].concat(JSON.parse(notes))
        console.log(newNotes)
        return newNotes
    })
    //Notes are being pushed to frontend but as objects rather than the respective data(the notes the user types)


}
function deleteNote(id, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];

        if (note.id == id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, './db/db.json'),
                JSON.stringify(notesArray, null, 2)
            );

            break;
        }
    }
}



module.exports = {
    createNewNote,
    getNotes,
    deleteNote
};