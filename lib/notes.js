const fs = require('fs');
const path = require('path');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const db = require('../db/db.json');

//function filterByQuery??

//function findById??  Doesnthat work with uniqid??

function createNewNote(body) {
    const newNote = body;
    db.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db))
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
       readNotes().then( notes => {
           let newNotes;
           newNotes = [].concat(JSON.parse(notes))
           console.log(newNotes)
           return newNotes
       })
   
   }
//function saveNote??

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