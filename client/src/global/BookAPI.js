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
        })
    }),
});



