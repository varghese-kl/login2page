const mongoose  = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Login2page")
.then(()=>{
    console.log("database connected");
    
})
.catch(()=>{
    console.log("database not connected");
    
})
const LoginSchema = mongoose.Schema(
    {
        name:{
              type:String,
              required : true
        },
    
      password :{
        type:String,
        required : true
  }}

)
const collection = new mongoose.model("collection1",LoginSchema)
module.exports=collection