import React from 'react'

import { Montserrat } from 'next/font/google'
import "../../css/app.scss";
import { Footer, Header } from '@/sections'

const font = Montserrat({
  subsets: ['cyrillic'],
  weight: ['100', '300', '400'],
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={font.className}
      style={{
        //@ts-ignore
        '--font-montserrat': `${font.style.fontFamily}`,
      }}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="grid-container">
        <div id="portal" />
        {children}
        {/*<FloatButton />*/}
      </body>
    </html>
  )
}

// export const metadata: Metadata = {
//   metadataBase: new URL(
//     process.env.NEXT_PUBLIC_API_URL || "https://payloadcms.com",
//   ),
//   twitter: {
//     card: "summary_large_image",
//     creator: "@maslovskyy",
//   },
//   openGraph: mergeOpenGraph(),
// };
