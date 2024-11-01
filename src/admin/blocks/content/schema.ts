import type { Block } from 'payload'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import { RichTextField } from '@/admin/fields'

export const ContentBlock: Block = {
  slug: 'content',
  fields: [
    {
      name: 'columns',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'size',
          type: 'select',
          defaultValue: '1',
          required: true,
          options: [
            {
              value: '1',
              label: '1',
            },
            {
              value: '2',
              label: '2',
            },
            {
              value: '3',
              label: '3',
            },
            {
              value: '4',
              label: '4',
            },
            {
              value: '5',
              label: '5',
            },
            {
              value: '6',
              label: '6',
            },
            {
              value: '7',
              label: '7',
            },
            {
              value: '8',
              label: '8',
            },
            {
              value: '9',
              label: '9',
            },
            {
              value: '10',
              label: '10',
            },
            {
              value: '11',
              label: '11',
            },
            {
              value: '12',
              label: '12',
            },
          ],
        },
        {
          name: 'blocks',
          type: 'blocks',
          required: true,
          blocks: [
            {
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
            },
            {
              slug: "list",
              labels: {
                singular: "List",
                plural: "List",
              },
              fields: [
                {
                  name: "list",
                  type: "array",
                  label: "List",
                  required: true,
                  fields: [
                    {
                      name: "title",
                      type: "text",
                      label: "Title",
                      required: true,
                    },
                    ...RichTextField,
                  ],
                },
              ],
            },
            {
              slug: 'image',
              fields: [
                {
                  name: "mobileHidden",
                  type: "checkbox",
                  label: "Hide on Mobile",
                },
                {
                  name: 'image',
                  type: 'upload',
                  label: 'Image',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
            {
              slug: 'linkBlock',
              fields: [
                {
                  name: 'link',
                  label: 'Link',
                  type: 'group',
                  fields: [
                    {
                      name: 'linkType',
                      type: 'radio',
                      options: [
                        { label: 'Internal Link', value: 'internalLink' },
                        { label: 'External Link', value: 'externalLink' },
                      ],
                      defaultValue: 'externalLink',
                      required: true,
                    },
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'label',
                          label: 'Label',
                          type: 'text',
                          defaultValue: 'Default Label',
                          admin: {
                            width: '25%',
                          },
                        },
                        {
                          type: 'relationship',
                          label: 'URL',
                          name: 'internalLink',
                          maxDepth: 0,
                          hooks: {
                            beforeValidate: [
                              async ({ value, req }) => {
                                if (typeof value === 'number') {
                                  const pageData = await req.payload.findByID({
                                    id: value,
                                    collection: 'pages',
                                  })
                                  return pageData?.slug
                                }
                                return value
                              },
                            ],
                          },
                          relationTo: 'pages',
                          admin: {
                            description: 'Route for link',
                            condition: (_, siblingData) => siblingData.linkType === 'internalLink',
                          },
                        },
                        {
                          type: 'text',
                          label: 'URL',
                          name: 'externalLink',
                          admin: {
                            condition: (_, siblingData) => siblingData.linkType === 'externalLink',
                          },
                        },
                        {
                          name: 'url',
                          admin: {
                            hidden: true,
                          },
                          type: 'text',
                          hooks: {
                            beforeValidate: [
                              async ({ value, req, siblingData, ...rest }) => {
                                if (siblingData.linkType === 'internalLink') {
                                  const pageData = await req.payload.findByID({
                                    id: siblingData?.internalLink,
                                    collection: 'pages',
                                  })
                                  return pageData?.slug
                                }

                                if (siblingData.linkType === 'externalLink') {
                                  return siblingData.externalLink
                                }
                                return value
                              },
                            ],
                          },
                        },
                      ],
                    },
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'secondaryLabel',
                          label: 'Secondary Label',
                          type: 'text',
                          admin: {
                            width: '20%',
                          },
                        },
                        {
                          name: 'variant',
                          type: 'select',
                          defaultValue: 'none',
                          label: 'Variant',
                          admin: {
                            width: '25%',
                          },
                          options: [
                            {
                              label: 'Primary',
                              value: 'primary',
                            },
                            {
                              label: 'Secondary',
                              value: 'secondary',
                            },
                            {
                              label: 'None',
                              value: 'none',
                            },
                          ],
                        },
                        {
                          name: 'newTab',
                          label: 'New tab',
                          type: 'checkbox',
                          admin: {
                            width: '10%',
                            style: {
                              alignSelf: 'flex-end',
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              slug: 'tabs',
              labels: {
                singular: 'Tab',
                plural: 'Tabs',
              },
              fields: [
                {
                  name: 'secondLabel',
                  type: 'text',
                  label: 'Second Label',
                  defaultValue: 'Вартість:',
                },
                {
                  name: 'thirdLabel',
                  type: 'text',
                  label: 'Third label',
                  defaultValue: 'Тривалість процедури:',
                },
                {
                  name: 'list',
                  type: 'array',
                  label: 'Tabs',
                  required: true,
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'title',
                          type: 'text',
                          label: 'Title',
                          required: true,
                        },
                        {
                          name: 'price',
                          type: 'text',
                          label: 'Price',
                          required: true,
                        },
                        {
                          name: 'duration',
                          type: 'text',
                          label: 'Duration',
                          required: true,
                        },
                      ],
                    },
                    ...RichTextField,
                    {
                      label: 'Image',
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                    },
                  ],
                },
              ],
            },
            {
              slug: 'tiles',
              labels: {
                singular: 'Tile',
                plural: 'Tiles',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                  defaultValue: 'Переваги Курсу Барберів у Men\'s Hall',
                },
                {
                  name: 'list',
                  type: 'array',
                  label: 'Tiles',
                  required: true,
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Title',
                      required: true,
                    },
                    ...RichTextField,
                    {
                      label: 'Image',
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
