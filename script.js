const menu = document.querySelector(".menu");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", function () {
  menu.classList.toggle("active");
});

window.onload = function () {
  new Splide(".MySplide", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 2.5,
    gap: "2rem",
    pagination: false,
    breapoints: {
      1400: {
        perPage: 2,
      },
      1200: {
        perPage: 1.5,
      },
      500: {
        perPage: 1.5,
      },
    },
  }).mount({ AutoScroll: window.splide.Extensions.AutoScroll });
};

var tstsplide = new Splide(".tst_splide", {
  type: "loop",
  drag: "free",
  focus: "center",
  perPage: 3,
  gap: "2rem",
  pagination: false,
  autoplay: true,
  loop: true,
  perMove: 1,
  breakpoints: {
    1200: {
      perPage: 2,
    },
    900: {
      perPage: 1.5,
    },
    500: {
      perPage: 1,
    },
  },
});
tstsplide.mount();
