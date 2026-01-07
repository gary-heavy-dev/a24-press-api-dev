import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {googleMapsInput} from '@sanity/google-maps-input'

import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'A24 Press',

  projectId: 'mmd5bl9c',
  dataset: 'staging',

  plugins: [
    structureTool(),
    visionTool(),
    googleMapsInput({
      apiKey: process.env.SANITY_STUDIO_GOOGLE_MAPS_API_KEY,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
