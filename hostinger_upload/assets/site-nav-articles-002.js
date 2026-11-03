(() => {
  const addArticlesLinks = () => {
    const target = document.getElementById('cairo-articles');
    if (!target) return;
    document.querySelectorAll('header nav').forEach(nav => {
      if (nav.querySelector('[data-cairo-articles-link]')) return;
      const link = document.createElement('a');
      link.href = '#cairo-articles';
      link.dataset.cairoArticlesLink = 'true';
      link.textContent = 'Articles';
      link.setAttribute('aria-label', 'Articles & Care Guides');
      link.style.cssText = 'display:inline-flex;align-items:center;justify-content:center;text-decoration:none;cursor:pointer;font:inherit;color:inherit;background:transparent;border:0;padding:.25rem 0;white-space:nowrap;';
      link.addEventListener('click', event => {
        event.preventDefault();
        document.getElementById('cairo-articles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      nav.appendChild(link);
    });
    document.querySelectorAll('footer').forEach(footer => {
      if (footer.querySelector('[data-cairo-articles-footer-link]')) return;
      const link = document.createElement('a');
      link.href = '#cairo-articles';
      link.dataset.cairoArticlesFooterLink = 'true';
      link.textContent = 'Articles & Care Guides';
      link.style.cssText = 'display:inline-block;color:#bae6fd;font-size:.75rem;font-weight:800;text-decoration:none;margin-top:.45rem;cursor:pointer;';
      link.addEventListener('click', event => {
        event.preventDefault();
        document.getElementById('cairo-articles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      const firstList = footer.querySelector('ul');
      if (firstList) {
        const li = document.createElement('li');
        li.appendChild(link);
        firstList.appendChild(li);
      } else footer.appendChild(link);
    });
  };
  const run = () => {
    addArticlesLinks();
    if (document.getElementById('cairo-articles')) observer.disconnect();
  };
  const observer = new MutationObserver(run);
  observer.observe(document.body, { childList: true, subtree: true });
  run();
})();
