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

    debugger;
    const typesItemPrice = document.querySelectorAll(".types-item__price");
    const abonementsItemChoosen = document.querySelector(
      ".abonements__item_choosen_yes"
    );

    if (abonementsItemChoosen.textContent === "6 месяцев") {
      for (let i = 0; i < 2; i++) {
        typesItemPrice[i].innerHTML = "15000";
      }
      for (let j = 2; j < 4; j++) {
        typesItemPrice[j].innerHTML = "11000";
      }
      for (let k = 4; k < 6; k++) {
        typesItemPrice[k].innerHTML = "9000";
      }
    } else if (abonementsItemChoosen.textContent === "12 месяцев") {
      for (let i = 0; i < 2; i++) {
        typesItemPrice[i].innerHTML = "35000";
      }
      for (let j = 2; j < 4; j++) {
        typesItemPrice[j].innerHTML = "21000";
      }
      for (let k = 4; k < 6; k++) {
        typesItemPrice[k].innerHTML = "23000";
      }
    } else if (abonementsItemChoosen.textContent === "1 месяц") {
      for (let i = 0; i < 2; i++) {
        typesItemPrice[i].innerHTML = "5000";
      }
      for (let j = 2; j < 4; j++) {
        typesItemPrice[j].innerHTML = "1700";
      }
      for (let k = 4; k < 6; k++) {
        typesItemPrice[k].innerHTML = "2700";
      }
    }

    for (let i = 1; i < typesItemPrice.length; i=i+2) {
      typesItemPrice[i].innerHTML += "<span>&#8381;</span>";
    }
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
