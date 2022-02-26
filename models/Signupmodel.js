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
 requests:[
{
   _id:{
      type:String,
      unique:true
   },
   _username:{
      type:String
   },
   projectid:{
      type:String
   }
}
 ],
project:[{
   _id:{
      type:String,
      unique:true
   },
   sentRequest:[{
      _id:{type: String},
      username: {type: String}
      }],
   requestid: {
      type:String
      
      }
   
   }
]

});
const user=mongoose.model("user",SignupSchema);
module.exports=user;