import express from "express";
import { getBookingCard } from "../controller/bookingcard.controller.js";

const router=express.Router();

router.get("/",getBookingCard);

export default router;