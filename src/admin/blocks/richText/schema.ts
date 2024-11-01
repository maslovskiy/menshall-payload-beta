import { Block } from 'payload'
import { RichTextField } from '../../fields'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'

export const RichTextBlock: Block = {
  slug: 'richText',
  fields: [
    {
      name: 'content',
      type: 'richText',
      maxDepth: 0,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML('content', { name: 'content_html' }),
  ],
}
