import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv";
import bookingcardRoute from "./route/bookingcard.route.js"
import ulogindataRoute from  "./route/ulogindata.route.js"
import cors from "cors"

const app = express()

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI

//connect to mongoDB
try {
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });
  console.log("connected to mongoDB");
} catch (error) {
  console.log("Error : ",error)
}

app.use("/bookingcard",bookingcardRoute)
app.use("/ulogindata",ulogindataRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})