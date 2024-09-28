const express = require("express")
const app = express();
const router = require("./routes/router");
const cors = require("cors");
require("./db/conn");
const port = 8009;

// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// })
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from localhost:3000
    methods: ['GET', 'POST'],        // Allowed methods
    credentials: true                // Allow cookies if needed
}));
// app.post('/register', (req, res) => {
//     // Your registration logic
//     res.json({ success: true });
// });
app.use(router);
app.listen(port,()=>{
    console.log(`server start at port no : ${port}`)
})