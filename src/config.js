import { config } from "dotenv"
config()

export default{
    mongodbURL: process.env.MONGODB_URI || "mongodb+srv://AstroX:AstroX@astro-x.jpi1jjd.mongodb.net/?retryWrites=true&w=majority",
}