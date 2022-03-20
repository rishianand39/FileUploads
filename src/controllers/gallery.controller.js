 
const express = require('express');
const Gallery = require("../models/gallery.model");
const router = express.Router();
const uploads=require("../middlewares/fileupload")


router.get('/', async(req, res) => {
    try {
        const gallery = await Gallery.find().lean().exec();
        return res.status(201).send(gallery);
    } catch (err) {
        return res.status(500).send({ error: err.message });
    }
});

// router.post('/',uploads.single('avatar'), async(req, res) => {
//     try {
//         const gallery = await Gallery.create({
//             avatar:req.file.path
//         });
//         return res.status(201).send(gallery);
//     } catch (err) {
//         return res.status(500).send({ error: err.message });
//     }
// });
// {
            // avatar:req.file.path,
            // user_id:req.body.user_id,
            
        // }
// uploads.any('avatar'),
router.post('/',uploads.single("avatar") ,async(req, res) => {
    try {
        // const gallery = await Gallery.create(req.body);
        const gallery = await Gallery.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            avatar:req.file.path
        });
        return res.status(201).send(gallery);
    } catch (err) {
        return res.status(500).send({ error: err.message });
    }
});


module.exports=router