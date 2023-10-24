function updateCounts() {
  const text = document.getElementById('textInput').value;

  const charWithSpaces = text.length;
  const charWithoutSpaces = text.replace(/ /g, '').length;
  const spacesCount = (text.match(/ /g) || []).length;
  const linesCount = (text.match(/\n/g) || []).length + 1;
  const wordsCount = (text.split(/\s+/) || []).filter(Boolean).length;

  document.getElementById('charWithSpaces').textContent = charWithSpaces;
  document.getElementById('charWithoutSpaces').textContent = charWithoutSpaces;
  document.getElementById('spacesCount').textContent = spacesCount;
  document.getElementById('linesCount').textContent = linesCount;
  document.getElementById('wordsCount').textContent = wordsCount;
}
