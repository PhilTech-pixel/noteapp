import express from "express";
import {getAllNotes, createNote, updateNote, deleteNote} from "../controllers/notesController.js"

const router = express.Router();

//routes
router.get("/", getAllNotes);

router.post("/", createNote);

router.patch("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;