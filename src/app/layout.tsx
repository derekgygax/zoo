import type { Metadata } from "next";

import { Header } from "@/src/app/_components/header/Header";
import { ClerkProvider } from "@clerk/nextjs";

// global base styles to whole webiste
import '@/src/styles/_base.scss'

export const metadata: Metadata = {
  title: "Zoo",
  description: "This is a Zoo",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>
          <Header />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
