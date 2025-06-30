import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Niharika Deokar | Portfolio',
  description: 'Developer | Builder | Explorer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-black text-black dark:text-white`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}