import type { Block } from "payload";
import { RichTextField } from '@/admin/fields'

export const TilesBlock: Block = {
  slug: "tiles",
  labels: {
    singular: "Tile",
    plural: "Tiles",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      defaultValue: "Переваги Курсу Барберів у Men's Hall",
    },
    {
      name: "list",
      type: "array",
      label: "Tiles",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Title",
        },
        ...RichTextField,
        {
          label: "Image",
          name: "image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};
