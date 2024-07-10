"use client";

import { useGetPostByIdQuery } from "@/store/postApi";

export default function Page({ params }: { params: { id: string } }) {
  const { data, isFetching, error, isLoading } = useGetPostByIdQuery(
    Number(params.id)
  );

  if (isLoading || isFetching) return <div>Loading...</div>;
  if (error) return <div>Oh no, there was an error</div>;

  return (
    <main>
      <h1>Post {params.id}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
