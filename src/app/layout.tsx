import '../../styles/globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import EmailForm from '../components/EmailForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'KlimY Blog - Productivity, Health & Personal Development',
    template: '%s | KlimY Blog'
  },
  description: 'Discover insights on productivity, health, wellness, and personal development. Expert advice on walking benefits, focus techniques, and building better habits.',
  keywords: ['productivity', 'health', 'wellness', 'personal development', 'walking', 'habits', 'focus', 'lifestyle'],
  authors: [{ name: 'KlimY' }],
  creator: 'KlimY',
  publisher: 'KlimY Blog',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://klimy.co',
    title: 'KlimY Blog - Productivity, Health & Personal Development',
    description: 'Discover insights on productivity, health, wellness, and personal development. Expert advice on walking benefits, focus techniques, and building better habits.',
    siteName: 'KlimY Blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KlimY Blog - Productivity, Health & Personal Development',
    description: 'Discover insights on productivity, health, wellness, and personal development. Expert advice on walking benefits, focus techniques, and building better habits.',
  },
  verification: {
    google: 'google-site-verification-code', // Replace with your actual verification code
  },
  alternates: {
    canonical: 'https://klimy.co',
  },
  icons: {
    icon: [
      { url: '/icon', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://klimy.co" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="flex-grow">
            {children}
            <EmailForm />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 