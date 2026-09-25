import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Nanjing Liyang Biotech Co., Ltd. | Chemical Raw Materials, APIs & Cosmetic Actives',
  description: 'Global manufacturer and exporter of high-purity pharmaceutical intermediates, active cosmetic ingredients, and fine chemical raw materials based in Nanjing, China.',
  keywords: 'Liyang Biotech, Nanjing chemical supplier, pharmaceutical intermediates, cosmetic raw materials, Ectoine, Ergothioneine, GABA, fine chemicals exporter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-brand-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
