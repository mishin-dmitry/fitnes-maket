$(".coaches__list").slick({
  dots: false,
  infinite: true,
  speed: 300,
  variableWidth: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(".comments__list").slick({
  dots: false,
  infinite: true,
  speed: 300,
  variableWidth: true,
  slidesToShow: 1,
  prevArrow: $(".prev_section_comments"),
  nextArrow: $(".next_section_comments")
});

const buyAbonementBtn = document.querySelector(".types-item__button");
const requestBtn = document.querySelector(".aside__button");

buyAbonementBtn.addEventListener("click", function() {
  window.location.href = "#";
});

requestBtn.addEventListener("click", function() {
  window.location.href = "#";
});

const abonementsItems = document.querySelectorAll(".abonements__item");

for (let i = 0; i < abonementsItems.length; i++) {
  clickAbonementsItem(abonementsItems[i]);
}

function toggleUnderline(abonementsItem) {
  for (let i = 0; i < abonementsItems.length; i++) {
    abonementsItems[i].classList.remove("abonements__item_choosen_yes");
  }
  abonementsItem.classList.add("abonements__item_choosen_yes");
}

function clickAbonementsItem(abonementsItem) {
  abonementsItem.addEventListener("click", function() {
    toggleUnderline(abonementsItem);
  });
}

const typesItems = document.querySelectorAll(".types-item");

for (k = 0; k < typesItems.length; k++) {
  clickTypesItem(typesItems[k]);
}

function toggleBorder(typesItem) {
  for (h = 0; h < typesItems.length; h++) {
    typesItems[h].classList.remove("types-item_choosen_yes");
  }

  typesItem.classList.add("types-item_choosen_yes");
}

function clickTypesItem(typesItem) {
  typesItem.addEventListener("click", function() {
    toggleBorder(typesItem);
  });
}
