// sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// Import your schemas
import { servicesSchema } from './sanity/schemas/services'
import { aiSolutionsSchema } from './sanity/schemas/aiSolutions'
import {dynamicPagesSchema} from './sanity/schemas/dynamicPages'

export default defineConfig({
  name: 'marqait-studio',
  title: 'Marqait Content Studio',
  
  projectId: 'e4lzqt0n',
  dataset: 'production',
  
  plugins: [
    structureTool(),
    visionTool(),
  ],
  
  schema: {
    types: [
      servicesSchema,
      aiSolutionsSchema,
      dynamicPagesSchema
    ],
  },
})