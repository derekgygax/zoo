import type { Metadata } from "next";


// PREEMPTIVE OPTIMIZATION IS THE ROOT OF EVIL

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
        {children}
      </body>
    </html>
  );
}
