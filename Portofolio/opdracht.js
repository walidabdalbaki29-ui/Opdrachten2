
//data op opdracht.js
var countDownDate = new Date("jul 29 , 2026 23:59:59").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navMobile = document.getElementById("nav-mobile");

hamburger.addEventListener("click", () => {
  navMobile.classList.toggle("show");
});

// DARK MODE
const darkSwitch = document.getElementById("darkSwitch");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  darkSwitch.checked = true;
}

darkSwitch.addEventListener("change", () => {
  if (darkSwitch.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});


// COOKIE MELDING
document.addEventListener("DOMContentLoaded", () => {
  const cookieBox = document.getElementById("cookieBox");
  const acceptBtn = document.getElementById("acceptCookies");
  const declineBtn = document.getElementById("declineCookies");

  console.log("cookieBox:", cookieBox);
  console.log("acceptBtn:", acceptBtn);
  console.log("declineBtn:", declineBtn);

  if (!localStorage.getItem("cookieChoice")) {
    cookieBox.style.display = "flex";
  }

  acceptBtn.addEventListener("click", () => {
    console.log(" cookie accepted");
    localStorage.setItem("cookieChoice", "accepted");
    cookieBox.style.display = "none";
  });

  declineBtn.addEventListener("click", () => {
    console.log("declined");
    localStorage.setItem("cookieChoice", "declined");
    cookieBox.style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {

  function updateGreeting() {
    const greeting = document.getElementById("greeting");
    if (!greeting) return; 

    const hour = new Date().getHours();
    let text = "";
    let emoji = "";

    if (hour >= 5 && hour < 12) {
      text = "Goedemorgen";
      emoji = "🌤️";
    } else if (hour >= 12 && hour < 18) {
      text = "Goedemiddag";
      emoji = "🌞";
    } else if (hour >= 18 && hour < 23) {
      text = "Goedenavond";
      emoji = "🌆";
    } else {
      text = "Goedenacht";
      emoji = "🌙";
    }

    greeting.textContent = `${emoji} ${text}!`;
    greeting.style.fontSize = "1.8rem";
    greeting.style.fontWeight = "600";
    greeting.style.marginBottom = "10px";
    greeting.style.fontFamily = "sans-serif";
  }
  updateGreeting();
});
