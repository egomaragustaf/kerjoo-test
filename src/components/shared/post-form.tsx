"use client";

import { useAddPostMutation } from "@/store/postApi";
import { SubmitHandler, useForm } from "react-hook-form";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormValues = {
  title: string;
  body: string;
};

export function AddPostForm() {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [addPost, { isLoading, error, isSuccess }] = useAddPostMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await addPost(data);
    if (isSuccess) {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label>Title</Label>
        <Input {...register("title", { required: true })} />
      </div>
      <div>
        <Label>Body</Label>
        <Textarea {...register("body", { required: true })} />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit"}
      </button>
      {error && <p>Oh no, there was an error!</p>}
    </form>
  );
}
