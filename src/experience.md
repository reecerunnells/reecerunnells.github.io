---
layout: layouts/base.njk
title: Experience
description: Career history — roles, employers, and scope (including Salesforce Data Cloud and personalization).
---

<section class="panel panel--ochre" aria-labelledby="exp-title">
  <h1 id="exp-title" class="panel__headline">Experience</h1>
  <p class="panel__deck">Where titles, companies, and stack-specific work live—including current focus on enterprise data and AI-backed marketing products. Edit <code>src/_data/experience.json</code> to match your résumé.</p>
</section>

<div class="prose">
  <ul class="timeline">
    {% for job in experience.jobs %}
    <li>
      <span class="timeline__mark">{{ loop.index }}</span>
      <p class="role">{{ job.title }}</p>
      <p class="meta">{{ job.company }} · {{ job.dates }}</p>
      {% if job.summary %}<p class="summary">{{ job.summary }}</p>{% endif %}
    </li>
    {% endfor %}
  </ul>
</div>
