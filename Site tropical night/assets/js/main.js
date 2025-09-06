// Countdown + UI interactions
(function(){
  const target = new Date('2025-10-31T21:00:00-04:00').getTime();
  const el = { d:document.getElementById('dd'), h:document.getElementById('hh'), m:document.getElementById('mm'), s:document.getElementById('ss') };
  function pad(n){ return String(n).padStart(2,'0'); }
  function tick(){
    const now = Date.now();
    let diff = Math.max(0, target - now);
    const days = Math.floor(diff / 86400000); diff -= days*86400000;
    const hrs = Math.floor(diff / 3600000); diff -= hrs*3600000;
    const mins = Math.floor(diff / 60000); diff -= mins*60000;
    const secs = Math.floor(diff / 1000);
    el.d.textContent = pad(days);
    el.h.textContent = pad(hrs);
    el.m.textContent = pad(mins);
    el.s.textContent = pad(secs);
    if(target - now <= 0){ clearInterval(timer); }
  }
  const timer = setInterval(tick, 1000); tick();
})();

// (Navigation + newsletter scripts retirés car éléments supprimés du DOM)
