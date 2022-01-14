import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Books } from "../components/Books";
import { Add } from "../containers/Add";
import { Edit } from "../containers/Edit";

export const Main = () => (
    <BrowserRouter>
        <React.Fragment>
            <Routes>
                <Route path="*" element={<Navigate to="/books" />} />
                <Route path="/books" element={<Books />} />
                <Route path="/books/add" element={<Add />} />
                <Route path="/books/edit/:id" element={<Edit />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);





