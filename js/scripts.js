//Tittle
function writer() {
  const title = document.querySelector("h1");
  const toArray = title.innerHTML.split("");
  title.innerHTML = "";
  toArray.forEach((letter, i) => {
    setTimeout(() => (title.innerHTML += letter), 80 * i);
  });
}

writer();

//Scroll
const headerList = document.querySelectorAll(".header-list-item a");

headerList.forEach((item) => {
  item.addEventListener("click", smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 60;
  scrollToPosition(to);
}

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}
