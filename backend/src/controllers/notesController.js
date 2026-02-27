export function getAllNotes (req, res) {
    res.status(200).send("You Just Fetched the Notes!");
};

export function createNote(req, res) {
    res.status(201).json({message: "Note Created Successfully!"})
};

export function updateNote(res, req) {
    res.status(200).json({message: `You Have Updated the note with id: ${req.params.id}`})
};

export function deleteNote(res, req) {
    res.status(200).json({message: `You Have Deleted the note with id: ${req.params.id}`})
}