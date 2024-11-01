import { Block } from 'payload'

export const GlobalBlock: Block = {
  slug: 'global',
  fields: [
    {
      name: 'global',
      type: 'select',
      options: [
        {
          label: 'Reviews',
          value: 'reviews'
        },
        {
          label: 'Services',
          value: 'services'
        },
        {
          label: 'Contacts',
          value: 'contacts'
        },
        {
          label: 'Teachers',
          value: 'teachers'
        },
        {
          label: 'Program',
          value: 'program'
        },
        {
          label: 'Barbers',
          value: 'barbers'
        }
      ]
    }
  ],
}
