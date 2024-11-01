import { Block } from 'payload'
import { LinkField, RichTextField } from '../../fields'

export const BannerBlock: Block = {
  slug: 'banner',
  fields: [
    {
      name: 'Title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    ...RichTextField,
    {
      name: 'backgorund',
      type: 'upload',
      label: 'Background',
      relationTo: 'media',
      required: true,
    },
    LinkField,
  ],
}
