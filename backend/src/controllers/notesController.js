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
        res.status(201).json({message: "Note created successfully"})

    } catch (e) {
        console.log(e.message)
    }

}

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find()
        res.status(200).json(notes);

    } catch (error) {
        res.status(500).json({message: "Internal server error"})
        console.log(error)
    }
}

export const updateNote = (req, res) => {
    res.status(200).json({message: "Note updated successfully"})

}

export const deleteNote = (req, res) => {
    res.status(200).json({message: "Note deleted successfully"})

}

