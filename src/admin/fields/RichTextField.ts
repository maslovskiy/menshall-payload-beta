import type { Field } from 'payload'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'

export const RichTextField: Array<Field> = [
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
]

