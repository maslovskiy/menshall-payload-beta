/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    pages: Page;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    barbers: Barbers;
    services: Service;
    footer: Footer;
    header: Header;
    settings: Settings;
    contacts: Contact;
    reviews: Reviews;
    academyTeachers: AcademyTeachers;
    academyProgram: AcademyProgram;
    schedule: Schedule;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  prefix?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  slug: string;
  layout: (
    | {
        columns: {
          size: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
          blocks: (
            | {
                content?: {
                  root: {
                    type: string;
                    children: {
                      type: string;
                      version: number;
                      [k: string]: unknown;
                    }[];
                    direction: ('ltr' | 'rtl') | null;
                    format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                    indent: number;
                    version: number;
                  };
                  [k: string]: unknown;
                } | null;
                content_html?: string | null;
                id?: string | null;
                blockName?: string | null;
                blockType: 'richText';
              }
            | {
                list: {
                  title: string;
                  content?: {
                    root: {
                      type: string;
                      children: {
                        type: string;
                        version: number;
                        [k: string]: unknown;
                      }[];
                      direction: ('ltr' | 'rtl') | null;
                      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                      indent: number;
                      version: number;
                    };
                    [k: string]: unknown;
                  } | null;
                  content_html?: string | null;
                  id?: string | null;
                }[];
                id?: string | null;
                blockName?: string | null;
                blockType: 'list';
              }
            | {
                mobileHidden?: boolean | null;
                image: string | Media;
                id?: string | null;
                blockName?: string | null;
                blockType: 'image';
              }
            | {
                link: {
                  linkType: 'internalLink' | 'externalLink';
                  label?: string | null;
                  internalLink?: (string | null) | Page;
                  externalLink?: string | null;
                  url?: string | null;
                  secondaryLabel?: string | null;
                  variant?: ('primary' | 'secondary' | 'none') | null;
                  newTab?: boolean | null;
                };
                id?: string | null;
                blockName?: string | null;
                blockType: 'linkBlock';
              }
            | {
                secondLabel?: string | null;
                thirdLabel?: string | null;
                list: {
                  title: string;
                  price: string;
                  duration: string;
                  content?: {
                    root: {
                      type: string;
                      children: {
                        type: string;
                        version: number;
                        [k: string]: unknown;
                      }[];
                      direction: ('ltr' | 'rtl') | null;
                      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                      indent: number;
                      version: number;
                    };
                    [k: string]: unknown;
                  } | null;
                  content_html?: string | null;
                  image?: (string | null) | Media;
                  id?: string | null;
                }[];
                id?: string | null;
                blockName?: string | null;
                blockType: 'tabs';
              }
            | {
                title?: string | null;
                list: {
                  title: string;
                  content?: {
                    root: {
                      type: string;
                      children: {
                        type: string;
                        version: number;
                        [k: string]: unknown;
                      }[];
                      direction: ('ltr' | 'rtl') | null;
                      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                      indent: number;
                      version: number;
                    };
                    [k: string]: unknown;
                  } | null;
                  content_html?: string | null;
                  image: string | Media;
                  id?: string | null;
                }[];
                id?: string | null;
                blockName?: string | null;
                blockType: 'tiles';
              }
          )[];
          id?: string | null;
        }[];
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        Title: string;
        content?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        content_html?: string | null;
        backgorund: string | Media;
        link: {
          linkType: 'internalLink' | 'externalLink';
          label?: string | null;
          internalLink?: (string | null) | Page;
          externalLink?: string | null;
          url?: string | null;
          secondaryLabel?: string | null;
          variant?: ('primary' | 'secondary' | 'none') | null;
          newTab?: boolean | null;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: 'banner';
      }
    | {
        content?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        content_html?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'richText';
      }
    | {
        image: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'image';
      }
    | {
        global?: ('reviews' | 'services' | 'contacts' | 'teachers' | 'program' | 'barbers') | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'global';
      }
    | {
        general: {
          title: string;
          secondColumnLabel: string;
          thirdColumnLabel: string;
        };
        list: {
          table: {
            title: string;
            rows?:
              | {
                  row: {
                    title: string;
                    price: string;
                    duration: string;
                    description?: string | null;
                  };
                  id?: string | null;
                }[]
              | null;
          };
          id?: string | null;
        }[];
        id?: string | null;
        blockName?: string | null;
        blockType: 'tables';
      }
  )[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'pages';
        value: string | Page;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "barbers".
 */
export interface Barbers {
  id: string;
  title: string;
  buttonText: string;
  barbers: {
    image: string | Media;
    location: string;
    id: string | null;
    name: string;
    specialization: string;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services".
 */
export interface Service {
  id: string;
  title: string;
  secondaryTitle: string;
  thirdTitle: string;
  services: {
    title: string;
    description: string;
    image: string | Media;
    link: {
      linkType: 'internalLink' | 'externalLink';
      label?: string | null;
      internalLink?: (string | null) | Page;
      externalLink?: string | null;
      url?: string | null;
      secondaryLabel?: string | null;
      variant?: ('primary' | 'secondary' | 'none') | null;
      newTab?: boolean | null;
    };
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  title: string;
  sections: {
    label: string;
    links: {
      link: {
        linkType: 'internalLink' | 'externalLink';
        label?: string | null;
        internalLink?: (string | null) | Page;
        externalLink?: string | null;
        url?: string | null;
        secondaryLabel?: string | null;
        variant?: ('primary' | 'secondary' | 'none') | null;
        newTab?: boolean | null;
      };
      id?: string | null;
    }[];
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  title?: string | null;
  navItems: {
    link: {
      linkType: 'internalLink' | 'externalLink';
      label?: string | null;
      internalLink?: (string | null) | Page;
      externalLink?: string | null;
      url?: string | null;
      secondaryLabel?: string | null;
      variant?: ('primary' | 'secondary' | 'none') | null;
      newTab?: boolean | null;
    };
    hasSubItems?: boolean | null;
    subNavItems?:
      | {
          link: {
            linkType: 'internalLink' | 'externalLink';
            label?: string | null;
            internalLink?: (string | null) | Page;
            externalLink?: string | null;
            url?: string | null;
            secondaryLabel?: string | null;
            variant?: ('primary' | 'secondary' | 'none') | null;
            newTab?: boolean | null;
          };
          id?: string | null;
        }[]
      | null;
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Settings {
  id: string;
  logo: string | Media;
  bgLogo: string | Media;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contacts".
 */
export interface Contact {
  id: string;
  general: {
    title?: string | null;
    secondaryTitle?: string | null;
    link: {
      linkType: 'internalLink' | 'externalLink';
      label?: string | null;
      internalLink?: (string | null) | Page;
      externalLink?: string | null;
      url?: string | null;
      secondaryLabel?: string | null;
      variant?: ('primary' | 'secondary' | 'none') | null;
      newTab?: boolean | null;
    };
    marker?: (string | null) | Media;
  };
  emailGroup?: {
    emailTitle?: string | null;
    emails?:
      | {
          link: {
            linkType: 'internalLink' | 'externalLink';
            label?: string | null;
            internalLink?: (string | null) | Page;
            externalLink?: string | null;
            url?: string | null;
            secondaryLabel?: string | null;
            variant?: ('primary' | 'secondary' | 'none') | null;
            newTab?: boolean | null;
          };
          id?: string | null;
        }[]
      | null;
  };
  addressGroup: {
    addresses: {
      location: string;
      label: string;
      image?: (string | null) | Media;
      phonet?: string | null;
      links: {
        link: {
          linkType: 'internalLink' | 'externalLink';
          label?: string | null;
          internalLink?: (string | null) | Page;
          externalLink?: string | null;
          url?: string | null;
          secondaryLabel?: string | null;
          variant?: ('primary' | 'secondary' | 'none') | null;
          newTab?: boolean | null;
        };
        id?: string | null;
      }[];
      id?: string | null;
    }[];
  };
  socialsGroup?: {
    socials?:
      | {
          name: 'default' | 'instagram' | 'telegram' | 'facebook';
          link: {
            linkType: 'internalLink' | 'externalLink';
            label?: string | null;
            internalLink?: (string | null) | Page;
            externalLink?: string | null;
            url?: string | null;
            secondaryLabel?: string | null;
            variant?: ('primary' | 'secondary' | 'none') | null;
            newTab?: boolean | null;
          };
          id?: string | null;
        }[]
      | null;
  };
  workingHours?: {
    title?: string | null;
    text?: string | null;
  };
  copyright: string;
  phoneNumber: {
    title?: string | null;
    label?: string | null;
    url: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "reviews".
 */
export interface Reviews {
  id: string;
  title: string;
  bg: string | Media;
  reviews?:
    | {
        name: string;
        text: string;
        link: string;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "academyTeachers".
 */
export interface AcademyTeachers {
  id: string;
  title: string;
  teachers: {
    image?: (string | null) | Media;
    name?: string | null;
    description?: string | null;
    text?: string | null;
    socialsGroup?: {
      socials?:
        | {
            name: 'default' | 'instagram' | 'telegram' | 'facebook';
            link: {
              linkType: 'internalLink' | 'externalLink';
              label?: string | null;
              internalLink?: (string | null) | Page;
              externalLink?: string | null;
              url?: string | null;
              secondaryLabel?: string | null;
              variant?: ('primary' | 'secondary' | 'none') | null;
              newTab?: boolean | null;
            };
            id?: string | null;
          }[]
        | null;
    };
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "academyProgram".
 */
export interface AcademyProgram {
  id: string;
  title: string;
  description: string;
  image: string | Media;
  program: {
    number: string;
    description: string;
    id?: string | null;
  }[];
  helperText: string;
  link: {
    linkType: 'internalLink' | 'externalLink';
    label?: string | null;
    internalLink?: (string | null) | Page;
    externalLink?: string | null;
    url?: string | null;
    secondaryLabel?: string | null;
    variant?: ('primary' | 'secondary' | 'none') | null;
    newTab?: boolean | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "schedule".
 */
export interface Schedule {
  id: string;
  title: string;
  steps: {
    title: string;
    secondaryTitle: string;
    id?: string | null;
  }[];
  successSubtitle: string;
  successText: string;
  successGreeting: string;
  nextButtonText: string;
  prevButtonText: string;
  submitButtonText: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}