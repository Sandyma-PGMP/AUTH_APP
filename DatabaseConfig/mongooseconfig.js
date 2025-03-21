const mongoose = require('mongoose');
const cowsay = require("cowsay");

// Connection URi
const uri = process.env.MONGO_URI
mongoose.connect(uri)
.then((response) => {
    if(response) {
        console.log(cowsay.say({
                    text : "Connection to Atlas database is successful",
                    e : "oO",
                    T : "U "
                }))
    }
}).catch((err) => {
    console.log(err)
})