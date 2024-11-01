import { Block } from 'payload'

export const ImageBlock: Block = {
  slug: 'image',
  fields: [
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'media',
      required: true,
    },
  ],
}
