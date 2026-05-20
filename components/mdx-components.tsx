import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeShiki from '@shikijs/rehype';

const components = {
  Image,
};

interface MdxProps {
  source: string;
}

export function Mdx({ source }: MdxProps) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          rehypePlugins: [
            [
              rehypeShiki,
              {
                themes: {
                  light: 'github-light-default',
                  dark: 'github-dark-default',
                },
                defaultColor: false,
              },
            ],
          ],
        },
      }}
    />
  );
}
