function toKebabCase(input) {
  if (input === null || input === undefined) {
    throw new Error("Input cannot be null or undefined");
  }

  if (typeof input !== 'string') {
    throw new Error("Input must be a string");
  }

  if (input.trim() === '') {
    throw new Error("Input cannot be empty");
  }

  return input
    .toLowerCase()
    .trim()
    .replace(/[_\s]+/g, '-');
}
