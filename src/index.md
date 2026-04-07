---
layout: layouts/base.njk
title: Home
description: Full-stack developer — shipping web products with pragmatic engineering and AI-assisted velocity.
---

<section class="spread spread--hero">
  <div class="prose">
    <h1>{{ site.name }}</h1>
    <p class="lead"><strong>Full-stack developer</strong>—comfortable across the stack and selective with tools. I use <strong>LLMs, agents, and good prompts</strong> where they buy speed and clarity: prototyping, codegen, reviews, and operational glue—not as a substitute for judgment or system design.</p>
  </div>
</section>

<section class="callout callout--dark" aria-label="Introduction">
  <p class="callout__lede">{{ site.homeCallout.lede }}</p>
  <p class="callout__sub">{{ site.homeCallout.sub }}</p>
</section>

<section class="panel panel--ochre" aria-labelledby="panel-title">
  <h2 id="panel-title" class="panel__headline">{{ site.ochreBannerTitle }}</h2>
  <p class="panel__deck">How I like to work: <strong>iterate in small slices</strong>, keep production constraints in mind early, and use AI where it shortens the path to a real answer.</p>
  <div class="columns-2">
    <article>
      <h3>Focus</h3>
      <p>Reliable services, clear APIs, honest UX, and data that doesn’t lie. Boring-correct beats flashy-wrong.</p>
    </article>
    <article>
      <h3>On this site</h3>
      <p><a href="{{ '/about/' | url }}">About</a> for background and contact. <a href="{{ '/experience/' | url }}">Experience</a> for roles and employers in full detail. <a href="{{ '/projects/' | url }}">Projects</a> for shipped work to point recruiters at.</p>
    </article>
  </div>
</section>
