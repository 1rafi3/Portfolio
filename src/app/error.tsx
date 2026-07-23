"use client";

import { AlertCircle, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
        <AlertCircle className="h-8 w-8 text-destructive" />
      </div>
      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        Something went wrong
      </h1>
      <p className="max-w-md text-sm text-muted-foreground">
        An unexpected error occurred.
        {process.env.NODE_ENV === "development" && error.message && (
          <span className="mt-2 block rounded-md bg-muted p-3 font-mono text-xs">
            {error.message}
          </span>
        )}
      </p>
      <Button onClick={reset}>
        <RefreshCw className="h-4 w-4" />
        Try Again
      </Button>
    </main>
  );
}
