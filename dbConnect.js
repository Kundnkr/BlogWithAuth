let mongoose  = require('mongoose');
let url = "mongodb+srv://127.0.0.1/management";



let dbConnect = async()=>{
   await mongoose.connect(url);
}

module.exports = dbConnect;







