import type { Block } from 'payload'

export const TableBlock: Block = {
  slug: 'tables',
  labels: {
    singular: 'Table',
    plural: 'Tables',
  },
  fields: [
    {
      name: 'general',
      type: 'group',
      label: 'General',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true
        },
        {
          name: 'secondColumnLabel',
          type: 'text',
          label: 'Second Column Label',
          required: true
        },
        {
          name: 'thirdColumnLabel',
          type: 'text',
          label: 'Third Column Label',
          required: true
        },
      ],
    },
    {
      label: 'Tables',
      name: 'list',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'table',
          type: 'group',
          label: 'Table',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              required: true
            },
            {
              name: 'rows',
              type: 'array',
              labels: {
                singular: 'Row',
                plural: 'Rows',
              },
              fields: [
                {
                  name: 'row',
                  type: 'group',
                  label: 'Row',
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'title',
                          type: 'text',
                          label: 'Title',
                          required: true,
                          admin: {
                            width: '33%',
                          },
                        },
                        {
                          name: 'price',
                          type: 'text',
                          label: 'Price',
                          required: true,
                          admin: {
                            width: '33%',
                          },
                        },
                        {
                          name: 'duration',
                          type: 'text',
                          label: 'Duration',
                          required: true,
                          admin: {
                            width: '33%',
                          },
                        },
                      ],
                    },
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'description',
                          type: 'text',
                          label: 'Description',
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
    },
  ],
}
