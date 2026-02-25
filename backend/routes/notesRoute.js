import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("You just fetched 20 notes!");
});

router.post("/", (req, res) => {
    res.status(201).json({message: "You Have Created 10 plus notes!"});
});

router.put("/:id", (req, res) => {
    res.status(200).json({message: `You Have Updated the note with id: ${req.params.id}`});

})

router.delete("/:id", (req, res) => {
    res.status(200).json({message: `You Have Deleted the note with id: ${req.params.id}`});
})

export default router;
