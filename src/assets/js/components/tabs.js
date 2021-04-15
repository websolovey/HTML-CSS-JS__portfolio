"use strict";

const servicesNavLinks = document.querySelectorAll(".services__link"),
  servicesTabs = document.querySelectorAll(".services__tab"),
  servicesLinkParent = document.querySelector(".services__nav");

function hideTabs() {
  servicesTabs.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("show", "fade");
  });
  servicesNavLinks.forEach((item) => {
    item.classList.remove("active_link");
  });
}
function showTabs(i = 0) {
  servicesTabs[i].classList.add("show", "fade");
  servicesTabs[i].classList.remove("hide");
  servicesNavLinks[i].classList.add("active_link");
}

hideTabs();
showTabs();

servicesLinkParent.addEventListener("click", (event) => {
  event.preventDefault();
  let target = event.target;
  if (target && target.classList.contains("services__link")) {
    servicesNavLinks.forEach((item, i) => {
      if (target == item) {
        hideTabs();
        showTabs(i);
      }
    });
  }
});
