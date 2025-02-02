import type { Metadata } from "next";

import { Header } from "@/app/_components/header/Header";

// global base styles to whole webiste
import '@/styles/_base.scss'

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
