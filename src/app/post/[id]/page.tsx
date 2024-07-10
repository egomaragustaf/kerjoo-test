"use client";

import { useGetPostByIdQuery } from "@/store/postApi";

export default function Page({ params }: { params: { id: string } }) {
  const { data, isFetching, error, isLoading } = useGetPostByIdQuery(
    Number(params.id)
  );

  if (isLoading || isFetching) return <div>Loading...</div>;
  if (error) return <div>Oh no, there was an error</div>;

  return (
    <main className="mx-auto max-w-7xl min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">Title: {data?.title}</h1>
      <h2 className="text-xl">Article</h2>
      <p className="text-xl">{data?.body}</p>
    </main>
  );
}
