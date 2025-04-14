import BookingCard from "../model/bookingcard.model.js";

export const getBookingCard =async(req,res)=>{
  try {
    const book=await BookingCard.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error: ",error);
    res.status(500).json(error);
  }
};