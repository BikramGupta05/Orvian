import mongoose from "mongoose";
const bookingcardSchema=mongoose.Schema({
  name:String,
  price:Number,
  category:String,
  image:String,
  title:String
})
const BookingCard=mongoose.model("BookingCard",bookingcardSchema);
export default BookingCard;