// utils/imageHelpers.js
export function safeImageSrc(img) {
  if (!img) return null; // null | undefined | ''
  if (typeof img === "string") {
    if (img.trim() === "") return null;
    return img; // string path (public or external)
  }
  // imported static file (Next's StaticImport) is usually a non-empty object
  if (typeof img === "object" && Object.keys(img).length > 0) return img;
  return null;
}
