import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://book5-restapi.herokuapp.com/api";
export const BookAPI = createApi({
    reducerPath: "BookAPI",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    tagTypes: ["Books"],
    endpoints: (builder) => ({
        fetchAll: builder.query({
            query: () => "/",
            providesTags: (result) => result ?
            [...result.map(({ _id }) =>
                ({ type: "Books", _id })),
                { type: "Books", id: "LIST" },
            ] : [{ type: "Books", id: "LIST" }],
        }),
        getOne: builder.query({
            query: (_id) => `/${_id}`,
            providesTags: (result, error, _id) =>
                [{ type: "Books", _id }],
        }),
        create: builder.mutation({
            query: (book) => {
                return {
                    url: `/`,
                    method: "POST",
                    body: book
                }
            },
            invalidatesTags: [{ type: "Books", id: "LIST" }],
        }),
        update: builder.mutation({
            query: (_id, ...book) => {
                return {
                    url: `/${_id}`,
                    method: "PUT",
                    body: book
                }
            },
            invalidatesTags: [{ type: "Books", id: "LIST" }],
        }),
        delete: builder.mutation({
            query: (_id) => {
                return {
                    url: `/${_id}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: [{ type: "Books", id: "LIST" }],
        })
    }),
});



