const express = require("express");
const userRoutes = require("./routes/userRoutes");
const db = require('./config/db');
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("welcome to my api");
});

// config dotenv for environment variable
//dotenv.config({path: './config.env'})

db();

// using body-parser
app.use(express.json());

//mounting
app.use("/api/user", userRoutes);

app.listen(port, ()=>{
    console.log(`server listening on ${port}`);
});