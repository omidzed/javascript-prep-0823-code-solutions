/* exported getWords */

function getWords(string) {
  if (string.trim() === '') {
    return [];
  }

  const wordsArray = string.split(' ');
  return wordsArray;
}
