const express = require("express");
const fetchuser = require("../MiddleWares/fetchUser");
const NotesModel = require('../Models/Notes');
const UserModel = require("../Models/User");

const Router = express.Router();

// get all notes of a particular user 
Router.get("/fetchnotes", fetchuser, async (req, res) => {
    const notes = await NotesModel.find({ user: req.user.id });
    res.json({ notes });
});

// adding a note using post 
Router.post("/addnote", fetchuser, async (req, res) => {
    try {
        newNote = NotesModel.create({
            user: req.user.id,
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag,
        });
        // const savedNote = await newNote.save()
        return res.json({ message: "note created successfully"});
    } catch (error) {
        return res.send({ error: "internal server error" })
    }
});

//searching a note on the basis of title
Router.get("/searchnote/:data", fetchuser, async (req, res) => {
    try {
        const data = req.params.data
        // console.log(data);
        let notes = await NotesModel.find({user: req.user.id})

        notes = notes.filter((note)=>(note.title.includes(data) || note.tag.includes(data)))
        console.log(data);
        console.log(notes);
        if(notes.length===0)
        {return res.status(404).json({e: "no note found"})}
        return res.json({notes});
    } catch (error) {
        return res.send({ error: "internal server error" })
    }
});

// updating a note using put 
Router.put("/updatenote/:id", fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        //find the note to be updated
        let note = await NotesModel.findById(req.params.id)
        
        if (!note) {
            return res.status(404).send("not found");
        }

        if (req.user.id !== note.user.toString()){
            return res.status(401).send("Not Allowed")
        }

        const newNote = {}
        console.log(title, description, tag);
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };
        
        note = await NotesModel.findByIdAndUpdate(req.params.id, {
            $set: newNote
        }, {new: true})
        
        return res.json({note})
        
    } catch (error) {
        return res.send({ error: "internal server error" })
    }
})

// deleting a note using delete
Router.delete("/delete/:id", fetchuser ,async (req, res)=>{
    try {
        //find the note to be deleted
        let note = await NotesModel.findById(req.params.id)

        if (!note) {
            return res.status(404).send("not found");
        }
        
        if (req.user.id !== note.user.toString()){
            return res.status(401).send("Not Allowed")
        }
        
        note = await NotesModel.findByIdAndDelete(req.params.id)
        return res.json({note})

    } catch (error) {
        return res.send({ error: "internal server error" })
    }
}) 


module.exports = Router;