let nav = getComputedStyle(document.getElementsByClassName("pg-nav")[0]);
// console.log(nav.right < "0px");

// $("#menu-btn").on("click", function () {
//   if (nav.display === "none") {
//     $(".pg-nav").css("display", "inline-block");
//   } else {
//     $(".pg-nav").css("display", "none");
//   }
// });
$("#menu-btn").on("click", function () {
  if (nav.right < "0px") {
    $(".pg-nav").css("right", "0");
  } else {
    $(".pg-nav").css("right", "-250px");
  }
});

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1500,
  speedAsDuration: true,
});

document.addEventListener("click", function (e) {
  if (e.target != "nav.pg-nav") {
    console.log(e);
    if (nav.right == "0px") $(".pg-nav").css("right", "-250px");
  }
});
