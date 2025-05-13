declare module "html-to-plain-text" {
  interface HtmlToPlainTextOptions {
    preserveLineBreaks?: boolean;
    preserveLinks?: boolean;
    preserveImages?: boolean;
  }

  export function htmlToPlainText(
    html: string,
    options?: HtmlToPlainTextOptions
  ): string;

  export function useHtmlToPlainText(
    html: string,
    options?: HtmlToPlainTextOptions
  ): string;

  export function HtmlToPlainText({
    html,
    options,
    children,
    ...props
  }: {
    html?: string;
    options?: HtmlToPlainTextOptions;
    children?: string;
    [key: string]: any;
  }): JSX.Element;

  export default htmlToPlainText;
}
