import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types based on your database structure
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  html: string
  cover_image_url: string | null
  tags: string[]
  status: 'published' | 'draft'
  author_id: string | null
  published_at: string | null
  created_at: string
  updated_at: string
  meta_title: string
  meta_description: string
}