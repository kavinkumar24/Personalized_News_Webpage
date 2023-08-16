const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/NewsDB",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("connected")
})
.catch(()=>{
    console.log('failed')
})

const newSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
    // date:{
    //     type:Date,
    //     required:true,
    //     timestamps: true
    // }

})

const collection = mongoose.model("posts",newSchema)
module.exports=collection
