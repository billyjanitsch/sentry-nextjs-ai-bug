import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sentry Next.js AI SDK bug",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
