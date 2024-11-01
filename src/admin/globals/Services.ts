import type { GlobalConfig } from "payload";
import { LinkField } from '../fields'

export const ServicesGlobal: GlobalConfig = {
  slug: "services",
  access: {
    read: () => true,
  },
  fields: [
    {
      label: "Title",
      name: "title",
      type: "text",
      required: true,
    },
    {
      label: "Secondary Title",
      name: "secondaryTitle",
      type: "text",
      required: true,
    },
    {
      label: "Third Title",
      name: "thirdTitle",
      type: "text",
      required: true,
    },
    {
      name: "services",
      label: "Services",
      type: "array",
      maxRows: 3,
      required: true,
      fields: [
        {
          label: "Title",
          name: "title",
          type: "text",
          required: true,
        },
        {
          label: "Description",
          name: "description",
          type: "text",
          required: true,
        },
        {
          label: "Image",
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        LinkField,
      ],
    },
  ],
};
