import type { Field } from 'payload'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'

export const GlobalField: Array<Field> = [
  {
    name: 'global',
    type: 'select',
    options: [
      {
        label: 'Reviews',
        value: 'reviews'
      }
    ]
  }
]

