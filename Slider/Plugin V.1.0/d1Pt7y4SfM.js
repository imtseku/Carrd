const imSlider = document.querySelectorAll(".im-slider, .im-slider-reverse");

// Function to clone an element and its descendants
function cloneElementWithDescendants(element, numClones) {
  const clonedElements = [];
  for (let i = 0; i < numClones; i++) {
    const clone = element.cloneNode(true);
    element.parentNode.appendChild(clone);
    clonedElements.push(clone);
  }
  return clonedElements;
}

// Cloning all descendants inside the first "u" or "a" element 5 times
imSlider.forEach((imChild) => {
  const uOrAElement = imChild.querySelector("*");
  if (uOrAElement) {
    const descendants = Array.from(uOrAElement.querySelectorAll("*"));
    const numClones = 3;
    const totalClones = descendants.length * numClones;

    for (let i = 0; i < totalClones; i++) {
      const index = i % descendants.length;
      const clonedElement = cloneElementWithDescendants(descendants[index], 1);
    }
  }
});

// Cloning the first "u" or "a" element directly
imSlider.forEach((imChild) => {
  const firstUOrAElement = imChild.querySelector("*");
  if (firstUOrAElement) {
    const clonedElement = cloneElementWithDescendants(firstUOrAElement, 1);
  }
});

for (let i = 0; i < imSlider.length; i++) {
  const imSliderChildren = imSlider[i].children;

  Array.from(imSliderChildren).forEach((child) => {
    child.style.animationDuration = sliderStyle.speed;
  });

  imSlider[i].style.color = sliderStyle["text color"];
  imSlider[i].style.backgroundColor = sliderStyle["background color"];

  if (imSlider[i].querySelector("a")) {
    imSlider[i].addEventListener("mouseover", function () {
      this.style.color = sliderStyle["hover text color"];
      this.style.backgroundColor = sliderStyle["hover background color"];
    });

    imSlider[i].addEventListener("mouseout", function () {
      this.style.color = sliderStyle["text color"];
      this.style.backgroundColor = sliderStyle["background color"];
    });
  }
}

imSlider.forEach((el) => {
  el.style.setProperty("--im-slider-gap", sliderStyle.space);
});
