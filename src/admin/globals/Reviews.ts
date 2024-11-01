import type { GlobalConfig } from "payload";

export const ReviewsGlobal: GlobalConfig = {
  slug: "reviews",
  typescript: {
    interface: "Reviews",
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
      label: "Background Image",
      name: "bg",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "reviews",
      type: "array",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "name",
              type: "text",
              label: "Name",
              required: true,
            },
            {
              name: "text",
              type: "text",
              label: "Text",
              required: true,
            },
            {
              name: "link",
              type: "text",
              label: "Link",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
