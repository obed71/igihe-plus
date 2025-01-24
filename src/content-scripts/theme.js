browser.storage.local.get('settings').then((data = {}) => {
  const theme = data?.settings?.['theme'] || false;

  if (!theme) return null;
  document.body.classList.add('theme');

  const searchBoxEl = document.querySelector('.search-box');
  searchBoxEl.parentElement.parentElement.classList.add('search-box-theme');
});
