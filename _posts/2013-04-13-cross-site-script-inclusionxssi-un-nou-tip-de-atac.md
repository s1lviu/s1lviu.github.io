---
id: 135
title: 'Cross Site Script Inclusion(XSSI) &#8211; Un nou tip de atac!'
date: 2013-04-13T20:48:41+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=135
permalink: /cross-site-script-inclusionxssi-un-nou-tip-de-atac/
dpsp_networks_shares:
  - 'a:0:{}'
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
      <em>In urma cu cateva zile un utilizator al forumului RSTCenter(asa imi place sa ii spun), a dat definitia unui nou tip de vulnerabilitate destul de recent </em>gandita ,iar aceasta se numeste &#8220;Cross Site Script Inclusion&#8221;, prescurtata si XSSI. In continuare aveti toate detaliile legate de acest tip de atac, de la &#8220;Domnul.Do&#8221;, un utilizator al forumului.
    </p>
    
    <p>
      Descriere:<br /> ==============<br /> Am cautat o variatie de la user la user in structura site-ului si am gasit.Dar prima data o descriere a XSSI-ului :
    </p>
    
    <p>
      Dupa definitia mea un XSSI (Cross Site Script Inclusion) este: o vulnerabilitate server-side care consta in accesare unei resurse pe un domeniu diferit , redand acea resursa in domeniul respectiv.
    </p>
    
    <p>
      Acest P.o.C se refera la un tip se vulnerabilitate numita &#8220;Information Leakage&#8221; deoarece poate verifica daca un user are o anumita valoare a parametrului &#8220;u&#8221; .<br /> Acest concept este adresat userului care are avatar.
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
      Dar acest url este mai special deoarece numai respectivul care are valoare parametrului &#8220;u&#8221; egala cu 95563 (in cazul de fata user-ul meu) poate sa vada acest avatar. Daca &#8220;u&#8221; este diferit de &#8220;95563&#8221; atunci o sa apara un pixel cu dimensiunea 1&#215;1 .<br /> Acesta variatie se poate vedea cross-domain prin &#8220;width&#8221; si &#8220;height&#8221; avatarului.
    </p>
    
    <p>
      Ce inseamna asta:<br /> Daca administrati un site care este visualizat de 5 useri logati in rsforums.com , puteti sa identificati unul sau toti (daca detineti valoarea parametrului &#8220;u&#8221; corecta).
    </p>
    
    <p>
      P.o.C:<br /> ==============<br /> E un P.o.C raw dar isi indeplineste scopul:<br /> <a href="http://jsfiddle.net/sBLTE/" target="_blank" rel="nofollow">Edit this Fiddle &#8211; jsFiddle</a>
    </p>
    
    <p>
      Daca aveti &#8220;u&#8221;-ul egala cu &#8220;95563&#8221; atunci o sa apare 86&#215;100 (nu o sa fie cazul) daca nu aveti &#8220;u&#8221;-ul respectiv o sa apara 1&#215;1 .
    </p>
    
    <p>
      Remediere:<br /> ==============<br /> Nu stiu exact o remediere pe termen lung pentru o astfel de vulnerabilitate,dar o remediere temporara este:<br /> -validarea HTTP Referer-ul , daca nu este din rstforums.com atunci nu se afiseaza avatarul
    </p>
  </blockquote>
</div>