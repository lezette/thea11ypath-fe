document.querySelectorAll('a[target="_blank"]').forEach(link => {

  link.setAttribute('data-external', '');

  console.log("got here");


  const label = link.getAttribute('aria-label');
  const text = link.textContent.trim();

  if (!label && text) {
    link.setAttribute(
      'aria-label',
      `${text} (opens in a new tab)`
    );
  }
});
