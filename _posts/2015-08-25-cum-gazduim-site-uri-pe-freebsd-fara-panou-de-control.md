---
id: 369
title: Cum gazduim site-uri pe FreeBSD fara panou de control
date: 2015-08-25T21:10:33+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=369
permalink: /cum-gazduim-site-uri-pe-freebsd-fara-panou-de-control/
dpsp_networks_shares:
  - 'a:0:{}'
tags:
  - add website to freebsd
  - femp freebsd
  - freebsd add site without control panel
  - freebsd control panel
  - freebsd hosting
---
Nevoia tot mai mare de găzduire a site-urilor mele într-un mediu mai sigur și cu un randament bun de performanță, m-au condus spre sistemul de operare <a href="https://ro.wikipedia.org/wiki/FreeBSD" target="_blank" rel="nofollow">FreeBSD</a>. După ce am testat majoritatea distribuțiilor am ajuns la concluzia că acest sistem este cel mai optim în organizarea și partajarea resurselor serverului, încât să nu existe probleme de îngreunare a sistemului atunci când este *supra-solicitat.
  
Pentru aceasta, am creat un mic script. Ce face acesta? Ei bine, el instalează componentele FEMP (Combinația de FreeBSD, Nginx, MySQL și PHP) pentru noi și ne dă posibilitatea de a adăuga ușor un website pe server, fără a fi nevoie să scriem de fiecare dată fișierele de configurație pentru acestea.
  
Nu spun că nu este ok să instalăm un panou de control care să facă toate acestea, dar, pe parcursul timpului mi-am dat seama că nu are rost ca resursele să fie irosite (un panou de control consumă destule) și în plus putem învăța cum funcționează sistemul, cum putem aduce îmbunătățiri ș.a.
  
Proiectul și descrierea lui le puteți găsi aici: <a href="https://github.com/s1lviu/FSWC" target="_blank" rel="nofollow">GitHub</a>
  
Acesta a fost testat pe un fresh droplet de la DigitalOcean.
  
Succes!
  
<span style="font-size: xx-small;">*Notă: sunt mai mulți factori care pot influența performanțele serverului. (bandă, memorie, CPU, etc.)</span>