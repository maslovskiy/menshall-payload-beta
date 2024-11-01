import type { GlobalConfig } from "payload";
import { LinkField } from '../fields'

export const FooterGlobal: GlobalConfig = {
  slug: "footer",
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
      label: "Sections",
      name: "sections",
      type: "array",
      required: true,
      maxRows: 3,
      fields: [
        {
          label: "Label",
          name: "label",
          type: "text",
          required: true,
        },
        {
          label: "Links",
          name: "links",
          type: "array",
          required: true,
          fields: [LinkField],
        },
      ],
    },
  ],
};
