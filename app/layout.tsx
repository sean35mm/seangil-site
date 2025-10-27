import Link from 'next/link';
import './globals.css';
import { Nunito_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import { ModeToggle } from '@/components/mode-toggle';

const font = Nunito_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Sean Gil',
  description: "Sean Gil's personal website and blog",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white ${font.className}`}
      >
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <div className='max-w-2xl mx-auto py-10 px-4'>
            <header>
              <div className='flex items-center justify-between'>
                <ModeToggle />
                <nav className='ml-auto text-sm font-medium space-x-6'>
                  <Link href='/'>Home</Link>
                  <Link href='/blog'>Blog</Link>
                </nav>
              </div>
            </header>
            <main className='flex justify-center items-center mt-10'>
              {children}
            </main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
