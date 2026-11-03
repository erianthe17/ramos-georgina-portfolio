"use client";

import { ErrorFallback } from "@/components/common/ErrorFallback";
import "./globals.css";

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ErrorFallback error={error} retry={retry} />
      </body>
    </html>
  );
}
