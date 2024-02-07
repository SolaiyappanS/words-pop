const randomColor = ["#3468C0", "#EF4040", "#5AA469", "#FE783F"];

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
  word.style.backgroundColor =
    // randomColor[Math.floor(Math.random() * randomColor.length)];
    getDarkColor();
  document.getElementById("pop-box").appendChild(word);
}

function generateRandomWords() {
  setInterval(randomWord, 2500);
}

function popElement(str) {
  const popBox = document.getElementById("pop-box");
  const wordBoxes = document.querySelectorAll("#pop-box > div");

  for (var i = 0; i < wordBoxes.length; i++) {
    if (wordBoxes[i].textContent == str) {
      // console.log(wordBoxes[i]);
      popBox.removeChild(popBox.children[i]);
      break;
    }
  }
}
