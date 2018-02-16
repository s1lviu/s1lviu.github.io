---
id: 135
title: 'Cross Site Script Inclusion(XSSI) – Un nou tip de atac!'
date: 2013-04-13T20:48:41+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=135
permalink: /cross-site-script-inclusionxssi-un-nou-tip-de-atac/
dpsp_networks_shares:
  - 'a:0:{}'
categories:
  - Cybersecurity
tags:
  - Cross Site Script Inclusion
  - tutorial XSSI
  - vulnerability
  - XSSI
  - xssi attack
  - XSSI protection
---
<div id="post_message_438158">
  <blockquote>
    <p>
      <em>In urma cu cateva zile un utilizator al forumului RSTCenter(asa imi place sa ii spun), a dat definitia unui nou tip de vulnerabilitate destul de recent </em>gandita ,iar aceasta se numeste “Cross Site Script Inclusion”, prescurtata si XSSI. In continuare aveti toate detaliile legate de acest tip de atac, de la “Domnul.Do”, un utilizator al forumului.
    </p>
    
    <p>
      Descriere:<br /> ==============<br /> Am cautat o variatie de la user la user in structura site-ului si am gasit.Dar prima data o descriere a XSSI-ului :
    </p>
    
    <p>
      Dupa definitia mea un XSSI (Cross Site Script Inclusion) este: o vulnerabilitate server-side care consta in accesare unei resurse pe un domeniu diferit , redand acea resursa in domeniul respectiv.
    </p>
    
    <p>
      Acest P.o.C se refera la un tip se vulnerabilitate numita “Information Leakage” deoarece poate verifica daca un user are o anumita valoare a parametrului “u” .<br /> Acest concept este adresat userului care are avatar.
    </p>
    
    <p>
      Exploit:<br /> ==============<br /> Avatarul user-ului de pe care sunteti poate fi accesat si prin :
    </p>
    
    <div>
      <div>
        Code:
      </div>
      
      <pre>rstforums.com/forum/image.php?u=<b>95563</b>&<b>type=profile</b></pre>
    </div>
    
    <p>
      Dar acest url este mai special deoarece numai respectivul care are valoare parametrului “u” egala cu 95563 (in cazul de fata user-ul meu) poate sa vada acest avatar. Daca “u” este diferit de “95563” atunci o sa apara un pixel cu dimensiunea 1×1 .<br /> Acesta variatie se poate vedea cross-domain prin “width” si “height” avatarului.
    </p>
    
    <p>
      Ce inseamna asta:<br /> Daca administrati un site care este visualizat de 5 useri logati in rsforums.com , puteti sa identificati unul sau toti (daca detineti valoarea parametrului “u” corecta).
    </p>
    
    <p>
      P.o.C:<br /> ==============<br /> E un P.o.C raw dar isi indeplineste scopul:<br /> <a href="http://jsfiddle.net/sBLTE/" target="_blank" rel="nofollow">Edit this Fiddle – jsFiddle</a>
    </p>
    
    <p>
      Daca aveti “u”-ul egala cu “95563” atunci o sa apare 86×100 (nu o sa fie cazul) daca nu aveti “u”-ul respectiv o sa apara 1×1 .
    </p>
    
    <p>
      Remediere:<br /> ==============<br /> Nu stiu exact o remediere pe termen lung pentru o astfel de vulnerabilitate,dar o remediere temporara este:<br /> -validarea HTTP Referer-ul , daca nu este din rstforums.com atunci nu se afiseaza avatarul
    </p>
  </blockquote>
</div>
