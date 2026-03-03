(function(){
  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if(!el) return;
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      history.replaceState(null, '', id);
    });
  });

  // Set active nav on scroll
  const sections = ['home','services','about','contact'].map(id=>document.getElementById(id)).filter(Boolean);
  const navLinks = Array.from(document.querySelectorAll('.nav a'));
  const onScroll = () => {
    const y = window.scrollY + 120;
    let current = 'home';
    for(const s of sections){
      if(s.offsetTop <= y) current = s.id;
    }
    navLinks.forEach(l=>{
      l.classList.toggle('active', l.getAttribute('href') === '#'+current);
    });
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();
