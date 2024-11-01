import type { GlobalConfig } from 'payload'
import { LinkField } from '../fields'

export const HeaderGlobal: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'navItems',
      type: 'array',
      required: true,
      maxRows: 6,
      fields: [
        LinkField,
        {
          name: 'hasSubItems',
          label: 'Add SubItems',
          type: 'checkbox',
        },
        {
          name: 'subNavItems',
          type: 'array',
          required: true,
          maxRows: 3,
          admin: {
            condition: (_, { hasSubItems }) => Boolean(hasSubItems),
          },
          fields: [LinkField],
        },
      ],
    },
  ],
}
