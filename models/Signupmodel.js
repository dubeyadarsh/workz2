const mongoose=require("mongoose");
const SignupSchema=new mongoose.Schema({
   _id:{
      type:String,

   },
 username:{
    type:String,
    required:true
 },
 name:{
    type:String,
    required:true
 },
 password:{
    type:String,
    required:true
 },
project:[{
   _id:{
      type:String,
   },
   sentRequest:[{
      _id:{type: String},
      username: {type: String}
      }],
   request: [{
      _id: {type:String},
      username: {type: String}
      }],
   friendsList: [{
      _id: {type:String},
      friendName: {type: String}
      }],
   }
]

});
const user=mongoose.model("user",SignupSchema);
module.exports=user;