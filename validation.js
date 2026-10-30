function validateServiceRequest(category, description) {
  const validCategory = Boolean(category && category.trim());
  const validDescription =
    Boolean(description && description.trim().length >= 10);
  return validCategory && validDescription;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { validateServiceRequest };
}
