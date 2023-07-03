/**
 * Hook that copy a text in the clipboard.
 *
 * @return React.ReactElement <Main/>
 */
const useClipboard = (): { copyToClipboard: (text: string) => void } => {
  const copyToClipboard = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  return { copyToClipboard };
};

export default useClipboard;
