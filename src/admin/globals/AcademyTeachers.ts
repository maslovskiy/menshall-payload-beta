import type { GlobalConfig } from "payload";
import { LinkField } from '@/admin/fields'

export const AcademyTeachersGlobal: GlobalConfig = {
  slug: "academyTeachers",
  typescript: {
    interface: "AcademyTeachers",
  },
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
    },
    {
      name: "teachers",
      type: "array",
      required: true,
      fields: [
        {
          type: "row",
          fields: [
            {
              label: "Image",
              name: "image",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "name",
              type: "text",
              label: "Name",
            },
            {
              name: "description",
              type: "text",
              label: "Description",
            },
            {
              name: "text",
              type: "text",
              label: "Text",
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
          ],
        },
      ],
    },
  ],
};
