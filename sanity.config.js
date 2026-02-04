import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {googleMapsInput} from '@sanity/google-maps-input'

import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: process.env.SANITY_STUDIO_API_SITE_TITLE || 'A24 Press',
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID || 'xq1bjtf4',
  dataset: process.env.SANITY_STUDIO_API_DATASET || 'production',
  plugins: [
    structureTool(),
    visionTool(), 
    media(),
    googleMapsInput({
      apiKey: process.env.SANITY_STUDIO_GOOGLE_MAPS_API_KEY || '',
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
