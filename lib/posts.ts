import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export type Post = {
  slug: string;
  slugAsParams: string;
  title: string;
  description?: string;
  date: string;
  body: string;
};

async function walkMdx(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return walkMdx(full);
      return entry.isFile() && entry.name.endsWith('.mdx') ? [full] : [];
    })
  );
  return files.flat();
}

export async function getAllPosts(): Promise<Post[]> {
  const files = await walkMdx(BLOG_DIR);
  const posts = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(file, 'utf8');
      const { data, content } = matter(raw);
      const rel = path.relative(BLOG_DIR, file).replace(/\.mdx$/, '');
      const date =
        data.date instanceof Date
          ? data.date.toISOString()
          : String(data.date);
      return {
        slug: `/blog/${rel}`,
        slugAsParams: rel,
        title: String(data.title),
        description: data.description ? String(data.description) : undefined,
        date,
        body: content,
      } satisfies Post;
    })
  );
  return posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}
