browser.storage.local.get('settings').then((data = {}) => {
  const adsRemover = data?.settings?.['ads-remover'] || false;

  if (adsRemover) removeAds();
});

function removeAds() {
  const ads = [
    document.querySelector('.topbanner-img'),
    document.querySelector('.advertorials'),
    ...document.querySelectorAll('[class*="banner300x250"]'),
  ];

  const kwamamazaAds = Array.from(
    document.querySelectorAll('[href*="kwamamaza"]')
  );
  ads.push(...kwamamazaAds.map((ad) => ad?.parentElement));

  const titleAds = Array.from(document.querySelectorAll('.title-ads'));
  ads.push(...titleAds.map((ad) => ad?.parentElement));

  const adBanners = Array.from(
    document.querySelectorAll('[src*="ads300x250"]')
  );
  ads.push(...adBanners.map((ad) => ad?.parentElement));

  ads.forEach((ad) => {
    ad?.remove();
  });
}
