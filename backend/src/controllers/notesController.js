import Note from "../models/Note.js";

export const createNote = async (req, res) => {
    try {
        const {title, content} = req.body
        const newNote = await Note.create(
            {
                title,
                content,
            }
        );
        res.status(201).json(newNote)

    } catch (e) {
        console.log(e.message)
    }

}

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({createdAt: -1})
        res.status(200).json(notes);

    } catch (error) {
        res.status(500).json(error.message)
        
    }
}

export const getNoteById = async (req, res) => {
    try {
        const {id} = req.params
        const notes = await Note.findById(id)
        if (!notes) res.status(404).json({message: "Note not found"})
        res.status(200).json(notes);

    } catch (error) {
        res.status(500).json({message: "Internal server error"})
        console.log(error)
    }
}


export const updateNote = async (req, res) => {
    try {
        const {id} = req.params

        const updateNote = await Note.findByIdAndUpdate(id, req.body, {new: true});
        if (!updateNote) res.status(404).json({message: "Note not found"})
        res.status(200).json(updateNote)

    } catch (error) {
        res.status(500).json({message: "Note was not updated"})
    }
}

export const deleteNote = async (req, res) => {
    try {
        const {id} = req.params
        const deleteNote = await Note.findByIdAndDelete(id);
        if (!deleteNote) res.status(404).json({message: "Note not found"})
        res.status(200).json({message: "Note deleted successfully"})

    } catch (e) {
        res.status(500).json({message: "note was not deleted"})
        console.log(e.message)
    }

}

