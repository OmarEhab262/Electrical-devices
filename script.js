var link = document.querySelector(".menu-slide");
var icon = document.querySelector(".icon");
icon.addEventListener("click", () => {
  link.classList.toggle("show");
});
const imageElement = document.getElementById("myImage");
const imageSources = [
  "images/iphone1.png",
  "images/ipad3.png",
  "images/iwatch3.png",
];
let currentIndex = 0;
let timerId;

function changeImage() {
  if (currentIndex === imageSources.length) {
    currentIndex = 0;
  }
  imageElement.src = imageSources[currentIndex];
  currentIndex++;
}

function startTimer() {
  timerId = setInterval(changeImage, 2500);
}

function stopTimer() {
  clearInterval(timerId);
  imageElement.src = imageSources[0];
}

startTimer();
let div = document.querySelector(".uuu");
div.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
window.onscroll = function () {
  if (window.scrollY >= 1000) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
};

var ones = document.querySelector(".ones");
var twos = document.querySelector(".twos");
var threes = document.querySelector(".threes");
var oneee = document.querySelector(".oneee");
var twoo = document.querySelector(".twoo");
var threee = document.querySelector(".threee");

ones.onclick = function () {
  oneee.classList.add("showw");
  oneee.classList.remove("disss");
  twoo.classList.add("disss");
  threee.classList.add("disss");
};
twos.onclick = function () {
  oneee.classList.add("disss");
  twoo.classList.add("showw");
  twoo.classList.remove("disss");
  threee.classList.add("disss");
};
threes.onclick = function () {
  oneee.classList.add("disss");
  twoo.classList.add("disss");
  threee.classList.add("showw");
  threee.classList.remove("disss");
};

const zero = document.querySelector(".zero");

zero.onclick = function () {
  const iphone = document.querySelectorAll(".iphone");
  const ipad = document.querySelectorAll(".ipad");
  const iwatch = document.querySelectorAll(".iwatch");
  const imac = document.querySelectorAll(".imac");

  for (let i = 0; i < 100; i++) {
    iphone[i].classList.add("show");
    ipad[i].classList.add("show");
    iwatch[i].classList.add("show");
    imac[i].classList.add("show");
    oneee.classList.add("showw");
    oneee.classList.remove("disss");
    twoo.classList.add("disss");
    threee.classList.add("disss");
  }
};
const one = document.querySelector(".one");

one.onclick = function () {
  const iphone = document.querySelectorAll(".iphone");
  const ipad = document.querySelectorAll(".ipad");
  const iwatch = document.querySelectorAll(".iwatch");
  const imac = document.querySelectorAll(".imac");

  for (let i = 0; i < iphone.length; i++) {
    iphone[i].classList.add("show");
    ipad[i].classList.remove("show");
    imac[i].classList.remove("show");
    iwatch[i].classList.remove("show");
    ipad[i].classList.add("hidden");
    iwatch[i].classList.add("hidden");
    imac[i].classList.add("hidden");
    oneee.classList.add("showw");
    twoo.classList.add("showw");
    threee.classList.add("showw");
    oneee.classList.remove("disss");
    twoo.classList.remove("disss");
    threee.classList.remove("disss");
  }
};
const two = document.querySelector(".two");

two.onclick = function () {
  const iphone = document.querySelectorAll(".iphone");
  const ipad = document.querySelectorAll(".ipad");
  const iwatch = document.querySelectorAll(".iwatch");
  const imac = document.querySelectorAll(".imac");

  for (let i = 0; i < ipad.length; i++) {
    iphone[i].classList.add("hidden");
    ipad[i].classList.add("show");
    iphone[i].classList.remove("show");
    imac[i].classList.remove("show");
    iwatch[i].classList.remove("show");
    iwatch[i].classList.add("hidden");
    imac[i].classList.add("hidden");
    oneee.classList.add("showw");
    twoo.classList.add("showw");
    threee.classList.add("showw");
    oneee.classList.remove("disss");
    twoo.classList.remove("disss");
    threee.classList.remove("disss");
  }
};
const three = document.querySelector(".three");

three.onclick = function () {
  const iphone = document.querySelectorAll(".iphone");
  const ipad = document.querySelectorAll(".ipad");
  const iwatch = document.querySelectorAll(".iwatch");
  const imac = document.querySelectorAll(".imac");

  for (let i = 0; i < imac.length; i++) {
    iphone[i].classList.add("hidden");
    ipad[i].classList.remove("show");
    iphone[i].classList.remove("show");
    imac[i].classList.add("show");
    iwatch[i].classList.remove("show");
    iwatch[i].classList.add("hidden");
    ipad[i].classList.add("hidden");
    oneee.classList.add("showw");
    twoo.classList.add("showw");
    threee.classList.add("showw");
    oneee.classList.remove("disss");
    twoo.classList.remove("disss");
    threee.classList.remove("disss");
  }
};
const four = document.querySelector(".four");

four.onclick = function () {
  const iphone = document.querySelectorAll(".iphone");
  const ipad = document.querySelectorAll(".ipad");
  const iwatch = document.querySelectorAll(".iwatch");
  const imac = document.querySelectorAll(".imac");

  for (let i = 0; i < iwatch.length; i++) {
    iphone[i].classList.add("hidden");
    ipad[i].classList.remove("show");
    iphone[i].classList.remove("show");
    iwatch[i].classList.add("show");
    imac[i].classList.remove("show");
    imac[i].classList.add("hidden");
    ipad[i].classList.add("hidden");
    oneee.classList.add("showw");
    twoo.classList.add("showw");
    threee.classList.add("showw");
    oneee.classList.remove("disss");
    twoo.classList.remove("disss");
    threee.classList.remove("disss");
  }
};

let cont = 0;
var contt = document.querySelector(".cooo");
var dddds = document.querySelector(".dddds");

const buttons = document.querySelectorAll("h4");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    cont++;
    contt.innerHTML = cont;
    contt.style.display = "block";
    dddds.innerHTML = cont;
    dddds.style.display = "block";
  });
});

const counters = document.querySelectorAll(
  ".NEWS .container .cards-About .card"
);

// Loop through each element and add a click event listener to its button
counters.forEach((counter) => {
  const incrementButton = counter.querySelector(".like");
  const counterValue = counter.querySelector(".ttt");

  let isIncrementing = true; // Initialize the state of the button to "increment"

  // Add a click event listener to the button
  incrementButton.addEventListener("click", () => {
    // Get the current count value, or 0 if it's not a valid integer
    const count = parseInt(counterValue.textContent) || 0;

    // Toggle the state of the button and update the count
    if (isIncrementing) {
      counterValue.textContent = count + 1;
    } else {
      counterValue.textContent = count - 1;
    }

    isIncrementing = !isIncrementing; // Toggle the state of the button
  });
});

counters.forEach((counter) => {
  const incrementButton = counter.querySelector(".submit");
  const counterValue = counter.querySelector(".num");
  const input = counter.querySelector(".foot input[type='text']");

  let isIncrementing = true; // Initialize the state of the button to "increment"

  // Add a click event listener to the button
  incrementButton.addEventListener("click", () => {
    // Get the current count value, or 0 if it's not a valid integer
    if (input.value === "") {
    } else {
      const count = parseInt(counterValue.textContent) || 0;

      // Toggle the state of the button and update the count
      input.value = "";
      counterValue.textContent = count + 1;
    }
    isIncrementing = !isIncrementing; // Toggle the state of the button
  });
});
