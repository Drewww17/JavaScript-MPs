function replaceWord() {
    const sentence = document.getElementById("sentence").value;
    const oldWord = document.getElementById("old-word").value;
    const newWord = document.getElementById("new-word").value;
    const outputBox = document.getElementById("replace-output");

    const result = sentence.replace(oldWord, newWord);

    outputBox.value = result;
}

