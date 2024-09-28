const mongoose = require("mongoose")

const DB = "mongodb+srv://alekarchetana:Chetana12345@cluster0.lk7tn.mongodb.net/Authusers?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})