
const header=document.querySelector("header");
window.addEventListener("scroll",()=>header?.classList.toggle("scrolled",window.scrollY>24));
document.querySelector(".menu")?.addEventListener("click",()=>document.querySelector(".navlinks")?.classList.toggle("open"));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

(() => {
  const slides = [...document.querySelectorAll(".hero-slide")];
  const dots = [...document.querySelectorAll(".hero-dot")];
  const prev = document.querySelector(".hero-prev");
  const next = document.querySelector(".hero-next");
  if (!slides.length) return;
  let current = 0;
  let timer;
  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
    clearInterval(timer);
    timer = setInterval(() => show(current + 1), 6000);
  };
  prev?.addEventListener("click", () => show(current - 1));
  next?.addEventListener("click", () => show(current + 1));
  dots.forEach(dot => dot.addEventListener("click", () => show(Number(dot.dataset.target))));
  show(0);
})();
