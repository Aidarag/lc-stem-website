import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'LC STEM Showcase',
    template: '%s | LC STEM',
  },
  description: 'Welcome to the LC STEM Showcase, a student-led digital portfolio celebrating the technical achievements, research, hackathons, and innovations of the LC STEM student community.',
  keywords: ['LC STEM', 'STEM', 'Computer Information Systems', 'Biology', 'Mathematics', 'HBCU STEM', 'Undergraduate Research', 'Student Portfolio'],
  authors: [{ name: 'LC STEM Student Community' }],
  metadataBase: new URL('https://lc-stem.website'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="flex min-h-full flex-col bg-background text-foreground font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
