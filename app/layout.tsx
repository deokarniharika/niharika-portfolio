import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProvider from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata = {
  title: 'Niharika Deokar | Data Science Portfolio',
  description: 'Data Science professional specializing in Machine Learning, Statistical Analysis, and Sustainable Technology. MSc Data Science student at University of Bristol.',
  keywords: ['Data Science', 'Machine Learning', 'Statistical Analysis', 'Python', 'Sustainability', 'University of Bristol'],
  authors: [{ name: 'Niharika Deokar' }],
  creator: 'Niharika Deokar',
  openGraph: {
    title: 'Niharika Deokar | Data Science Portfolio',
    description: 'Data Science professional specializing in Machine Learning, Statistical Analysis, and Sustainable Technology.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}