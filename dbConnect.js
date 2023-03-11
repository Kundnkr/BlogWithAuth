let mongoose  = require('mongoose');
let url = "mongodb://localhost:27017/?directConnection=true";



let dbConnect = async()=>{
   await mongoose.connect(url);
}

module.exports = dbConnect;







