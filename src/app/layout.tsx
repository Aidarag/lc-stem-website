import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }
  return 'https://public-stemwebsite.vercel.app';
};

const siteUrl = getSiteUrl();
const ogImageUrl = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  title: {
    default: 'LC STEM Showcase | Livingstone College',
    template: '%s | LC STEM',
  },
  description: 'Explore Livingstone College STEM student portfolios, independent lab research, hackathon medals, and academic concentrations in CIS, Biology, Mathematics, and Business.',
  keywords: ['LC STEM', 'Livingstone College STEM', 'Computer Information Systems', 'Biology Pre-Med', 'Mathematics Data Science', 'HBCU STEM', 'Undergraduate Research', 'Student Hackathon Portfolio'],
  authors: [{ name: 'Livingstone College STEM Department' }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'LC STEM Showcase | Livingstone College',
    description: 'Empowering student technical innovation, NIH oncology lab research, and championship hackathon achievements at Livingstone College STEM.',
    url: siteUrl,
    siteName: 'Livingstone College STEM Showcase',
    images: [
      {
        url: ogImageUrl,
        secureUrl: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Livingstone College STEM Showcase - Social Link Preview',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LC STEM Showcase | Livingstone College',
    description: 'Empowering student technical innovation, NIH oncology lab research, and championship hackathon achievements at Livingstone College STEM.',
    images: [ogImageUrl],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
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
      <head>
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
