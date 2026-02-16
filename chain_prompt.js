function toKebabCase(str) {
  if (str === null || str === undefined) {
    throw new Error("Input cannot be null or undefined");
  }

  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  if (str.trim() === "") {
    throw new Error("Input cannot be empty");
  }

  return str
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-");
}

module.exports = toKebabCase;
