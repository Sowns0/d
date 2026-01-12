(function(){
  const pages = ['home','products','about'];
  const links = document.querySelectorAll('.nav-link');

  function showPage(pageId, focus=true){
    pages.forEach(p=>{
      const el = document.getElementById(p);
      if(!el) return;
      if(p === pageId){
        el.hidden = false;
        el.scrollIntoView({behavior:'smooth', block:'start'});
        if(focus) el.focus({preventScroll:true});
      } else {
        el.hidden = true;
      }
    });

    links.forEach(a=> a.classList.toggle('active', a.dataset.route === pageId));
    if(location.hash !== '#'+pageId) history.replaceState(null,'', '#'+pageId);
  }

  const initial = (location.hash && pages.includes(location.hash.replace('#','')))
    ? location.hash.replace('#','')
    : 'home';

  pages.forEach(p => {
    const el = document.getElementById(p);
    if(el) el.hidden = true;
  });
  showPage(initial,false);

  document.querySelectorAll('[data-route]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const target = a.dataset.route;
      if(target) showPage(target);
    });
  });

  window.addEventListener('hashchange', ()=> {
    const h = location.hash.replace('#','');
    if(pages.includes(h)) showPage(h);
  });

  document.getElementById('quickSend').addEventListener('click', ()=>{
    const name = document.getElementById('cname').value.trim();
    const email = document.getElementById('cemail').value.trim();
    const msg = document.getElementById('cmsg').value.trim();
    if(!name || !email || !msg){
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }
    alert('Cảm ơn ' + name + '! Chúng tôi đã nhận yêu cầu.');
    document.getElementById('cname').value='';
    document.getElementById('cemail').value='';
    document.getElementById('cmsg').value='';
  });

  document.querySelectorAll('[data-action="quickview"]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      alert('Xem chi tiết sản phẩm — demo.');
    });
  });

})();
