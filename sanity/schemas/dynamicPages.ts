// sanity/schemas/dynamicPages.ts
export const dynamicPagesSchema = {
  name: 'dynamicPages',
  title: 'Dynamic Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Internal title for this page',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'customPath',
      title: 'Custom URL Path',
      type: 'string',
      description: 'Full URL path (e.g., "gaming-logo-maker" or "ai-solutions/seo-services")',
      validation: (Rule: any) => Rule.required().custom((path: string) => {
        if (!path) return 'Path is required';
        if (path.startsWith('/')) return 'Do not start with /';
        if (path.endsWith('/')) return 'Do not end with /';
        if (path.includes(' ')) return 'Use hyphens instead of spaces';
        return true;
      }),
      placeholder: 'gaming-logo-maker or ai-solutions/seo'
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Title tag for search engines (max 60 characters)',
      validation: (Rule: any) => Rule.required().max(60)
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      description: 'Meta description for search engines (max 160 characters)',
      validation: (Rule: any) => Rule.required().max(160)
    },
    {
      name: 'seoKeywords',
      title: 'SEO Keywords',
      type: 'string',
      description: 'Comma-separated keywords for SEO'
    },
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'mainHeading',
          title: 'Main Heading',
          type: 'object',
          fields: [
            {
              name: 'line1',
              title: 'First Line',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'line2',
              title: 'Second Line',
              type: 'string'
            }
          ]
        },
        {
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          validation: (Rule: any) => Rule.required()
        },
        {
          name: 'ctaButton',
          title: 'CTA Button',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Get Started'
            },
            {
              name: 'link',
              title: 'Button Link',
              type: 'string',
              initialValue: '/contact'
            }
          ]
        },
        {
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string'
            }
          ]
        }
      ],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'contentSections',
      title: 'Content Sections',
      type: 'array',
      description: 'Add sections to build your page',
      of: [
        {
          type: 'object',
          name: 'textImageSection',
          title: 'Text + Image Section',
          fields: [
            {
              name: 'sectionType',
              title: 'Layout',
              type: 'string',
              options: {
                list: [
                  { title: 'Text Left, Image Right', value: 'textLeft' },
                  { title: 'Image Left, Text Right', value: 'imageLeft' }
                ]
              },
              initialValue: 'textLeft'
            },
            {
              name: 'heading',
              title: 'Section Heading',
              type: 'object',
              fields: [
                {
                  name: 'normalText',
                  title: 'Normal Text',
                  type: 'string'
                },
                {
                  name: 'gradientText',
                  title: 'Gradient Text',
                  type: 'string'
                }
              ]
            },
            {
              name: 'content',
              title: 'Content Paragraphs',
              type: 'array',
              of: [{ type: 'text' }]
            },
            {
              name: 'image',
              title: 'Section Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string'
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'heading.normalText',
              subtitle: 'heading.gradientText',
              media: 'image'
            },
            prepare(selection: any) {
              return {
                title: `${selection.title || ''} ${selection.subtitle || ''}`.trim() || 'Text + Image Section',
                subtitle: 'Text + Image'
              }
            }
          }
        },
        {
          type: 'object',
          name: 'gridSection',
          title: 'Grid Section',
          fields: [
            {
              name: 'heading',
              title: 'Section Heading',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Section Description',
              type: 'text'
            },
            {
              name: 'gridItems',
              title: 'Grid Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Item Title',
                      type: 'string'
                    },
                    {
                      name: 'description',
                      title: 'Item Description',
                      type: 'text'
                    },
                    {
                      name: 'image',
                      title: 'Item Image',
                      type: 'image',
                      options: { hotspot: true },
                      fields: [
                        {
                          name: 'alt',
                          title: 'Alt Text',
                          type: 'string'
                        }
                      ]
                    }
                  ],
                  preview: {
                    select: {
                      title: 'title',
                      media: 'image'
                    }
                  }
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'heading'
            },
            prepare(selection: any) {
              return {
                title: selection.title || 'Grid Section',
                subtitle: 'Grid Layout'
              }
            }
          }
        },
        {
          type: 'object',
          name: 'featuresSection',
          title: 'Features Section',
          fields: [
            {
              name: 'heading',
              title: 'Section Heading',
              type: 'object',
              fields: [
                {
                  name: 'normalText',
                  title: 'Normal Text',
                  type: 'string'
                },
                {
                  name: 'gradientText',
                  title: 'Gradient Text',
                  type: 'string'
                }
              ]
            },
            {
              name: 'description',
              title: 'Section Description',
              type: 'text'
            },
            {
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'icon',
                      title: 'Icon',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Rocket', value: 'Rocket' },
                          { title: 'Bar Chart', value: 'BarChart3' },
                          { title: 'Shield', value: 'Shield' },
                          { title: 'Lightbulb', value: 'Lightbulb' },
                          { title: 'Brain', value: 'Brain' },
                          { title: 'Zap', value: 'Zap' },
                          { title: 'Target', value: 'Target' },
                          { title: 'Users', value: 'Users' },
                          { title: 'Clock', value: 'Clock' },
                          { title: 'Trending Up', value: 'TrendingUp' }
                        ]
                      }
                    },
                    {
                      name: 'title',
                      title: 'Feature Title',
                      type: 'string'
                    },
                    {
                      name: 'description',
                      title: 'Feature Description',
                      type: 'text'
                    }
                  ],
                  preview: {
                    select: {
                      title: 'title',
                      subtitle: 'icon'
                    }
                  }
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'heading.normalText'
            },
            prepare(selection: any) {
              return {
                title: selection.title || 'Features Section',
                subtitle: 'Features with Icons'
              }
            }
          }
        },
        {
          type: 'object',
          name: 'processSection',
          title: 'Process Section',
          fields: [
            {
              name: 'heading',
              title: 'Section Heading',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Section Description',
              type: 'text'
            },
            {
              name: 'processSteps',
              title: 'Process Steps',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'stepNumber',
                      title: 'Step Number',
                      type: 'string'
                    },
                    {
                      name: 'title',
                      title: 'Step Title',
                      type: 'string'
                    },
                    {
                      name: 'description',
                      title: 'Step Description',
                      type: 'text'
                    }
                  ],
                  preview: {
                    select: {
                      title: 'title',
                      subtitle: 'stepNumber'
                    }
                  }
                }
              ]
            },
            {
              name: 'processImage',
              title: 'Process Illustration',
              type: 'image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string'
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'heading'
            },
            prepare(selection: any) {
              return {
                title: selection.title || 'Process Section',
                subtitle: 'Step-by-step'
              }
            }
          }
        },
        {
          type: 'object',
          name: 'benefitsSection',
          title: 'Benefits Section',
          fields: [
            {
              name: 'heading',
              title: 'Section Heading',
              type: 'string'
            },
            {
              name: 'leftBenefits',
              title: 'Left Column Benefits',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Benefit Title',
                      type: 'string'
                    },
                    {
                      name: 'description',
                      title: 'Benefit Description',
                      type: 'text'
                    }
                  ]
                }
              ]
            },
            {
              name: 'rightBenefits',
              title: 'Right Column Benefits',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Benefit Title',
                      type: 'string'
                    },
                    {
                      name: 'description',
                      title: 'Benefit Description',
                      type: 'text'
                    }
                  ]
                }
              ]
            },
            {
              name: 'centerImage',
              title: 'Center Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string'
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'heading'
            },
            prepare(selection: any) {
              return {
                title: selection.title || 'Benefits Section',
                subtitle: 'Three-column'
              }
            }
          }
        },
        {
          type: 'object',
          name: 'faqSection',
          title: 'FAQ Section',
          fields: [
            {
              name: 'heading',
              title: 'Section Heading',
              type: 'object',
              fields: [
                {
                  name: 'normalText',
                  title: 'Normal Text',
                  type: 'string'
                },
                {
                  name: 'gradientText',
                  title: 'Gradient Text',
                  type: 'string'
                }
              ]
            },
            {
              name: 'description',
              title: 'Section Description',
              type: 'text'
            },
            {
              name: 'faqs',
              title: 'FAQ Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'question',
                      title: 'Question',
                      type: 'string'
                    },
                    {
                      name: 'answer',
                      title: 'Answer',
                      type: 'text'
                    }
                  ],
                  preview: {
                    select: {
                      title: 'question'
                    }
                  }
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'heading.normalText'
            },
            prepare(selection: any) {
              return {
                title: selection.title || 'FAQ Section',
                subtitle: 'FAQs'
              }
            }
          }
        },
        {
          type: 'object',
          name: 'ctaSection',
          title: 'CTA Section',
          fields: [
            {
              name: 'heading',
              title: 'CTA Heading',
              type: 'object',
              fields: [
                {
                  name: 'normalText',
                  title: 'Normal Text',
                  type: 'string'
                },
                {
                  name: 'gradientText',
                  title: 'Gradient Text',
                  type: 'string'
                }
              ]
            },
            {
              name: 'ctaImage',
              title: 'CTA Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string'
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'heading.normalText'
            },
            prepare(selection: any) {
              return {
                title: selection.title || 'CTA Section',
                subtitle: 'Call-to-Action'
              }
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      path: 'customPath',
      media: 'heroSection.heroImage'
    },
    prepare(selection: any) {
      return {
        title: selection.title,
        subtitle: `/${selection.path || 'no-path'}`,
        media: selection.media
      }
    }
  }
}