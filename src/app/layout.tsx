import '../../styles/globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import EmailForm from '../components/EmailForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.klimy.co'),
  title: {
    default: 'Klim Yadrintsev Blog - Ecommerce Consulting for your DTC fashion brand',
    template: '%s | Klim Yadrintsev Blog'
  },
  description: 'Discover insights on ecommerce consulting for your DTC fashion brand.',
  keywords: ['ecommerce', 'consulting', 'dtc', 'fashion', 'brand', 'strategy', 'growth', 'marketing', 'operations'],
  authors: [{ name: 'Klim Yadrintsev' }],
  creator: 'Klim Yadrintsev',
  publisher: 'Klim Yadrintsev Blog',
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
    url: 'https://www.klimy.co',
    title: 'Klim Yadrintsev Blog - Ecommerce Consulting for your DTC fashion brand',
    description: 'Discover insights on ecommerce consulting for your DTC fashion brand.',
    siteName: 'Klim Yadrintsev Blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Klim Yadrintsev Blog - Ecommerce Consulting for your DTC fashion brand',
    description: 'Discover insights on ecommerce consulting for your DTC fashion brand.',
  },
  verification: {
    google: 'google-site-verification-code', // Replace with your actual verification code
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