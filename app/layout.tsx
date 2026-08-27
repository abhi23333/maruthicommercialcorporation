import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Archivo } from 'next/font/google'
import { Loader } from '@/components/loader'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
  weight: ['600', '700', '800', '900'],
})

const SITE_URL = 'https://maruthicommercial.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Maruthi Commercial Corporation | MCC',
    template: '%s | Maruthi Commercial Corporation',
  },
  description:
    'Maruthi Commercial Corporation (MCC) is a diversified commercial enterprise from Miryalaguda, Telangana — building trusted connections and moving opportunities across markets.',
  applicationName: 'Maruthi Commercial Corporation',
  generator: 'v0.app',
  keywords: [
    'Maruthi Commercial Corporation',
    'MCC',
    'Maruthi Commercial',
    'Miryalaguda',
    'Telangana',
    'commercial enterprise',
    'trading company',
    'business connections',
    'Kukkadapu Maruthi',
    'Kukkadapu Abhivadan',
  ],
  authors: [{ name: 'Maruthi Commercial Corporation' }],
  creator: 'Maruthi Commercial Corporation',
  publisher: 'Maruthi Commercial Corporation',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // To update the favicon after hosting, simply replace the files in /public
  // (icon.png / apple-icon) — no code change required.
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [{ url: '/icon.png' }],
    shortcut: ['/icon.png'],
  },
  openGraph: {
    title: 'Maruthi Commercial Corporation | MCC',
    description:
      'Building Connections. Moving Opportunities. A diversified commercial enterprise from Miryalaguda, Telangana.',
    url: SITE_URL,
    siteName: 'Maruthi Commercial Corporation',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/icon.png',
        width: 1024,
        height: 1024,
        alt: 'Maruthi Commercial Corporation logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Maruthi Commercial Corporation | MCC',
    description:
      'Building Connections. Moving Opportunities. A diversified commercial enterprise from Miryalaguda, Telangana.',
    images: ['/icon.png'],
  },
  category: 'business',
}

export const viewport: Viewport = {
  themeColor: '#E1251B',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Maruthi Commercial Corporation',
  alternateName: 'MCC',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  slogan: 'Building Connections. Moving Opportunities.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Miryalaguda',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-9490355713',
      contactType: 'customer service',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-9390221318',
      contactType: 'sales',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${archivo.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Loader />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
