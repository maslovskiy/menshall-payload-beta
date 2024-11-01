import type { CollectionConfig } from 'payload'
import { BannerBlock, RichTextBlock, ImageBlock, GlobalBlock, TableBlock, ContentBlock } from '../blocks'

export const PagesCollection: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'slug',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      required: true,
      blocks: [ContentBlock, BannerBlock, RichTextBlock, ImageBlock, GlobalBlock, TableBlock],
    },
  ],
}
