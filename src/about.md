---
layout: layouts/base.njk
title: About
description: About Reece Runnells — full-stack developer, AI tooling, and how to get in touch.
---

<section class="callout callout--dark" aria-label="Section intro">
  <p class="callout__lede">Shipping software with both hands: solid fundamentals and modern AI tooling when it earns its keep.</p>
  <p class="callout__sub">Résumé-ready roles, timelines, and employer context are on <a href="{{ '/experience/' | url }}">Experience</a>—this page stays high level.</p>
</section>

<div class="prose">
  <h1>About</h1>
  <p class="lead">I am a <strong>full-stack developer</strong>. I care about fast iteration without cutting corners on the things that hurt you later: boundaries between services, honest error handling, and code the next person can follow.</p>

  <p>I lean on <strong>AI tooling</strong>—IDE assistants, agents, structured prompts—where they shorten feedback cycles: exploring APIs, drafting implementations, refining tests, and summarizing unfamiliar code. The goal is quicker, clearer outcomes; ownership and review stay human.</p>

  <p>This site is a small portfolio to sit next to a résumé: enough signal for recruiters, enough depth for engineers. For where I have worked and what I have shipped in each role, start with <a href="{{ '/experience/' | url }}">Experience</a> and <a href="{{ '/projects/' | url }}">Projects</a>.</p>

  <h2>Contact</h2>
  <ul>
    {%- for link in contact.links %}
    {%- if link.url %}
    <li><a href="{{ link.url }}" rel="me">{{ link.label }}</a></li>
    {%- endif %}
    {%- endfor %}
    {%- if contact.email %}
    <li><a href="mailto:{{ contact.email }}">Email</a></li>
    {%- endif %}
  </ul>
  <p class="contact-note">To add LinkedIn, email, or correct GitHub, edit <code>src/_data/contact.json</code>.</p>
</div>
