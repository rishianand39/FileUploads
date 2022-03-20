 
const express = require('express');
const User = require('../models/user.model');
const router = express.Router();
const uploads=require("../middlewares/fileupload")


router.get('/', async(req, res) => {
    try {
        const user = await User.find().lean().exec();
        return res.status(201).send(user);
    } catch (err) {
        return res.status(500).send({ error: err.message });
    }
});

router.post('/',uploads.single('avatar'), async(req, res) => {
    try {
        const user = await User.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            avatar:req.file.path
        });
        // console.log(req.body)
        // console.log(req.file)
        return res.status(201).send(user);
    } catch (err) {
        return res.status(500).send({ error: err.message });
    }
});
router.post('/multiple',uploads.array('avatar',2), async(req, res) => {
    try {
        const user = await User.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            avatar:req.file.path
        });
        return res.status(201).send(user);
    } catch (err) {
        return res.status(500).send({ error: err.message });
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        const user=User.findByIdAndDelete(req.params.id).lean().exec();
       return res.status(201).send(user);
    } catch (err) {
        return res.status(500).send({ error: err.message })
    }
})
router.patch('/:id', async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        }).lean().exec();

        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});






module.exports=router