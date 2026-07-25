import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { PageTransition } from "@/components/layout/PageTransition";
import { BackToTop } from "@/components/layout/BackToTop";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SkipToContent />
      <Header />
      <main id="main-content" className="min-h-[calc(100vh-4rem)]">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
