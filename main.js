const elements = document.querySelectorAll('.onscroll-favi');

const config = {
  threshold: .2,
};
let observer = new IntersectionObserver(function(entries, self) {
  entries.forEach(entry => {
    const el = entry.target;
    if (entry.isIntersecting) {
      el.classList.add('ready-favi');
      self.unobserve(el);
    }
  });
}, config);

elements.forEach(el => {
  observer.observe(el);
});