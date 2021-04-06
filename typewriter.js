let sentence = 'All work and no play makes Homer something something \n';

let letter = 0;
const typer = (string) => {
  if (letter < string.length) {
    for (const char of sentence) {
      setTimeout(() => {
        process.stdout.write(char);
      }, 50 * letter);
      letter++;
    }
  }
};
typer(sentence);