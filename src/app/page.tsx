"use client";

import { useState } from "react";
import Link from "next/link";

import { CardPost } from "@/components/shared/post-card";
import { useGetPostQuery } from "@/store/postApi";
import { AddPostForm } from "@/components/shared/post-form";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, isFetching, error, isLoading } = useGetPostQuery({ page });

  console.log(data);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : 1));
  };

  if (isLoading || isFetching) return <div>Loading...</div>;
  if (error) return <div>Oh no, there was an error</div>;

  return (
    <div className="mx-auto max-w-7xl min-h-screen space-y-4">
      <ul className="grid grid-cols-2 gap-4">
        {data?.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <CardPost post={post} />
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-4 items-center justify-end">
        <Button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </Button>
        <span className="text-lg font-bold">{page}</span>
        <Button onClick={handleNextPage}>Next</Button>
      </div>
      {/* <AddPostForm /> */}
    </div>
  );
}
