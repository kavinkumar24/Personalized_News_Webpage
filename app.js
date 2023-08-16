const express = require("express")
const collection = require("./mongo")
const cors = require('cors');



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/", cors(), async (req, res) => {
    try {
      const allUser = await collection.find({}).exec();
      res.send({ status: "ok", data: allUser });
    } catch (error) {
      console.log(error);
    }
  });
  
app.post("/",async(req,res)=>{
    const {name} = req.body
    const {email} =req.body
    const {password} =req.body
    const{mobile} = req.body
    const{gender} = req.body
    const{role} = req.body
    const{age} = req.body

    const data = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      gender: gender,
      role: role,
      age:age
    }
    

    await collection.insertMany([data])
})

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await collection.findOne({ email, password });
    if (user) {
      res.json({ success: true, user: { email: user.email, name: user.name, mobile:user.mobile, gender:user.gender, role:user.role,age:user.age} });
    } else {
      res.send({ success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
});

app.put("/update", async (req, res) => {
  const { name, email, mobile, gender, role,age } = req.body;
  try {
    const updatedUser = await collection.findOneAndUpdate(
      { email },
      { $set: { name,mobile, gender, role,age } },
      { new: true }
    );
    if (updatedUser) {
      res.json({ success: true, user: updatedUser });
    } else {
      res.send({ success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
});

app.listen(8000,()=>{
    console.log("port connected")
})


