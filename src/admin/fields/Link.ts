import type { Field } from 'payload'

export const LinkField: Field = {
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
}
