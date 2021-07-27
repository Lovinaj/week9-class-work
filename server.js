const express = require("express");
const userRoutes = require("./routes/userRoutes")
const app = express();
const port = 3000;
const db = (mongodb+srv://user:<password>@cluster0.4h0t8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority);

app.get("/", (req, res) => {
    res.send("welcome to my api");
});

// using body-parser
app.use(express.json());

//mounting
app.use("/api/user", userRoutes);

app.listen(port, ()=>{
    console.log(`server listening on ${port}`);
});