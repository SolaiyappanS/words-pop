function getDarkColor() {
  var color = "#";
  for (var i = 0; i < 2; i++) {
    color += 3 + Math.floor(Math.random() * 4);
  }
  for (var i = 0; i < 2; i++) {
    color += 2 + Math.floor(Math.random() * 2);
  }
  for (var i = 0; i < 2; i++) {
    color += 7 + Math.floor(Math.random() * 3);
  }
  return color;
}

function randomWord() {
  const word = document.createElement("div");
  word.innerText = randomWords[Math.floor(Math.random() * randomWords.length)];
  word.style.backgroundColor = getDarkColor();
  document.getElementById("pop-box").appendChild(word);
}

function generateRandomWords() {
  setInterval(randomWord, 2500);
  document.getElementById("inputText").focus();
}

function popElement(str) {
  const popBox = document.getElementById("pop-box");
  const wordBoxes = document.querySelectorAll("#pop-box > div");

  for (var i = 0; i < wordBoxes.length; i++) {
    if (wordBoxes[i].textContent.toLowerCase() == str.toLowerCase()) {
      popBox.children[i].style.backgroundColor = "#cc1122";
      popBox.children[i].style.fontSize = "0px";
      setTimeout(() => {
        popBox.removeChild(popBox.children[i]);
      }, 250);
      break;
    }
  }
}
