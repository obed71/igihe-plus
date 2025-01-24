setInterval(() => {
  browser.storage.local.get('settings').then((data = {}) => {
    const adsRemover = data?.settings?.['ads-remover'] || false;

    if (adsRemover) removeAds();
    else addAds();
  });
}, 0);

const selectors = [
  { selector: '.topbanner-img' },
  { selector: '.advertorials' },
  { selector: '[class*="banner300x250"]', all: true },
  { selector: '[href*="kwamamaza"]', all: true, parent: true },
  { selector: '.title-ads', all: true, parent: true },
  { selector: '.rectangle', all: true, parent: true },
  { selector: '.label-logo > div:nth-child(2)' },
];

function removeAds() {
  const elements = getElements();

  elements.forEach((element) => {
    if (element) element.style.display = 'none';
  });
}

function addAds() {
  const elements = getElements();

  elements.forEach((element) => {
    if (element) element.style.display = '';
  });
}

function getElements() {
  const elements = selectors.map((slct) => {
    if (slct.all && slct.parent) {
      return Array.from(document.querySelectorAll(slct.selector)).map(
        (el) => el.parentElement
      );
    } else if (slct.all) {
      return Array.from(document.querySelectorAll(slct.selector));
    } else {
      return document.querySelector(slct.selector);
    }
  });

  return elements.flatMap((el) => el);
}
