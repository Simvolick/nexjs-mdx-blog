import '../../styles/globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import EmailForm from '../components/EmailForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '🌟KlimY Blog🔥',
  description: 'A modern Next.js MDX blog',
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