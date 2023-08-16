// TEXT FLOW V1.0.0 | CARRD PLUGIN
// Made by Tseku | www.imtseku.com | © imtseku, 2023

const textFlowOptions = {
  "duplicate": "2",
  "space": "1",
  "duration": "60s"
};

// 3.4 The content of the stylesheet
const styleSheetContent = `
/* 
  TEXT FLOW V1.0.0 | CARRD PLUGIN
  Made by Tseku | www.imtseku.com | © imtseku, 2023 
*/

:root {
  --imtf-gap: ${textFlowOptions["space"] + "rem !important"};
}

:is(.imtf,
  .imtf-right,
  .imtf-left)>* {
  animation-duration: ${textFlowOptions["duration"] + " !important"};
}
`;

// 1.1 The element
const textFlow = document.querySelectorAll(".imtf, .imtf-right, .imtf-left");

// 2.1 Function to clone a child element.
function textFlowCloner(cloneTarget, cloneNum) {
  const clonedElements = [];
  for (let i = 0; i < cloneNum; i++) {
    const clone = cloneTarget.cloneNode(true);
    cloneTarget.parentNode.appendChild(clone);
    clonedElements.push(clone);
  }
  return clonedElements;
}

// 2.2 Cloning a grandchild element 5 times.
textFlow.forEach((textFlowChildCloner) => {
  const textFlowChild = textFlowChildCloner.querySelector("*");
  if (textFlowChild) {
    const textFlowGrandChild = Array.from(textFlowChild.querySelectorAll("*"));
    const cloneNum = textFlowOptions["duplicate"];
    const totalClones = textFlowGrandChild.length * cloneNum;

    for (let i = 0; i < totalClones; i++) {
      const cloneIndex = i % textFlowGrandChild.length;
      const clonedElement = textFlowCloner(textFlowGrandChild[cloneIndex], 1);
    }
  }
});

// 2.3 Cloning the first element double.
textFlow.forEach((textFlowChildCloner) => {
  const textFlowFirstChild = textFlowChildCloner.querySelector("*");
  if (textFlowFirstChild) {
    const clonedElement = textFlowCloner(textFlowFirstChild, 1);
  }
});

// 3.1 Appends CSS content to the head of the site.
function appendStyleSheet(id, content) {
  if (!document.querySelector("#" + id)) {
    var head = document.head || document.getElementsByTagName("head")[0];
    // console.log("head");0
    head.appendChild(createStyleElement(id, content));
  }
}

// 3.2 Creates the style element.
function createStyleElement(id, content) {
  var style = document.createElement("style");
  style.type = "text/css";
  style.id = id;

  if (style.styleSheet) {
    style.styleSheet.cssText = content;
  } else {
    style.appendChild(document.createTextNode(content));
  }
  return style;
}

// 3.3 Append stylesheet.
appendStyleSheet("www.imtseku.com", styleSheetContent);
