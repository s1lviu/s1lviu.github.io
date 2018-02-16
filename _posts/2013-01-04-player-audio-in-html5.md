---
id: 35
title: Player audio in HTML5
date: 2013-01-04T20:44:02+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=35
permalink: /player-audio-in-html5/
dpsp_networks_shares:
  - 'a:0:{}'
categories:
  - Programming
tags:
  - audio
  - html5
  - player
---
Pentru cei care nu stiu, dar au nevoie de un player simplu fara sa se complice prea mult, in noul HTML5, puteti implementa foarte usor acest lucru prin urmatorul cod:

<pre class="brush: php; title: ; notranslate" title=""><audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
</pre>
