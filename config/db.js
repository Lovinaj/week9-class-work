const mongoose = require('mongoose');

async function dbconfig() {
    try{
        await mongoose.connect('mongodb+srv://user:user@cluster0.4h0t8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected')
    } catch (error) {
        console.log(error)
    };
};

module.exports = dbconfig;