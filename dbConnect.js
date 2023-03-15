let mongoose  = require('mongoose');
let url = "mongodb+srv://kundan:123@newcluster.gefneye.mongodb.net/management";



let dbConnect = async()=>{
   await mongoose.connect(url);
}

module.exports = dbConnect;







