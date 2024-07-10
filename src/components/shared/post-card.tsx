import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Post } from "@/types/post";

export function CardPost({ post }: { post: Post }) {
  return (
    <Card className="w-full h-52 p-4 space-y-4 group">
      <CardTitle className="px-6 group-hover:text-muted-foreground">
        {post.title}
      </CardTitle>
      <CardContent>{post.body}</CardContent>
    </Card>
  );
}
