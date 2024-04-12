import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import "./globals.css";
import { ExampleProvider } from './ExampleContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ExampleProvider>
        <Nav />
        {children}
        <Footer />
        </ExampleProvider>
      </body>
    </html>
  );
}