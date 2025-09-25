import { supabase, BlogPost } from '../lib/supabase'

// Transform database blog post to match your current component structure
export interface TransformedBlogPost {
  id: string
  title: string
  slug: string
  description: string
  content: string
  image: string
  date: string
  cover_image_url:string
  readTime: string
  category: string
  author: {
    name: string
    avatar: string
  }
}

// Default author info (you can modify this or fetch from a separate authors table)
const defaultAuthor = {
  name: "Marqait Team",
  avatar: "/logo1.png"
  
}

// data/blogService.ts

// Accept null/undefined safely
function normalizeImageUrl(raw: string | null | undefined): string {
  if (!raw) return '/blog/default-post.jpg';
  try {
    const u = new URL(raw);

    if (u.hostname === 'drive.google.com') {
      // /file/d/<id>/view
      const m = u.pathname.match(/\/file\/d\/([^/]+)/);
      if (m?.[1]) {
        const id = m[1];
        return `https://drive.google.com/uc?export=view&id=${id}`;
      }
      // Already /uc?id=...
      const id = u.searchParams.get('id');
      if (u.pathname.startsWith('/uc') && id) {
        return `https://drive.google.com/uc?export=view&id=${id}`;
      }
    }

    return raw;
  } catch {
    return '/blog/default-post.jpg';
  }
}

function transformBlogPost(post: BlogPost): TransformedBlogPost {
  const content = String(post.html ?? post.content ?? '');
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const readTime = Math.ceil(wordCount / 200);

  const category =
    Array.isArray(post.tags) && post.tags.length > 0 ? post.tags[0] : 'AI & Technology';

  const createdAt = post.created_at ?? new Date().toISOString();
  const date = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    description: post.meta_description ?? post.excerpt ?? '',
    content,
    image: normalizeImageUrl(post.cover_image_url), // now always returns a valid string
    date,
    cover_image_url: post.cover_image_url ?? '', // add this line to satisfy the interface
    readTime: `${readTime} min read`,
    category,
    author: defaultAuthor,
  };
}

export async function getAllPublishedPosts(): Promise<TransformedBlogPost[]> {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching blog posts:', error)
      return []
    }

    return data.map(transformBlogPost)
  } catch (error) {
    console.error('Error in getAllPublishedPosts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<TransformedBlogPost | null> {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single()

    if (error) {
      console.error('Error fetching blog post by slug:', error)
      return null
    }

    return transformBlogPost(data)
  } catch (error) {
    console.error('Error in getPostBySlug:', error)
    return null
  }
}

export async function getRecentPosts(excludeId?: string, limit: number = 5): Promise<TransformedBlogPost[]> {
  try {
    let query = supabase
      .from('blogs')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false })
      .limit(limit)

    if (excludeId) {
      query = query.neq('id', excludeId)
    }

    const { data, error } = await query

    if (error) {
      console.error('Error fetching recent posts:', error)
      return []
    }

    return data.map(transformBlogPost)
  } catch (error) {
    console.error('Error in getRecentPosts:', error)
    return []
  }
}