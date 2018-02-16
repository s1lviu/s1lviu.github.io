---
id: 77
title: 'Extrage textul dintre doua delimitatoare [PHP]'
date: 2013-02-04T21:27:17+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=77
permalink: /extrage-textul-dintre-doua-delimitatoare-php/
dpsp_networks_shares:
  - 'a:0:{}'
categories:
  - Programming
---
Ati avut vreo data de a face, in timp ce scriati cod in PHP cu problema preluarii unei propozitii a.ka. string din interiorul altei propozitii (string) si nu ati stiut cum? Iata aveti in continuare o functie scrisa de mine care va va ajuta sa faceti acest lucru fara probleme:

<pre class="brush: php; title: ; notranslate" title="">function text_dintre_delimitatori($text,$inceput,$sfarsit)
{
$rezultat=explode($inceput,$text);
$rezultat=$rezultat[1];
$rezultat=explode($sfarsit,$rezultat);
return $rezultat[0];
}
echo text_dintre_delimitatori('mama are mere, are pere.',',','.');

</pre>

In exemplul de mai sus avem string-ul “mama are mere, are pere.” Am vrut sa scoatem din aceasta doar partea de la virgula pana la punct, anume, ” are pere”.

Am folosit apelul functiei text\_dintre\_delimitatori(‘propozitie’,’primul delimitator – in cazul meu virgula’,’al doilea delimitator – in cazul meu punctul’)

Sper ca ati inteles cum functioneaza aceasta functie si va va fi de folos in situatii ca extragerea diferitelor elemente din pagini web s.a! 🙂
