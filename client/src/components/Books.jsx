import React from "react";
import { Link } from "react-router-dom";
import { BookAPI } from "../global/BookAPI";
import { Info } from "./Info";

export const Books = () => {
    const { data } = BookAPI.useFetchAllQuery();

    return (
        <React.Fragment>
            <button>
                <Link to="/books/add">New Book</Link>
            </button>
            {data?.map((book) => (
                <Info key={book._id} book={book} />
            ))}
        </React.Fragment>
    );
};




