
const slides=[...document.querySelectorAll('.slide')];
let current=0,timer;
function show(n){
  if(!slides.length) return;
  slides[current].classList.remove('active');
  current=(n+slides.length)%slides.length;
  slides[current].classList.add('active');
}
function auto(){clearInterval(timer);timer=setInterval(()=>show(current+1),6500)}
document.querySelector('.next')?.addEventListener('click',()=>{show(current+1);auto()});
document.querySelector('.prev')?.addEventListener('click',()=>{show(current-1);auto()});
document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.navlinks')?.classList.toggle('open'));
auto();

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
