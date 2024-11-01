import type { GlobalConfig } from 'payload'
import { LinkField } from '../fields'

export const ContactsGlobal: GlobalConfig = {
  slug: 'contacts',
  access: {
    read: () => true,
  },
  fields: [
    {
      label: 'General',
      name: 'general',
      type: 'group',
      fields: [
        {
          label: 'Title',
          name: 'title',
          type: 'text',
        },
        {
          label: 'Secondary Title',
          name: 'secondaryTitle',
          type: 'text',
        },
        LinkField,
        {
          label: 'Marker',
          name: 'marker',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      label: 'Emails',
      name: 'emailGroup',
      type: 'group',
      fields: [
        {
          label: 'Title',
          name: 'emailTitle',
          type: 'text',
        },
        {
          name: 'emails',
          type: 'array',
          maxRows: 2,
          fields: [LinkField],
        },
      ],
    },
    {
      label: false,
      name: 'addressGroup',
      type: 'group',
      fields: [
        {
          label: 'Addresses',
          name: 'addresses',
          type: 'array',
          maxRows: 3,
          required: true,
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'location',
                  type: 'text',
                  required: true,
                  admin: {
                    width: '20%',
                  },
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  admin: {
                    width: '20%',
                  },
                },
                {
                  label: 'Image',
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  // admin: {
                  //   width: "60%",
                  // },
                },
                {
                  name: 'phonet',
                  type: 'text',
                  label: 'Phonet ClassName',
                },
              ],
            },
            {
              name: 'links',
              type: 'array',
              required: true,
              fields: [LinkField],
            },
          ],
        },
      ],
    },
    {
      label: false,
      name: 'socialsGroup',
      type: 'group',
      fields: [
        {
          name: 'socials',
          type: 'array',
          fields: [
            {
              label: 'Name',
              name: 'name',
              type: 'select',
              defaultValue: 'default',
              required: true,
              options: [
                {
                  label: 'Default',
                  value: 'default',
                },
                {
                  value: 'instagram',
                  label: 'Instagram',
                },
                {
                  value: 'telegram',
                  label: 'Telegram',
                },
                {
                  value: 'facebook',
                  label: 'Facebook',
                },
              ],
            },
            LinkField,
          ],
        },
      ],
    },
    {
      label: 'Working Hours',
      name: 'workingHours',
      type: 'group',
      fields: [
        {
          label: 'Title',
          name: 'title',
          type: 'text',
        },
        {
          label: 'Text',
          name: 'text',
          type: 'text',
        },
      ],
    },
    {
      label: 'Copyright',
      name: 'copyright',
      type: 'text',
      required: true,
    },
    {
      label: 'Phone Number',
      name: 'phoneNumber',
      type: 'group',
      fields: [
        {
          label: 'Title',
          name: 'title',
          type: 'text',
        },
        {
          label: 'Label',
          name: 'label',
          type: 'text',
        },
        {
          label: 'Url',
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
