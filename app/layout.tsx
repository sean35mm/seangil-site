import Link from 'next/link'
import './globals.css'
import { Open_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@/components/analytics'
import { ModeToggle } from '@/components/mode-toggle'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata = {
	title: 'Sean Gil',
	description: "Sean Gil's personal website and blog",
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en'>
			<body
				className={`antialiased min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-50 ${font.className}`}
			>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					<div className='max-w-2xl mx-auto py-10 px-4'>
						<header>
							<div className='flex items-center justify-between'>
								<ModeToggle />
								<nav className='ml-auto text-sm font-medium space-x-6'>
									<Link href='/'>Home</Link>
									<Link href='/about'>About</Link>
									<Link href='/blog'>Blog</Link>
								</nav>
							</div>
						</header>
						<main>{children}</main>
					</div>
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	)
}
