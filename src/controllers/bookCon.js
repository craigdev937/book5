import { Books } from "../models/Books.js";

export const CreateBook = async (req, res, next) => {
    try {
        const book = new Books({
            title: req.body.title,
            first: req.body.first,
            last: req.body.last,
            age: req.body.age,
            info: req.body.info
        });
        await book.save()
        .then((book) => res.status(200).json(book));
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const FetchAllBooks = async (req, res, next) => {
    try {
        await Books.find()
        .then((books) => res.json(books));
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const GetOneBook = async (req, res, next) => {
    try {
        await Books.findById(req.params.id)
        .then((book) => res.status(200).json(book));
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};






