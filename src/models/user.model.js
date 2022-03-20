const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    avatar:{type:String,required:true}
},{
    timestamps:true,
    versionKey:false
});

const User = mongoose.model('user', userSchema);

module.exports = User;