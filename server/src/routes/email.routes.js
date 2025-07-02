import express from "express";
import { Emailr , getRecentEmails } from "../controllers/Email.controller.js";

const route = express.Router();

route.post("/submitemail" , Emailr )

route.get("/emails", getRecentEmails)
export default route ;
