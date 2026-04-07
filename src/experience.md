---
layout: layouts/base.njk
title: Experience
description: Career history and selected work — Reece Runnells.
---

<div class="prose">
  <h1>Experience</h1>
  <p class="lead">Edit <code style="font-size:0.9em">src/_data/experience.json</code> to match your résumé. This list is generated from that file.</p>

  <ul class="timeline">
    {% for job in experience.jobs %}
    <li>
      <p class="role">{{ job.title }}</p>
      <p class="meta">{{ job.company }} · {{ job.dates }}</p>
      {% if job.summary %}<p class="summary">{{ job.summary }}</p>{% endif %}
    </li>
    {% endfor %}
  </ul>
</div>
