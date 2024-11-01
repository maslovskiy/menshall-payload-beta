// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { UsersCollection, MediaCollection, PagesCollection } from './admin/collections'
import {
  ServicesGlobal,
  FooterGlobal,
  HeaderGlobal,
  SettingsGlobal,
  ContactsGlobal,
  ReviewsGlobal,
  AcademyTeachersGlobal, AcademyProgramGlobal, ScheduleGlobal,
} from './admin/globals'
import { BarbersGlobal } from '@/admin/globals/Barbers'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: UsersCollection.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [UsersCollection, MediaCollection, PagesCollection],
  globals: [BarbersGlobal, ServicesGlobal, FooterGlobal, HeaderGlobal, SettingsGlobal, ContactsGlobal, ReviewsGlobal, AcademyTeachersGlobal, AcademyProgramGlobal, ScheduleGlobal],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
