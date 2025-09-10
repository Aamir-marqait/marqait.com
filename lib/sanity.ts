// lib/sanity.ts
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'e4lzqt0n',
  dataset: 'production',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2024-01-01',
})

// Set up image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Fetch services data
export async function getServices() {
  try {
    const services = await client.fetch(`
      *[_type == "services"][0] {
        sectionTitle,
        sectionSubtitle,
        bottomDescription,
        ctaButtonText,
        ctaButtonLink,
        services[] {
          title,
          description,
          icon {
            asset->{
              _id,
              url
            },
            alt
          }
        }
      }
    `)
    return services
  } catch (error) {
    console.error('Error fetching services:', error)
    return null
  }
}

// Fetch single AI solution by slug
export async function getAISolution(slug: string) {
  try {
    const solution = await client.fetch(`
      *[_type == "aiSolutions" && slug.current == $slug][0] {
        title,
        "slug": slug.current,
        seoTitle,
        seoDescription,
        seoKeywords,
        canonicalUrl,
        heroSection {
          mainHeading {
            line1,
            line2
          },
          description,
          ctaButton {
            text,
            link
          },
          heroImage {
            asset->{
              _id,
              url
            },
            alt
          }
        },
        contentSections[] {
          _type,
          
          // Text + Image Section
          _type == "textImageSection" => {
            sectionType,
            heading {
              normalText,
              gradientText
            },
            content,
            image {
              asset->{
                _id,
                url
              },
              alt
            }
          },
          
          // Grid Section
          _type == "gridSection" => {
            heading,
            description,
            gridItems[] {
              title,
              description,
              image {
                asset->{
                  _id,
                  url
                },
                alt
              }
            }
          },
          
          // Features Section
          _type == "featuresSection" => {
            heading {
              normalText,
              gradientText
            },
            description,
            features[] {
              icon,
              title,
              description
            }
          },
          
          // Process Section
          _type == "processSection" => {
            heading,
            description,
            processSteps[] {
              stepNumber,
              title,
              description
            },
            processImage {
              asset->{
                _id,
                url
              },
              alt
            }
          },
          
          // Benefits Section
          _type == "benefitsSection" => {
            heading,
            leftBenefits[] {
              title,
              description
            },
            rightBenefits[] {
              title,
              description
            },
            centerImage {
              asset->{
                _id,
                url
              },
              alt
            }
          },
          
          // FAQ Section
          _type == "faqSection" => {
            heading {
              normalText,
              gradientText
            },
            description,
            faqs[] {
              question,
              answer
            }
          },
          
          // CTA Section
          _type == "ctaSection" => {
            heading {
              normalText,
              gradientText
            },
            ctaImage {
              asset->{
                _id,
                url
              },
              alt
            }
          }
        }
      }
    `, { slug })
    
    return solution
  } catch (error) {
    console.error('Error fetching AI solution:', error)
    return null
  }
}

// Get all AI solution slugs for static generation
export async function getAllAISolutionSlugs() {
  try {
    const slugs = await client.fetch(`
      *[_type == "aiSolutions" && defined(slug.current)] {
        "slug": slug.current
      }
    `)
    
    return slugs.map((item: any) => item.slug)
  } catch (error) {
    console.error('Error fetching AI solution slugs:', error)
    return []
  }
}

// Get all AI solutions for sitemap generation (optional)
export async function getAllAISolutions() {
  try {
    const solutions = await client.fetch(`
      *[_type == "aiSolutions"] {
        title,
        "slug": slug.current,
        seoTitle,
        seoDescription,
        _updatedAt
      }
    `)
    
    return solutions
  } catch (error) {
    console.error('Error fetching all AI solutions:', error)
    return []
  }
}