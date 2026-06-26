import './globals.css';
import { JetBrains_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';

const font = JetBrains_Mono({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Sean Gil',
  description: "Sean Gil's personal website and blog",
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`antialiased min-h-screen flex flex-col ${font.className}`}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <main className='max-w-3xl w-full mx-auto px-4 py-10 flex-1'>
            {children}
          </main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
