import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '../components/ThemeProvider';
import { Providers } from './providers';
import AdminPanel from '@/components/admin/AdminPanel';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dharmendra Ahirwar | Software Engineer',
  description: 'Portfolio website of Dharmendra Ahirwar, a passionate Software Engineer specializing in web development and modern application architecture.',
  keywords: ['Software Engineer', 'Web Development', 'React', 'Next.js', 'TypeScript', 'Dharmendra Ahirwar', 'kilvish25'],
  authors: [{ name: 'Dharmendra Ahirwar', url: 'https://github.com/kilvish25' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ThemeProvider>
            {children}
            <AdminPanel />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
} 