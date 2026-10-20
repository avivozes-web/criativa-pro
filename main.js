gsap.registerPlugin(ScrollTrigger);
const mm=gsap.matchMedia();
// hero intro
gsap.from('.hello',{y:30,opacity:0,duration:.8,ease:'power3.out'});
gsap.from('.name .ln',{yPercent:110,opacity:0,duration:1.1,stagger:.12,ease:'expo.out',delay:.15});
gsap.from('.role,.intro,.ctas',{y:30,opacity:0,duration:.9,stagger:.1,delay:.5,ease:'power3.out'});
gsap.from('#idcard',{y:-260,rotation:-25,duration:1.6,ease:'elastic.out(1,.45)',delay:.4});
gsap.to('#idcard',{rotation:3,duration:2.4,yoyo:true,repeat:-1,ease:'sine.inOut',delay:2});
gsap.from('.ring,.mini',{scale:.6,opacity:0,duration:1,delay:1});
// background: zoom/crop between sections (like the reference)
const bg='#bgimg';
gsap.to(bg,{scale:1.35,yPercent:6,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
gsap.to('.ghost',{xPercent:-30,scrollTrigger:{trigger:'main',start:'top top',end:'bottom bottom',scrub:true}});
gsap.to('.hero-copy',{y:-80,opacity:.2,scrollTrigger:{trigger:'.hero',start:'center center',end:'bottom top',scrub:true}});
// section reveals
gsap.utils.toArray('section:not(.hero) .lbl').forEach(l=>gsap.from(l,{x:-40,opacity:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:l,start:'top 88%'}}));
[['.svc',0.08],['.tool',0.06],['.step',0.1],['.shot',0.07]].forEach(([s,st])=>ScrollTrigger.batch(s,{start:'top 90%',onEnter:b=>gsap.fromTo(b,{y:60,opacity:0,scale:.95},{y:0,opacity:1,scale:1,stagger:st,duration:.8,ease:'power3.out',overwrite:true})}));
gsap.set('.svc,.tool,.step,.shot',{opacity:0});
gsap.from('.panel,.quote',{y:80,opacity:0,duration:1,ease:'power3.out',stagger:.15,scrollTrigger:{trigger:'#ferramentas',start:'top 85%'}});
gsap.from('.feature',{y:80,opacity:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:'.feature',start:'top 88%'}});
mm.add('(min-width:800px)',()=>{gsap.to('#tlfill',{width:'100%',ease:'none',scrollTrigger:{trigger:'.timeline',start:'top 80%',end:'bottom 55%',scrub:true}})});
mm.add('(max-width:799px)',()=>{gsap.to('#tlfill',{height:'100%',ease:'none',scrollTrigger:{trigger:'.timeline',start:'top 75%',end:'bottom 60%',scrub:true}})});
gsap.from('.big',{scale:.7,opacity:0,duration:1.2,ease:'expo.out',scrollTrigger:{trigger:'.final',start:'top 70%'}});
gsap.from('.t1 img',{y:-120,opacity:0,stagger:.12,duration:1,ease:'back.out(1.6)',scrollTrigger:{trigger:'.final',start:'top 70%'}});
gsap.from('.t2 img',{y:120,opacity:0,stagger:.12,duration:1,ease:'back.out(1.6)',scrollTrigger:{trigger:'.final',start:'top 65%'}});
// active nav
const links=[...document.querySelectorAll('#menu a')];
['inicio','servicos','ferramentas','processo','trabalhos'].forEach(id=>ScrollTrigger.create({trigger:'#'+id,start:'top 50%',end:'bottom 50%',onToggle:s=>{if(s.isActive)links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+id))}}));
links.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'})}));
// video
const v=document.getElementById('feat'),pl=v.parentNode;
document.getElementById('playbtn').onclick=()=>v.play();
v.addEventListener('play',()=>pl.classList.add('on'));
document.querySelectorAll('.shot').forEach(s=>s.onclick=()=>{v.currentTime=+s.dataset.t;v.play();pl.scrollIntoView({behavior:'smooth',block:'center'})});
// antes/depois
const va=document.getElementById('vAntes'),vd=document.getElementById('vDepois');
const bp=document.getElementById('baPlay');
bp.onclick=()=>{if(vd.paused){va.currentTime=vd.currentTime;Promise.all([va.play(),vd.play()]).catch(()=>{});bp.textContent='❚❚ Pausar'}else{va.pause();vd.pause();bp.textContent='▶ Reproduzir lado a lado'}};
vd.addEventListener('ended',()=>{va.pause();bp.textContent='▶ Reproduzir lado a lado'});
setInterval(()=>{if(!vd.paused&&Math.abs(va.currentTime-vd.currentTime)>.15)va.currentTime=vd.currentTime},500);
document.getElementById('baSound').onclick=e=>{const on=vd.muted;vd.muted=!on;va.muted=true;e.target.textContent=on?'🔊 Som (depois)':'🔇 Som'};
gsap.set('.can,.bn,.wk',{opacity:0});
ScrollTrigger.batch('.can,.bn,.wk',{start:'top 90%',onEnter:b=>gsap.fromTo(b,{y:50,opacity:0},{y:0,opacity:1,stagger:.07,duration:.7,ease:'power3.out',overwrite:true})});
gsap.from('.ba,.pfinal,.vtable,.vbest',{});
['.ba','.pfinal','.resumo','.vtable','.vbest'].forEach(s=>gsap.from(s,{y:70,opacity:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:s,start:'top 88%'}}));

gsap.utils.toArray('.peek .screen').forEach((el,i)=>gsap.from(el,{y:60,rotationX:35,opacity:0,duration:1,delay:i*.15,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 92%'}}));
gsap.set('.jm',{opacity:0});
ScrollTrigger.batch('.jm',{start:'top 90%',onEnter:b=>gsap.fromTo(b,{x:-40,opacity:0},{x:0,opacity:1,stagger:.1,duration:.7,ease:'power3.out',overwrite:true})});
gsap.to('#jfill',{height:'100%',ease:'none',scrollTrigger:{trigger:'.journey',start:'top 75%',end:'bottom 60%',scrub:true}});
gsap.from('.fast,.dl',{y:40,opacity:0,duration:.8,stagger:.15,scrollTrigger:{trigger:'.fast',start:'top 90%'}});
