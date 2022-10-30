// changing navbar style on scroll
function naveStyleOnScroll() {
  if (document.documentElement.scrollTop > 400) {
    document.getElementById("navbar").classList.add("noTransparent");
  } else {
    document.getElementById("navbar").classList.remove("noTransparent");
  }
}
window.onscroll = function () {
  naveStyleOnScroll();
};
// countUp for statistics
window.onload = function () {
  let usersNumber = new CountUp("users-number", 0, 10000);
  usersNumber.start();
  let videosNumber = new CountUp("videos-number", 0, 30);
  videosNumber.start();
  let appsNumber = new CountUp("apps-number", 0, 100);
  appsNumber.start();
  let websitesNumber = new CountUp("websites-number", 0, 250);
  websitesNumber.start();
};
// copyright year
document.getElementById("thisYear").innerHTML = new Date().getFullYear();
// form validation
(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
