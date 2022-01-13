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

export const UpdateBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, first, last, age, info } = req.body;
        await Books.findByIdAndUpdate(id, {
            title, first, last, age, info
        })
        .then(() => res.status(200)
        .json("The Book was Updated!"));
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const DeleteBook = async (req, res, next) => {
    try {
        await Books.findByIdAndDelete(req.params.id)
        .then(() => res.status(200)
        .json("The Book was Deleted!"))
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};




