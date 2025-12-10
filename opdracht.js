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

  // Als geen keuze is opgeslagen → toon melding
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
