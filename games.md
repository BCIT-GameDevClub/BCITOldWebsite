---
layout: page
title: games
permalink: /games/
---

<div class="accordion">
    {% for games_hash in site.data.games %}
    <h3 class="accordion-toggle"><span class="accordion-indicator">&#9654;</span> {{ games_hash[0] }}</h3>
    <div class="accordion-content">
        {% assign games = games_hash[1] %}
        {% for game in games %}
        <div class="project">
            <div class="project-contents">
                <a href="{{ game.link }}" target="_blank"><h4>{{ game.title }}</h4></a>
                <img class="thumbnail" src="{{ game.img }}"/>
                <p>{{ game.desc }}</p>
            </div>
        </div>
        {% endfor %}
    </div>
    {% endfor %}
</div>
