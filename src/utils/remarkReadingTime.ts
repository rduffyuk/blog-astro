import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";
import type { Root } from "mdast";
import type { VFile } from "vfile";

type AstroVFile = VFile & {
  data: VFile["data"] & {
    astro?: {
      frontmatter?: Record<string, unknown>;
    };
  };
};

export function remarkReadingTime() {
  return function (_tree: Root, { data }: AstroVFile) {
    const textOnPage = toString(_tree);
    const readingTime = getReadingTime(textOnPage);
    if (data.astro?.frontmatter) {
      data.astro.frontmatter.readingTime = readingTime.text;
    }
  };
}
