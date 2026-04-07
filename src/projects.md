---
layout: layouts/base.njk
title: Projects
description: Selected portfolio work and case summaries — detail varies by what is safe to share publicly.
---

<section class="panel panel--ochre" aria-labelledby="proj-title">
  <h1 id="proj-title" class="panel__headline">Projects</h1>
  <p class="panel__deck">{{ projects.intro }}</p>
</section>

<div class="prose project-list-wrap">
  {%- for project in projects.items %}
  <article class="project-card" id="project-{{ loop.index }}">
    <h2 class="project-card__title">{{ project.title }}</h2>
    <p class="project-card__tagline">{{ project.tagline }}</p>
    <div class="project-card__grid">
      <div>
        <h3 class="project-card__label">Problem</h3>
        <p>{{ project.problem }}</p>
      </div>
      <div>
        <h3 class="project-card__label">Contribution</h3>
        <p>{{ project.contribution }}</p>
      </div>
      <div>
        <h3 class="project-card__label">Tech</h3>
        <ul class="project-tech">
          {%- for t in project.tech %}
          <li>{{ t }}</li>
          {%- endfor %}
        </ul>
      </div>
      <div>
        <h3 class="project-card__label">Outcome</h3>
        <p>{{ project.outcome }}</p>
        {%- if project.link %}
        <p class="project-card__link"><a href="{{ project.link }}">{% if project.linkLabel %}{{ project.linkLabel }}{% else %}{{ project.link }}{% endif %}</a></p>
        {%- endif %}
      </div>
    </div>
  </article>
  {%- endfor %}
</div>
