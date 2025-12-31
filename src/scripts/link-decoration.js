const COLOR_VARS = ['--color-pink', '--color-gold', '--color-green', '--color-indigo'];

function getVarValue (varName) {
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim() || '';
}

function pickRandomExcluding (exclude) {
  const pool = COLOR_VARS.filter(v => v !== exclude);
  return pool[Math.floor(Math.random() * pool.length)];
}

function applyVarToLink (link, varName) {
  link.dataset.colorVar = varName;
  link.style.setProperty('--link-decoration-color', getVarValue(varName));
}

function assignInitialColors (links) {
  links.forEach(link => {
    const varName = COLOR_VARS[Math.floor(Math.random() * COLOR_VARS.length)];
    link.dataset.initialColorVar = varName;
    applyVarToLink(link, varName);
  });
}

function init () {
  const links = Array.from(document.querySelectorAll('a'));
  if (!links.length) return;
  assignInitialColors(links);

  let activeCount = 0;

  function handleEnter (event) {
    activeCount += 1;
    const link = event.currentTarget;
    const current = link.dataset.colorVar;
    const next = pickRandomExcluding(current);
    applyVarToLink(link, next);
  }


  function handleLeave (event) {
    activeCount = Math.max(0, activeCount - 1);

    const link = event.currentTarget;
    const initial = link.dataset.initialColorVar || COLOR_VARS[0];
    applyVarToLink(link, initial);
  }


  links.forEach(link => {
    link.addEventListener('mouseenter', handleEnter);
    link.addEventListener('mouseleave', handleLeave);
    link.addEventListener('focus', handleEnter);
    link.addEventListener('blur', handleLeave);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}