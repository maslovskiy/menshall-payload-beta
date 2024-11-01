import type { GlobalConfig } from "payload";

export const BarbersGlobal: GlobalConfig = {
  slug: "barbers",
  typescript: {
    interface: "Barbers",
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
      name: "buttonText",
      type: "text",
      label: "Button Text",
      defaultValue: "Записатись",
      required: true,
    },
    {
      name: "barbers",
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
              required: true,
            },
            {
              name: "location",
              type: "text",
              label: "Location",
              required: true,
            },
            {
              name: "id",
              type: "text",
              label: "ID",
              required: true,
            },
            {
              type: "row",
              fields: [
                {
                  name: "name",
                  type: "text",
                  label: "Name",
                  required: true,
                  admin: {
                    width: "100%",
                  },
                },
                {
                  name: "specialization",
                  type: "text",
                  label: "Specialization",
                  required: true,
                  admin: {
                    width: "100%",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
