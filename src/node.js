/**
 * Node.js implementation using basic string replacement
 */
function nodeHtmlToPlainText(html, options) {
  // Simple implementation for Node.js
  let text = html
    .replace(/<style[^>]*>.*<\/style>/gms, "") // Remove style tags
    .replace(/<script[^>]*>.*<\/script>/gms, "") // Remove script tags
    .replace(/<\/div>/gi, "\n") // Replace div endings with newline
    .replace(/<\/p>/gi, "\n\n") // Replace paragraph endings with double newline
    .replace(/<br\s*\/?>/gi, "\n") // Replace br tags with newline
    .replace(/<[^>]+>/g, ""); // Remove all remaining HTML tags

  // Decode HTML entities
  if (typeof require !== "undefined") {
    const he = require("he");
    text = he.decode(text);
  }

  return text;
}

export default nodeHtmlToPlainText;
