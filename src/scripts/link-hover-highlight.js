const COLOR_VARS = ['--color-pink', '--color-gold', '--color-green', '--color-indigo'];

function pickRandomVar () {
  return COLOR_VARS[Math.floor(Math.random() * COLOR_VARS.length)];
}

function applyColor (varName) {
  const root = document.documentElement;
  const value = getComputedStyle(root).getPropertyValue(varName) || '';
  root.style.setProperty('--other-links-decoration-color', value);
}

function onEnter () {
  applyColor(pickRandomVar());
  document.body.classList.add('link-hover-active');
}
function onLeave () {
  document.body.classList.remove('link-hover-active');
}

function init () {
  const links = Array.from(document.querySelectorAll('a'));
  links.forEach((a) => {
    a.addEventListener('mouseenter', onEnter);
    a.addEventListener('mouseleave', onLeave);
    a.addEventListener('focus', onEnter);
    a.addEventListener('blur', onLeave);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}