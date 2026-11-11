const list = document.querySelector('#version-list');
document.querySelector('#year').textContent = new Date().getFullYear();
fetch('./versions.json')
  .then(response => { if (!response.ok) throw new Error('Version history unavailable'); return response.json(); })
  .then(versions => {
    list.replaceChildren();
    if (!versions.length) { list.textContent = 'No public versions published yet.'; return; }
    for (const version of versions) {
      const article = document.createElement('article'); article.className = 'version';
      const heading = document.createElement('h3'); heading.textContent = `${version.version} — ${version.title}`;
      const time = document.createElement('time'); time.textContent = version.date || 'Date to be announced';
      const ul = document.createElement('ul');
      for (const note of version.notes || []) { const li = document.createElement('li'); li.textContent = note; ul.append(li); }
      article.append(heading, time, ul); list.append(article);
    }
  }).catch(() => { list.textContent = 'Version history could not be loaded. See CHANGELOG.md in the repository.'; });
