import type { GlobalConfig } from "payload";

export const SettingsGlobal: GlobalConfig = {
  slug: "settings",
  typescript: {
    interface: "Settings",
  },
  graphQL: {
    name: "Settings",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      label: "Logo",
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      label: "Background Logo",
      name: "bgLogo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
