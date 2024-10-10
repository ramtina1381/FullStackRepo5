const noteModel = require('../models/notes.js');
const express= require("express");
const router = express.Router();
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/notes', (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    const note = new noteModel({
        noteTitle: req.body.noteTitle,
        noteDescription: req.body.noteDescription,
        priority: req.body.priority || 'MEDIUM',
        dateAdded: req.body.dateAdded || new Date(),
        dateUpdated: req.body.dateUpdated || new Date()
    })

    note.save()
        .then(data => {
            res.status(201).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating the note."
            });
        });
    //TODO - Write your code here to save the note
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', async (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    
    try{
        const notes = await noteModel.find()
        res.send(notes)
    }
    catch(err){
        res.send({message: err.message})
    }
    //TODO - Write your code here to returns all note
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.params.noteId) {
        return res.status(400).send({
            message: "Note Id is required!"
        });
    }
    try{
        const note = await noteModel.findById(req.params.noteId)
        res.send(note)     
    }
    catch(err){
        res.send({message: err.message})
    }
    
    //TODO - Write your code here to return onlt one note using noteid
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.params.noteId) {
        return res.status(400).send({
            message: "noteId is required to update the data. "
        });
    }

    try{
        const noteUpdate = await noteModel.findByIdAndUpdate(req.params.noteId, req.body, {new: true})
        res.send(noteUpdate)
    }
    catch(err){
        res.send({message: err.message})
    }
    //TODO - Write your code here to update the note using noteid
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.params.noteId) {
        return res.status(400).send({
            message: "note Id is required to delete a data. "
        });
    }
    try{
        const noteDeleted = await noteModel.findByIdAndDelete(req.params.noteId)
        res.send({message: "This note is deleted successfully. "})
    }
    catch(err){
        res.send({message: err.message})
    }

    //TODO - Write your code here to delete the note using noteid
});


module.exports = router