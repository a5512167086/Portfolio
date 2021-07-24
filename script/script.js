const text = document.querySelectorAll(".thePaths");
const lastWord = document.querySelector("#ninth");
const animation = document.querySelector("div.animation");

for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

lastWord.addEventListener("animationend", () => {
  animation.style =
    "transition: all 1.5s ease; opacity: 0; pointer-events: none;";
});
