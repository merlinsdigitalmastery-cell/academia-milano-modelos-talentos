import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap'
})

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Milano Talento | Agencia Internacional de Modelos',
  description: 'Academia y agencia internacional de modelos. Formación profesional desde los 7 años. Conectamos talentos con marcas globales.',
  keywords: ['modelos', 'agencia de modelos', 'Milano Talento', 'academia de modelos', 'casting', 'pasarela', 'Chile'],
  authors: [{ name: 'Milano Talento' }],
  openGraph: {
    title: 'Milano Talento | Agencia Internacional de Modelos',
    description: 'Academia y agencia internacional de modelos. Formación profesional desde los 7 años.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased bg-black text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
