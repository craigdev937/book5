import express from "express";
import { CreateBook, FetchAllBooks, 
    GetOneBook } from "../controllers/bookCon.js";

export const bookRt = express.Router();
    bookRt.post("/", CreateBook);
    bookRt.get("/", FetchAllBooks);
    bookRt.get("/:id", GetOneBook);



