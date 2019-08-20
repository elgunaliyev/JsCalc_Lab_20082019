"use strict";
let num, num1;
let btnCustom = document.querySelectorAll(".btn-custom");
let boxResult = document.querySelector(".result");
let boxOperation = document.querySelector(".operation");
let span = boxOperation.children[0];
let clearAll = document.querySelector(".clear-all");
let deleteOnce = document.querySelector(".delete-once");
let dot = document.querySelector(".dot");
dot.classList.add("active");
let operationCustom = document.querySelectorAll(".operation-custom");

let clearBoxOperation = () => {
  boxOperation.children[0].innerHTML = " ";
};

let addToOperationBox = btnValue => {
  let span = boxOperation.children[0];
  if (btnValue !== null) {
    span.innerHTML += btnValue;
    num = parseFloat(span.innerHTML);
  }
  console.log(span);
};

btnCustom.forEach(element => {
  element.addEventListener("click", () => {
    let valueElem = parseInt(element.innerText);
    addToOperationBox(valueElem);
  });
});

dot.addEventListener("click", function() {
  let valueElem;
  if (dot.classList.contains("active")) {
    valueElem = dot.innerText;
  } else {
    valueElem = null;
  }
  dot.classList.remove("active");

  addToOperationBox(valueElem);
});

clearAll.addEventListener("click", () => {
  clearBoxOperation();
});

deleteOnce.addEventListener("click", () => {
  let span = boxOperation.children[0];
  let spanArray = span.innerHTML.split("");
  spanArray.pop();
  let afterDeleted = spanArray.join("");
  if (typeof afterDeleted !== NaN) {
    span.innerHTML = afterDeleted;
  } else {
    clearBoxOperation();
  }
});

let operValue = operationCustom.forEach(element => {
  element.addEventListener("click", () => {
    let valueElem = element.innerText;
    switch (valueElem) {
      case "+":
        let span1 = boxOperation.children[0].innerHTML;
        num = parseInt(span1);
        span.innerHTML += valueElem;
        console.log(num);
        // clearBoxOperation();

        break;
      case "-":
        console.log("it works");
        break;
      case "*":
        console.log("it works");
        break;
      case "/":
        console.log("it works");
        break;
      case "=":
        clearBoxOperation();
        num1 = parseInt(boxOperation.children[0].innerHTML);
        num += num1;
        boxResult.children[0].innerHTML = num;

        console.log(boxResult.children[0].innerHTML);
        break;
      default:
        console.log("it doesn't work");
        break;
    }
  });
});
