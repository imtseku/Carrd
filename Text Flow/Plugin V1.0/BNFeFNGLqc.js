const textFlow = document.querySelectorAll(".imtf, .imtf-right, .imtf-left");

// Function to clone an element and its descendants
function textFlowCloner(cloneTarget, cloneNum) {
  const clonedElements = [];
  for (let i = 0; i < cloneNum; i++) {
    const clone = cloneTarget.cloneNode(true);
    cloneTarget.parentNode.appendChild(clone);
    clonedElements.push(clone);
  }
  return clonedElements;
}

// Cloning all descendants inside the first child element cloneNum times
textFlow.forEach((textFlowChildCloner) => {
  const textFlowChild = textFlowChildCloner.querySelector("*");
  if (textFlowChild) {
    const textFlowGrandChild = Array.from(textFlowChild.querySelectorAll("*"));
    const cloneNum = textFlowStyle["duplicate"];
    const totalClones = textFlowGrandChild.length * cloneNum;

    for (let i = 0; i < totalClones; i++) {
      const cloneIndex = i % textFlowGrandChild.length;
      const clonedElement = textFlowCloner(textFlowGrandChild[cloneIndex], 1);
    }
  }
});

// Cloning the first child element directly
textFlow.forEach((textFlowChildCloner) => {
  const textFlowFirstChild = textFlowChildCloner.querySelector("*");
  if (textFlowFirstChild) {
    const clonedElement = textFlowCloner(textFlowFirstChild, 1);
  }
});

// Style Customization
for (let i = 0; i < textFlow.length; i++) {
  const textFlowChildren = textFlow[i].children;

  Array.from(textFlowChildren).forEach((child) => {
    child.style.animationDuration = textFlowStyle.duration;
  });

  textFlow[i].style.color = textFlowStyle["text color"];
  textFlow[i].style.backgroundColor = textFlowStyle["background color"];

  if (textFlow[i].querySelector("a")) {
    textFlow[i].addEventListener("mouseover", function () {
      this.style.color = textFlowStyle["hover text color"];
      this.style.backgroundColor = textFlowStyle["hover background color"];
    });

    textFlow[i].addEventListener("mouseout", function () {
      this.style.color = textFlowStyle["text color"];
      this.style.backgroundColor = textFlowStyle["background color"];
    });
  }
}

textFlow.forEach((el) => {
  el.style.setProperty("--text-flow-gap", textFlowStyle.space);
});
