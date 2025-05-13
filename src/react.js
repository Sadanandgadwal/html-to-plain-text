import { useEffect, useState } from "react";
import htmlToPlainText from "./index";

/**
 * React hook for HTML to plain text conversion
 * @param {string} html - HTML string to convert
 * @param {object} options - Conversion options
 * @returns {string} Plain text
 */
export function useHtmlToPlainText(html, options) {
  const [plainText, setPlainText] = useState("");

  useEffect(() => {
    setPlainText(htmlToPlainText(html, options));
  }, [html, options]);

  return plainText;
}

/**
 * React component wrapper
 */
export function HtmlToPlainText({ html, options, children, ...props }) {
  const text = useHtmlToPlainText(html || children, options);
  return <span {...props}>{text}</span>;
}

export default htmlToPlainText;
