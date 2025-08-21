interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  
  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>Blog post content for {slug} goes here.</p>
    </div>
  );
}