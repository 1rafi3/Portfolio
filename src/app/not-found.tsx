import Link from "next/link";
import { Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-7xl font-bold tracking-tight text-primary">404</h1>
      <p className="text-lg text-muted-foreground">Page not found</p>
      <p className="max-w-md text-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button render={<Link href="/" />}>
        <Home className="h-4 w-4" />
        Go Home
      </Button>
    </main>
  );
}
