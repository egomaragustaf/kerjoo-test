import { Post } from "@/types/post";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPost: builder.query<
      Post[],
      { page: number; search: string | undefined }
    >({
      query: ({ page, search }) => {
        let queryStr = `/posts?_limit=10&_page=${page}`;
        if (search) {
          queryStr += `&title_like=${search}`;
        }
        return queryStr;
      },
    }),
    getPostById: builder.query<Post, number>({
      query: (id) => `/posts/${id}`,
    }),
    addPost: builder.mutation<Post, Partial<Post>>({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});

export const { useGetPostQuery, useGetPostByIdQuery, useAddPostMutation } =
  postApi;
