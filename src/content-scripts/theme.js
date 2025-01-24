setInterval(() => {
  browser.storage.local.get('settings').then((data = {}) => {
    const theme = data?.settings?.['theme'] || false;

    if (theme) addTheme();
    else removeTheme();
  });
}, 0);

const searchBoxEl = document.querySelector('.search-box');

function addTheme() {
  document.body.classList.add('theme');
  searchBoxEl.parentElement.parentElement.classList.add('search-box-theme');
}

function removeTheme() {
  document.body.classList.remove('theme');
  searchBoxEl.parentElement.parentElement.classList.remove('search-box-theme');
}
