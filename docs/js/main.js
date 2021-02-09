---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  const now = new Date();
  document.querySelectorAll('[data-after]')
    .forEach(node => {
      const parsed = new Date(node.getAttribute('data-after'));
      if (now < parsed) {
        node.parentNode.removeChild(node);
      }
    })

})
