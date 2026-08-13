import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Livingstone College STEM Showcase',
    template: '%s | Livingstone College STEM',
  },
  description: 'Welcome to the official Livingstone College STEM Showcase. Celebrate the achievements, research, hackathons, and innovations of students and faculty at Livingstone College.',
  keywords: ['Livingstone College', 'STEM', 'Computer Information Systems', 'Biology', 'Mathematics', 'HBCU STEM', 'Undergraduate Research'],
  authors: [{ name: 'Livingstone College STEM Department' }],
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
