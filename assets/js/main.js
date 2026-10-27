(() => {
  'use strict';
  const topics = [...document.querySelectorAll('button[data-topic]')];
  const publications = [...document.querySelectorAll('.publication[data-topics]')];
  const status = document.querySelector('.filter-status');
  const label = document.querySelector('#filter-label');
  const clear = document.querySelector('#clear-filter');
  let activeTopic = null;

  function selectTopic(topic, name) {
    activeTopic = topic === activeTopic ? null : topic;
    topics.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.topic === activeTopic));
    });
    let matches = 0;
    publications.forEach(publication => {
      const matched = Boolean(activeTopic) && publication.dataset.topics.split(' ').includes(activeTopic);
      publication.classList.toggle('is-highlighted', matched);
      publication.classList.toggle('is-muted', Boolean(activeTopic) && !matched);
      if (matched) matches++;
    });
    status.hidden = !activeTopic;
    label.textContent = activeTopic ? `${name} · ${matches} publication${matches === 1 ? '' : 's'}` : '';
  }

  topics.forEach(button => {
    button.addEventListener('click', () => selectTopic(button.dataset.topic, button.textContent.trim()));
  });
  clear.addEventListener('click', () => {
    selectTopic(null, '');
    document.querySelector('.research-tags button').focus({ preventScroll: true });
  });

  const sections = [...document.querySelectorAll('main > section[id]')];
  const navigation = [...document.querySelectorAll('nav a[href^="#"]')];
  let pendingFrame = false;
  function updateNavigation() {
    const threshold = window.matchMedia('(max-width: 640px)').matches ? 125 : 105;
    let current = sections[0]?.id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= threshold) current = section.id;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
      current = sections[sections.length - 1]?.id;
    }
    navigation.forEach(link => {
      if (link.getAttribute('href') === `#${current}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    pendingFrame = false;
  }
  window.addEventListener('scroll', () => {
    if (!pendingFrame) {
      pendingFrame = true;
      window.requestAnimationFrame(updateNavigation);
    }
  }, { passive: true });
  window.addEventListener('resize', updateNavigation);
  updateNavigation();
})();
