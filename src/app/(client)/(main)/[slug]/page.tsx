//@ts-nocheck
import { cache } from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Page as PageProps } from '@/payload-types'
import { PaginatedDocs } from 'payload'
import { Banner, Global } from '@/sections'
import Table from '@/sections/Table'
import Content from '@/sections/Content'

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const parsedSlug = decodeURIComponent(slug)

  const payload = await getPayloadHMR({ config })

  const result = await payload.find({
    collection: 'pages' as 'pages',
    limit: 1,
    where: {
      slug: {
        equals: parsedSlug,
      },
    },
  })

  return result.docs?.[0] || null
})

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config })
  const pages: PaginatedDocs<PageProps> = await payload.find({
    collection: 'pages' as 'pages',
  })

  return pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'index'
    })
    .map(({ slug }) => slug)
}

export default async function Page({ params }) {
  let page: PageProps | null

  page = await queryPageBySlug({ slug: params.slug })

  if (!page) {
    return notFound()
  }

  return (
    <>
      {
        page.layout.map((block) => {
          if (block.blockType === 'banner') {
            return <Banner block={block} key={block.id} />
          }

          if (block.blockType === 'global') {
            return <Global global={block.global!} key={block.id} slug={params.slug} />
          }

          if (block.blockType === 'tables') {
            //@ts-ignore
            return <Table block={block} key={block.id} />
          }

          if (block.blockType === 'content') {
            return <Content block={block} key={block.id} />
          }
        })
      }
    </>
  )
}
