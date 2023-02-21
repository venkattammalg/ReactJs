const mongoose = require("mongoose");
const connectDatabase = () =>{
    mongoose.connect('mongodb+srv://venkat:venkat@cluster0.3siqqxt.mongodb.net/food',{
        useNewUrlParser :true,
        useUnifiedTopology:true,
    }).then((data) =>{
        console.log(`DATABASE CONNECTION SUCCESSFUL WITH SERVER: ${data.connection.host}`);
    })
}
module.exports = connectDatabase;