/**
 * Function that parse an string like Lorem ipsum
 *
 * @param value Value to parse
 * @return string
*/
export default (value: string): string => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};
