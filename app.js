const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("image").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});
// AUTOSLIDING
function slideMovies(movieList) {
  let currentPosition = 0;
  const slideInterval = 3000; // Slide every 3 seconds (adjust as needed)

  function updatePosition() {
      currentPosition -= 30; // Adjust based on item width and spacing
      movieList.style.transform = `translateX(${currentPosition}px)`;

      // Reset position when reaching the end
      if (currentPosition <= -(movieList.scrollWidth - movieList.clientWidth)) {
          currentPosition = 0;
      }
  }

   //Start auto-sliding
  setInterval(updatePosition, slideInterval);
}

// Usage example:
const allMovieLists = document.querySelectorAll('.movie-list');
allMovieLists.forEach((list) => {
  slideMovies(list);
});



//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});