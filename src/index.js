/**
 * Convert HTML to plain text
 * @param {string} html - HTML string to convert
 * @param {object} options - Conversion options
 * @returns {string} Plain text
 */
function htmlToPlainText(html, options = {}) {
  // Default options
  const defaultOptions = {
    preserveLineBreaks: true,
    preserveLinks: false,
    preserveImages: false,
    // Add more options as needed
  };

  const mergedOptions = { ...defaultOptions, ...options };

  // Check if we're in a browser or Node.js environment
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    return require("./browser").default(html, mergedOptions);
  } else {
    return require("./node").default(html, mergedOptions);
  }
}

export default htmlToPlainText;
