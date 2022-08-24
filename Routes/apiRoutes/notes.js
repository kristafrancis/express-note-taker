const router = require("express").Router();
const { createNewNote, getNotes, deleteNote } = require("../../lib/notes");
// const { notes } = require("./public/notes");
const allNotes = require("../../db/db.json");

router.get("/notes", (req, res) => {
    const allNotes = getNotes()
    return res.json(allNotes)
});

 // push data to the db.json file
router.get("/notes/:id", (req, res) => {
    newNote(req.params.id, allNotes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });

router.post("/notes", (req, res) => {
    const newNote = createNewNote(req.body);
    res.json(newNote);
});

   

router.delete("/notes/:id", (req, res) => {
    deleteNote(req.params.id, allNotes);
    res.json(true);
});

module.exports = router;