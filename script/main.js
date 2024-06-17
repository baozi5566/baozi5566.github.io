let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/nlnlpig.png") {
    myImage.setAttribute("src", "images/jstest.jpg");
  } else {
    myImage.setAttribute("src", "images/nlnlpig.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName){
        setUserName();
    }else{ 
    localStorage.setItem("name", myName);
    myHeading.textContent = "歡迎你的到來，" + myName;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "歡迎你的到來，" + storedName;
  }

  myButton.onclick = function () {
    setUserName();
  };