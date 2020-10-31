/**
 * Pluralize text
 * @param {number} number
 * @param {string[]} values
 * @return {string}
 */
export default function transChoice(number, values) {
  const str = number.toString();
  return /^([\d]*[^1])?1$/.test(str) ? values[0]
    : /^([\d]*[^1])?[2-4]$/.test(str) ? values[1]
      : values[2];
};
