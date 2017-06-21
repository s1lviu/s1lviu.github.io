---
id: 291
title: Generator de CNP-uri in JavaScript
date: 2014-05-16T20:40:39+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=291
permalink: /generator-de-cnp-uri-javascript/
dpsp_networks_shares:
  - 'a:0:{}'
---
Cautand astazi pe Web dupa un generator de CNP-uri, dar realizat in JavaScript si negasind nimic, am decis sa realizez eu unul. In continuare o sa atasez codul comentat:

<pre class="brush: xml; title: ; notranslate" title="">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;title&gt;Generator de CNP-uri in JavaScript&lt;/title&gt;
&lt;meta name="author" content="Silviu-S.com"&gt;
&lt;body&gt;
&lt;p id="demo"&gt;Apasa butonul pentru a genera CNP-uri&lt;/p&gt;
&lt;button onclick="genereaza()"&gt;Genereaza&lt;/button&gt;
&lt;ul id="lista"&gt;&lt;/ul&gt;
&lt;script&gt;
function genereaza()
{

var sex = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
var an = Math.floor(Math.random() * (99 - 14 + 1)) + 14;
var luna = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var ziua = Math.floor(Math.random() * (28 - 1 + 1)) + 1;
var judet = Math.floor(Math.random() * (52 - 1 + 1)) + 1;
var nnn = Math.floor(Math.random() * (999 - 1 + 1)) + 1;

if(luna&lt;10) luna = "0" + luna;
if(ziua&lt;10) ziua = "0" + ziua;
if(judet&lt;10) judet = "0" + judet; //adaugare un 0 in fata daca numarul este mai mic decat 10
if(nnn&lt;10) nnn = "00" + nnn;
if(nnn&lt;100 && nnn&gt;10) nnn = "0" + nnn;

var cnp_i = sex+""+an+""+luna+""+ziua+""+judet+""+nnn; //concatenarea datelor
var cnp_f = cnp_i.replace(/ /g, ''); //eliminarea spatiilor

//calcularea cifrei de control
var cnp = cnp_i.split('');
var cifra = ["2", "7", "9", "1","4","6","3","5","8","2","7","9"];
suma = 0;
for (i = 0; i &lt; 12; i++) {
if(isNaN(cnp[i])==false) //verificarea daca cnp-ul generat pana acum este format doar din numere
suma += (cifra[i] * cnp[i]); //calcularea sumei de control
}
var rest = suma % 11;
if(rest==10)
var cifra_control = 1;
else
var cifra_control = rest;
var cnp_final=cnp_f.concat(cifra_control); //concatenarea cifrei de control la restul cnp-ului
var node=document.createElement("LI"); //crearea unui element "li"
var textnode=document.createTextNode(cnp_final); //crearea unui nod, in vederea adaugarii informatiilor
node.appendChild(textnode);
document.getElementById("lista").appendChild(node);
}
&lt;/script&gt;
&lt;footer&gt;
&lt;p&gt;Script realizat de: &lt;a href="http://silviu-s.com"&gt;Silviu-S.com&lt;/a&lt;/p&gt;
&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;

</pre>

Daca folositi acest generator pe site-ul dvs, va rog sa lasati footer-ul intact, multumesc! 😀

Puteti testa scriptul <a title="Generator CNP JavaScript" href="http://silviu-s.com/proiecte/generator-cnp" target="_blank">aici</a>.

<ul id="lista">
</ul>