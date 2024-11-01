import type { GlobalConfig } from "payload";

export const ScheduleGlobal: GlobalConfig = {
  slug: "schedule",
  typescript: {
    interface: "Schedule",
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
      required: true
    },
    {
      name: "steps",
      type: "array",
      required: true,
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "title",
              type: "text",
              label: "Title",
              required: true,
            },
            {
              name: "secondaryTitle",
              type: "text",
              label: "SecondaryTitle",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "successSubtitle",
      type: "text",
      label: "Success Subtitle",
      required: true,
    },
    {
      name: "successText",
      type: "text",
      label: "Success Text",
      required: true,
    },
    {
      name: "successGreeting",
      type: "text",
      label: "Success Greeting",
      required: true,
    },
    {
      name: "nextButtonText",
      type: "text",
      label: "Next Button Text",
      required: true,
    },
    {
      name: "prevButtonText",
      type: "text",
      label: "Prev Button Text",
      required: true,
    },
    {
      name: "submitButtonText",
      type: "text",
      label: "Submit Button Text",
      required: true,
    },
  ],
};
