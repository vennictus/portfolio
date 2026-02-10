import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'blogs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    excerpt: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      required: false,
    },
    published: {
      type: 'boolean',
      default: true,
    },
    featured: {
      type: 'boolean',
      default: false,
    },
    ogImage: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/data',
  documentTypes: [Post],
  disableImportAliasWarning: true,
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          keepBackground: false,
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
