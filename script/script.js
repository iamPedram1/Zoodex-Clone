// Burger Menu
const dropDownMenu = document.getElementById("dropDown");

dropDownMenu.addEventListener("click", () => {
  const dropDownContent = document.querySelector(".dropdown__content");
  if (dropDownContent.classList.contains("dropdown__contentShow")) {
    dropDownContent.classList.remove("dropdown__contentShow");
  } else {
    dropDownContent.classList.add("dropdown__contentShow");
  }
});

// Show Extra Card
const showExtraBtn = document.querySelector(".show__more");
showExtraBtn.addEventListener("click", () => {
  const extra = document.querySelectorAll(".extraCards");
  const showMoreText = document.getElementById("showMoreText");
  const chevronIcon = document.getElementById("chevronIcon");
  extra.forEach((div) => {
    if (div.classList.contains("showExtra")) {
      div.classList.remove("showExtra");
      showMoreText.innerText = "نمایش بیشتر";
      chevronIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
    } else {
      showMoreText.innerText = "نمایش کمتر";
      chevronIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
      div.classList.add("showExtra");
    }
  });
});
