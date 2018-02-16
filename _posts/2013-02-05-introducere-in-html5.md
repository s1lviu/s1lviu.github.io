---
id: 92
title: Introducere in HTML5
date: 2013-02-05T21:14:53+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=92
permalink: /introducere-in-html5/
dpsp_networks_shares:
  - 'a:0:{}'
categories:
  - Articles
tags:
  - html5
  - introducere
  - romana
---
Ce este HTML5?

Este a cincea revizuire a standardului HTML (creat în 1990 și standardizat ca HTML4 din 1997<sup id="cite_ref-HTML5-20110405_2-0"><a href="http://ro.wikipedia.org/wiki/HTML5#cite_note-HTML5-20110405-2">[2]</a></sup>) și din octombrie 2011 este în curs de dezvoltare. Obiectivele sale principale au fost acelea de a îmbunătăți limbajul cu un suport pentru cele mai recente apariții multimedia în același timp menținândul ușor de citit de oameni și bine înteles de computere și device-uri ([browsere web](http://ro.wikipedia.org/w/index.php?title=Browsere_web&action=edit&redlink=1 "Browsere web — pagină inexistentă"), [parsere](http://ro.wikipedia.org/w/index.php?title=Parsere&action=edit&redlink=1 "Parsere — pagină inexistentă"), etc.). HTML5 își propune să însumeze nu numai [HTML4](http://ro.wikipedia.org/w/index.php?title=HTML4&action=edit&redlink=1 "HTML4 — pagină inexistentă"), dar și [XHTML](http://ro.wikipedia.org/wiki/XHTML "XHTML")1 și [DOM2HTML](http://ro.wikipedia.org/w/index.php?title=Document_Object_Model&action=edit&redlink=1 "Document Object Model — pagină inexistentă") (îndeosebi [JavaScript](http://ro.wikipedia.org/wiki/JavaScript "JavaScript")).<sup id="cite_ref-HTML5-20110405_2-1"><a href="http://ro.wikipedia.org/wiki/HTML5#cite_note-HTML5-20110405-2">[2]</a></sup>
  
Urmărind predecesorii săi imediați HTML 4.01 și XHTML 1.1, HTML5 este un răspuns la observația că HTML și XHTML utilizate în comun pe World Wide Web sunt un amestec de caracteristici introduse de specificații diferite, împreuna cu acestea mai sunt și caracteristicile diferite aduse de software, de browsere, și multe erori de sintaxă în documnentele web existente. Astfle, HTML5 devine o încercare de a defini un singur limbaj de marcare ([markup language](http://ro.wikipedia.org/w/index.php?title=Markup_language&action=edit&redlink=1 "Markup language — pagină inexistentă")) care poate fi scris în oricare dintre sintaxele HTML sau/și XHTML. Acesta include modele detaliate de prelucrare pentru a încuraja mai multe implementări interoperabile; extinde, îmbunătățește și raționalizează disponibilitățile pentru documentele web și introduce marcarea și aplicații API ([application programming interfaces](http://ro.wikipedia.org/w/index.php?title=Application_programming_interfaces&action=edit&redlink=1 "Application programming interfaces — pagină inexistentă")) pentru aplicații web complexe.<sup id="cite_ref-HTML5diffHTML4_3-0"><a href="http://ro.wikipedia.org/wiki/HTML5#cite_note-HTML5diffHTML4-3">[3]</a></sup> Din aceste motive, HTML5 este un posibil candidat pentru aplicațiile de platforme mobile. Multe caracteristici ale HTML5 au fost create din considerarea că va trebui să devină capabil să ruleze pe dispozitive cum ar fi smart-phonurile sau tabletele.

În special, HTML5 aduce multe noi caracteristici sintactice. Acestea cuprind elemente ca `<video>`, `<audio>`, `<header>` și `<a title="Canvas element — pagină inexistentă" href="http://ro.wikipedia.org/w/index.php?title=Canvas_element&action=edit&redlink=1"><canvas></a>` [elemente HTML](http://ro.wikipedia.org/w/index.php?title=HTML_element&action=edit&redlink=1 "HTML element — pagină inexistentă"), precum și integrarea conținutului [SVG](http://ro.wikipedia.org/wiki/Scalable_Vector_Graphics "Scalable Vector Graphics")care a înlocuiește utilizarea tag-ului generic `<object>`. Aceste noutăți sunt proiectate pentru a facilita includerea și manipularea în web a conținuturilor multimedia și grafice fără a fi nevoie să se recurgă la proprietățile de plugin și API. Alte noi elemente ca `<section>`, `<article>`, `<header>`, și `<nav>` sunt proiectate să îmbunătățească conținutul semantic al documentelor. Noi atribute au fost introduse în același scop, în același timp unele elemente și atribute au fost îndepărtate. Unele elemente ca `<a>`, `<cite>` și `<menu>` au fost schimbate, redefinite și standardizate. API-urile și DOM-urile ([document object model](http://ro.wikipedia.org/w/index.php?title=Document_object_model&action=edit&redlink=1 "Document object model — pagină inexistentă")) sunt certitudini și sunt părți fundamentale în specificațiile HTML5.<sup id="cite_ref-HTML5diffHTML4_3-1"><a href="http://ro.wikipedia.org/wiki/HTML5#cite_note-HTML5diffHTML4-3">[3]</a></sup> HTML5, de asemenea, definește in câteva detalii prelucrările necesare pentru documentele invalide, astfel încât sintaxa erorilor va fi tratată uniform de toate browserele cunoscute.<sup id="cite_ref-4"><a href="http://ro.wikipedia.org/wiki/HTML5#cite_note-4">[4]</a></sup>

Mai jos aveti un exemplu basic:

<pre class="brush: php; title: ; notranslate" title=""><!DOCTYPE html>
<html>
<body>

<h1>Prima mea rubrica</h1>

<p>Primul meu paragraf</p>

</body>
</html>
</pre>
