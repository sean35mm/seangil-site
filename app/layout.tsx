import './globals.css';
import { JetBrains_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';

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
          <a href='#main-content' className='skip-link'>
            Skip to content
          </a>
          <SiteHeader />
          <main id='main-content' className='max-w-4xl w-full mx-auto px-5 sm:px-8 py-12 sm:py-16 flex-1'>
            {children}
          </main>
          <SiteFooter />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
