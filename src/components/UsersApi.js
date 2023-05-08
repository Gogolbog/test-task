// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const usersApi = createApi({
//   reducerPath: "users",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://6457a2680c15cb14820d309d.mockapi.io",
//   }),
//   endpoints: (builder) => ({
//     getUsers: builder.query({
//       query: ({ page = 1, limit = 3 }) =>
//         `Users?limit=${limit}&offset=${(page - 1) * limit}`,
//     }),
//   }),
// });

// export const { useGetUsersQuery } = usersApi;
