// sanity/schemas/aiSolutions.ts
export const aiSolutionsSchema = {
  name: 'aiSolutions',
  title: 'AI Solutions Pages',
  type: 'document',
  fields: [
    // SEO & Basic Info
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Main title for the page (used in breadcrumbs and navigation)',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'URL path (e.g., "agent-development" for /ai-solutions/agent-development)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    
    // SEO Metadata
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
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'string',
      description: 'Full canonical URL (e.g., https://www.marqait.com/ai-solutions/agent-development)'
    },

    // Hero Section
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
              initialValue: 'Book a Free Consultation'
            },
            {
              name: 'link',
              title: 'Button Link',
              type: 'string',
              initialValue: '/consultation'
            }
          ]
        },
        {
          name: 'heroImage',
          title: 'Hero Image',
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
          ]
        }
      ],
      validation: (Rule: any) => Rule.required()
    },

    // Content Sections
    {
      name: 'contentSections',
      title: 'Content Sections',
      type: 'array',
      of: [
        // Text + Image Section
        {
          type: 'object',
          name: 'textImageSection',
          title: 'Text + Image Section',
          fields: [
            {
              name: 'sectionType',
              title: 'Section Type',
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
                  type: 'string',
                  description: 'Text that will have purple-pink gradient'
                }
              ]
            },
            {
              name: 'content',
              title: 'Content Paragraphs',
              type: 'array',
              of: [{ type: 'text' }],
              description: 'Multiple paragraphs of content'
            },
            {
              name: 'image',
              title: 'Section Image',
              type: 'image',
              options: {
                hotspot: true,
              },
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
                title: `${selection.title || ''} ${selection.subtitle || ''}`.trim(),
                subtitle: 'Text + Image Section'
              }
            }
          }
        },

        // Grid Section (for services, features, etc.)
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
                      options: {
                        hotspot: true,
                      },
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
                subtitle: 'Grid Items Section'
              }
            }
          }
        },

        // Features Section (with icons)
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
                      title: 'Feature Icon',
                      type: 'string',
                      description: 'Lucide icon name (e.g., Rocket, BarChart3, Shield)',
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
                          { title: 'TrendingUp', value: 'TrendingUp' }
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
              title: 'heading.normalText',
              subtitle: 'heading.gradientText'
            },
            prepare(selection: any) {
              return {
                title: `${selection.title || ''} ${selection.subtitle || ''}`.trim(),
                subtitle: 'Features Section'
              }
            }
          }
        },

        // Process Section
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
                      type: 'string',
                      description: 'e.g., "01", "02", etc.'
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
                    },
                    prepare(selection: any) {
                      return {
                        title: `${selection.subtitle}: ${selection.title}`,
                        subtitle: 'Process Step'
                      }
                    }
                  }
                }
              ]
            },
            {
              name: 'processImage',
              title: 'Process Illustration',
              type: 'image',
              options: {
                hotspot: true,
              },
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
                subtitle: 'Step-by-step Process'
              }
            }
          }
        },

        // Benefits Section
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
              options: {
                hotspot: true,
              },
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
                subtitle: 'Three-column Benefits Layout'
              }
            }
          }
        },

        // FAQ Section
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
              title: 'heading.normalText',
              subtitle: 'heading.gradientText'
            },
            prepare(selection: any) {
              return {
                title: `${selection.title || ''} ${selection.subtitle || ''}`.trim(),
                subtitle: 'FAQ Section'
              }
            }
          }
        },

        // CTA Section
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
              options: {
                hotspot: true,
              },
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
              subtitle: 'heading.gradientText'
            },
            prepare(selection: any) {
              return {
                title: `${selection.title || ''} ${selection.subtitle || ''}`.trim(),
                subtitle: 'CTA Section'
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
      subtitle: 'seoTitle',
      media: 'heroSection.heroImage'
    },
    prepare(selection: any) {
      return {
        title: selection.title,
        subtitle: `AI Solution: ${selection.subtitle || ''}`
      }
    }
  }
}