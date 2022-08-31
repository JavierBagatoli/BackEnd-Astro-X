import mongoose from "mongoose"
import config from "./config"
//mongodb://localhost/astro-x
(async() => {
    const db = await mongoose.connect(config.mongodbURL ,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    console.log("Base de datos conectada")
})();