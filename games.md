---
layout: page
title: Games
permalink: /games/
---

<div class="home">

  <ul class="game-list">
    {% for post in site.posts %}
      <li>
        <h2>
          <a class="game-link" href="{{ post.link | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
        <img src="/img/{{post.img}}"/>
        <p class="game-meta">{{ post.date | date: "%b %-d, %Y" }}</p>
        <p class="game-desc">{{ post.desc }}</p>
      </li>
    {% endfor %}
  </ul>

  <!--<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>-->

</div>
