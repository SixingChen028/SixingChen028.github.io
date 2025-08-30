// Highlight the active nav item based on URL path
(function(){
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a=>{
    const target = a.getAttribute('href') || '';
    if ((here === 'index.html' && (target === '/' || target === '' || target === 'index.html')) ||
        (target && target === here)) {
      a.classList.add('active');
    }
    // Also treat root-relative links '/' as index
    if (location.pathname === '/' && (target === '/' || target === 'index.html')) {
      a.classList.add('active');
    }
  });
})();
