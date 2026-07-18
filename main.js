
const slides=[...document.querySelectorAll('.slide')],dots=[...document.querySelectorAll('.dot')];
let i=0,t;
function show(n){
  slides[i]?.classList.remove('active');
  dots[i]?.classList.remove('active');
  i=(n+slides.length)%slides.length;
  slides[i]?.classList.add('active');
  dots[i]?.classList.add('active');
}
function auto(){clearInterval(t);t=setInterval(()=>show(i+1),6500)}
document.querySelector('.next')?.addEventListener('click',()=>{show(i+1);auto()});
document.querySelector('.prev')?.addEventListener('click',()=>{show(i-1);auto()});
dots.forEach((d,n)=>d.addEventListener('click',()=>{show(n);auto()}));
document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.navlinks')?.classList.toggle('open'));
auto();
