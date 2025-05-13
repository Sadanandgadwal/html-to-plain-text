/**
 * Browser implementation using DOM parsing
 */
function browserHtmlToPlainText(html, options) {
  const temp = document.createElement("div");
  temp.innerHTML = html;

  // Handle line breaks
  if (options.preserveLineBreaks) {
    temp.querySelectorAll("br").forEach((br) => br.replaceWith("\n"));
  }

  // Handle links
  if (!options.preserveLinks) {
    temp.querySelectorAll("a").forEach((a) => {
      a.replaceWith(a.textContent + (a.href ? ` (${a.href})` : ""));
    });
  }

  // Handle images
  if (!options.preserveImages) {
    temp.querySelectorAll("img").forEach((img) => {
      img.replaceWith(img.alt || "");
    });
  }

  return temp.textContent || temp.innerText || "";
}

export default browserHtmlToPlainText;
