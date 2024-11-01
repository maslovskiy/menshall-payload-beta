import React from 'react'
import { Footer, Header } from '@/sections'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="grid-container grid-content-full">{children}</main>
      <Footer />
    </>
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
