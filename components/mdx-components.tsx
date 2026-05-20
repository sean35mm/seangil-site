import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';

const components = {
  Image,
};

interface MdxProps {
  source: string;
}

export function Mdx({ source }: MdxProps) {
  return <MDXRemote source={source} components={components} />;
}
