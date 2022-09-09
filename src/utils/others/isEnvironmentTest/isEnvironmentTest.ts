/**
 * Check if is in environment test
 *
 * @method isEnvironmentTest
 * @return void
*/
export default (): boolean => {
  if (typeof jest !== 'undefined') return true;
  return false;
};
