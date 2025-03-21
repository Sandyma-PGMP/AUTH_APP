const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
require("./DatabaseConfig/mongooseconfig");
const authRoutes = require("./Routes/authroutes");
const cors = require("cors");

const cowsay = require("cowsay");




const configs = {
    hostName: process.env.HOSTNAME,
    port: process.env.PORT
};


//Create Server
const HTTP_SERVER = express();
HTTP_SERVER.use(express.json());
HTTP_SERVER.use(cors());

//Inject Resources
HTTP_SERVER.use("/auth", authRoutes);




try {
    HTTP_SERVER.listen(configs.port, configs.hostName, function () {
       console.log(`http://${configs.hostName}:${configs.port}/`)
        console.log(cowsay.say({
            text : "Server started",
            e : "oO",
            T : "U "
        }))
    });
} catch (error) {
    console.log(cowsay.say({
        text : "Sorry issue starting the server",
        e : "oO",
        T : "U "
    }))
}

HTTP_SERVER.get("/", function (request, response) {
    return response.status(201).json({
        message: "Api is working"
    })
})


