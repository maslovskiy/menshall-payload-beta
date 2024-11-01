import type { GlobalConfig } from "payload";
import { LinkField } from '@/admin/fields'

export const AcademyProgramGlobal: GlobalConfig = {
  slug: "academyProgram",
  typescript: {
    interface: "AcademyProgram",
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
      name: "description",
      type: "text",
      label: "Description",
      required: true,
    },
    {
      label: "Image",
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "program",
      type: "array",
      required: true,
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "number",
              type: "text",
              label: "Number",
              required: true,
            },
            {
              name: "description",
              type: "text",
              label: "Description",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "helperText",
      type: "text",
      label: "Helper Text",
      required: true,
    },
    LinkField,
  ],
};
