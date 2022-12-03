const images = document.querySelectorAll(".box");
document.body.scrollTop = 0;

const myImageObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("add-anim");
      }
    });
  },
  {
    threshold: [0.1],
  }
);

for (var image of images) {
  myImageObserver.observe(image);
}
