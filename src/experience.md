---
layout: layouts/base.njk
title: Experience
description: Career history — Salesforce Data Cloud, Personalization, Buddy Media, and full-stack engineering.
---

<section class="panel panel--ochre" aria-labelledby="exp-title">
  <h1 id="exp-title" class="panel__headline">Experience</h1>
  <p class="panel__deck">Reverse chronological summary. Copy is sourced from the same facts as my résumé; tune <code>src/_data/experience.json</code> for wording or length.</p>
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
