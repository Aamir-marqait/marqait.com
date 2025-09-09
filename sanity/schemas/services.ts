// sanity/schemas/services.ts
export const servicesSchema = {
  name: 'services',
  title: 'Services Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Main heading for the services section',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'sectionSubtitle',
      title: 'Section Subtitle', 
      type: 'text',
      description: 'Subtitle text below the main heading',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Service Title',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'description',
              title: 'Service Description',
              type: 'text',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'icon',
              title: 'Service Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  description: 'Alternative text for screen readers'
                }
              ],
              validation: (Rule: any) => Rule.required()
            }
          ],
          preview: {
            select: {
              title: 'title',
              media: 'icon'
            }
          }
        }
      ],
      validation: (Rule: any) => Rule.required().min(1).max(6)
    },
    {
      name: 'bottomDescription',
      title: 'Bottom Description',
      type: 'text',
      description: 'Description text below the services grid'
    },
    {
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'Text for the call-to-action button'
    },
    {
      name: 'ctaButtonLink',
      title: 'CTA Button Link',
      type: 'string',
      description: 'Link for the call-to-action button (e.g., /growth-pods)'
    }
  ],
  preview: {
    select: {
      title: 'sectionTitle'
    },
    prepare(selection: any) {
      return {
        title: selection.title || 'Services Section'
      }
    }
  }
}