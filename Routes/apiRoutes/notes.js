const router = require("express").Router();
const { createNewNote, getNotes, deleteNote } = require("../../lib/notes");
// const { notes } = require("./public/notes");
const allNotes = require("../../db/db.json");

router.get("/notes", (req, res) => {
    const allNotes = getNotes()
    return res.json(allNotes)
});


router.post("/notes", (req, res) => {
    const newNote = createNewNote(req.body, allNotes);
    res.json(newNote);
});

router.delete("/notes/:id", (req, res) => {
    deleteNote(req.params.id, allNotes);
    res.json(true);
});

module.exports = router;