import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {googleMapsInput} from '@sanity/google-maps-input'

import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'A24 Press',

  projectId: 'xq1bjtf4',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(), 
    media(),
    googleMapsInput({
      apiKey: process.env.SANITY_STUDIO_GOOGLE_MAPS_API_KEY,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
