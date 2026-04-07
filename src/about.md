---
layout: layouts/base.njk
title: About
description: About Reece Runnells — Salesforce engineer on Data Cloud, Personalization, and AI integrations.
---

<section class="callout callout--dark" aria-label="Section intro">
  <p class="callout__lede">Engineering at the intersection of customer data, AI, and what marketers can safely ship.</p>
  <p class="callout__sub">Buddy Media → Salesforce (2012); since then, deeper into Data Cloud, personalization, and full-stack services.</p>
</section>

<div class="prose">
  <h1>About</h1>
  <p class="lead">I am a full-stack engineer at Salesforce, focused on <strong>Personalization</strong> and <strong>Data Cloud</strong>. Most days touch some mix of services and UIs, APIs, data pipelines, and AI integrations—CDP, activation, Einstein—so recommendations and decisions stay useful, fast, and well-guarded.</p>

  <p>I have been a <strong>scrum lead</strong> and care about short feedback loops with product and customers. That showed up clearly in work like the <strong>Personalization decisioning pipeline</strong>, where we built out much of the Salesforce Core setup and saw the business line turn profitable in its first year.</p>

  <p>This site is a lightweight portfolio to pair with my résumé—concise enough for recruiters, technical enough for engineers. Emphasis: <strong>AI/ML product engineering</strong> and <strong>full-stack</strong> depth on Salesforce’s data and marketing stack.</p>

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
