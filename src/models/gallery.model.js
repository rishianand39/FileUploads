const mongoose=require("mongoose");

const gallerySchema=mongoose.Schema({
    avatar:{type:String,required:true},
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
         ref: 'user',
        required: true
    }
},{
    timestamps:true,
    versionKey:false
});

const Gallery = mongoose.model('gallery', gallerySchema);

module.exports = Gallery;




