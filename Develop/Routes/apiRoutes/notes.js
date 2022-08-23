const router = require("express").Router();
const { createNewNote, deleteNote } = require("../../lib/notes");
const { notes } = require('./public/notes');
const allNotes = require('./db/db.json');

router.post("/notes", (req, res) => {
    const newNote = createNewNote(req.body, allNotes);
    res.json(newNote);
});

module.exports = router;