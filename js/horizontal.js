const wrapper = document.querySelector(".horizontal-wrapper");
const track = document.querySelector(".horizontal-track");

let start, end, maxTranslate;

// Beregn værdier
function calculateScrollValues() {
  start = wrapper.offsetTop;
  end = start + wrapper.offsetHeight - window.innerHeight;
  maxTranslate = track.scrollWidth - window.innerWidth;
}

// Håndter scroll
function handleScroll() {
  const scrollY = window.scrollY;

  if (scrollY >= start && scrollY <= end) {
    const progress = (scrollY - start) / (end - start);
    track.style.transform = `translateX(-${progress * maxTranslate}px)`;
  } else if (scrollY < start) {
    track.style.transform = `translateX(0px)`;
  } else {
    track.style.transform = `translateX(-${maxTranslate}px)`;
  }
}

// Throttle resize for bedre performance
let resizeTimeout;
function handleResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    calculateScrollValues();
    handleScroll(); // Opdater position efter resize
  }, 100);
}

// Initial beregning
calculateScrollValues();

// Event listeners
window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleResize);
