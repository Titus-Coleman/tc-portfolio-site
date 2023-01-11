import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { cloudinaryAssetSourcePlugin, cloudinarySchemaPlugin } from 'sanity-plugin-cloudinary'

export default defineConfig({
  name: 'default',
  title: 'tc-portfolio-site',

  projectId: 'qye2qsh4',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), cloudinaryAssetSourcePlugin(), cloudinarySchemaPlugin()],

  schema: {
    types: schemaTypes,
  },
})
