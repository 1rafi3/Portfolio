interface IArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: IArticlePageProps) {
  const { slug } = await params;
  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold">Article: {slug}</h1>
    </main>
  );
}
