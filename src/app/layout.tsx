import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'LC STEM Showcase | Livingstone College',
    template: '%s | LC STEM',
  },
  description: 'Explore Livingstone College STEM student portfolios, independent lab research, hackathon medals, and academic concentrations in CIS, Biology, Mathematics, and Business.',
  keywords: ['LC STEM', 'Livingstone College STEM', 'Computer Information Systems', 'Biology Pre-Med', 'Mathematics Data Science', 'HBCU STEM', 'Undergraduate Research', 'Student Hackathon Portfolio'],
  authors: [{ name: 'Livingstone College STEM Department' }],
  metadataBase: new URL('https://lc-stem.website'),
  openGraph: {
    title: 'LC STEM Showcase | Livingstone College',
    description: 'Empowering student technical innovation, NIH oncology lab research, and championship hackathon achievements at Livingstone College STEM.',
    url: 'https://lc-stem.website',
    siteName: 'Livingstone College STEM Showcase',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Livingstone College STEM Showcase - Social Link Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LC STEM Showcase | Livingstone College',
    description: 'Empowering student technical innovation, NIH oncology lab research, and championship hackathon achievements.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
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
