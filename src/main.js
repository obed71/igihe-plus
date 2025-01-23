import Storage from './utils/browser-storage.js';

const settings = new Storage('settings');
const inputEls = document.querySelectorAll('input[type="checkbox"]');

inputEls.forEach(async (inputEl) => {
  const { id } = inputEl;
  const checked = (await settings.read())?.[id];

  if (checked) {
    inputEl.checked = true;
  }

  inputEl.addEventListener('change', async (event) => {
    const { checked } = event.target;

    await settings.update({ [id]: checked });
  });
});
