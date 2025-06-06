import { defineDocs, defineConfig } from "fumadocs-mdx/config";

import {
  fileGenerator,
  remarkDocGen,
  remarkInstall,
  typescriptGenerator,
} from "fumadocs-docgen";
import { rehypeCode } from "fumadocs-core/mdx-plugins";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  // ...
} from "@shikijs/transformers";
import { remarkMermaid } from '@theguild/remark-mermaid'
import remarkBreaks from 'remark-breaks'

export const { docs, meta } = defineDocs();

export default defineConfig({
  mdxOptions: {
    rehypePlugins: [
      [
        rehypeCode,
        {
          transformers: [
            transformerNotationDiff(),
            transformerNotationHighlight(),
            transformerNotationWordHighlight(),
          ],
        },
      ],
    ],
    remarkPlugins: [
      remarkBreaks,
      remarkMermaid,
      [remarkInstall, { persist: { id: "package-manager" } }],
      [remarkDocGen, { generators: [typescriptGenerator(), fileGenerator()] }],
    ],
  },
});
