interface IArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: IArticlePageProps) {
  const { slug } = await params;
  return <main />;
}
