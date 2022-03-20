// const path=require("path")
// const multer=require("multer");


// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, path.join(__dirname,"../uploads"))
//     },
//     filename: function (req, file, callback) {
//       const uniquePrefix = Date.now();
//       callback(null, uniquePrefix + '-' + file.originalname )
//     }
//   })
  
//   const fileFilter = (req, file, callback)=> {

//     if(file.mimetype==="image/jpeg" || file.mimtype==="image/png"){
//         callback(null, true)
        
//     }else{
//         callback(null, false)

//     }
//   }



// const options={
//     storage:storage,
//     fileFilter:fileFilter,
//     limits:{
//         fileSize:1024*1024*5,
//     }
// }

// const uploads=multer(options);


// module.exports=uploads;

const path = require("path");
const multer = require("multer");
// const req = require("express/lib/request");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, callback) {
    const uniquePrefix = Date.now();
    callback(null, uniquePrefix + "-" + file.originalname);
  },
});

const fileFilter = (req, file, callback) => {
  // The function should call `callback` with a boolean
  // to indicate if the file should be accepted

  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    // To accept the file pass `true`, like so:
    callback(null, true);
  } else {
    // To reject this file pass `false`, like so:
    callback(new Error("Incorrect mime type"), false);
  }
};

const options = {
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
};

// 1kb = 1024 bytes
// 1mb = 1024 kb

const uploads = multer(options);

module.exports = uploads;