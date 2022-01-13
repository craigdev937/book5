import express from "express";
import { HomeIndex } from "../controllers/bookCon.js";

export const bookRt = express.Router();
    bookRt.get("/", HomeIndex);



