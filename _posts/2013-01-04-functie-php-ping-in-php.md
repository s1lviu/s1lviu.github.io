---
id: 29
title: Functie Ping IP in PHP
date: 2013-01-04T20:19:50+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=29
permalink: /functie-php-ping-in-php/
dpsp_networks_shares:
  - 'a:0:{}'
categories:
  - Programming
tags:
  - functie
  - ip
  - php
  - ping
---
Acum ceva vreme aveam nevoie sa dau ping unui ip din PHP fara a avea un VPS sau Dedicat, asa ca am cautat un serviciu care ofera aceasta optiune si am codat o functie in acest sens. Aceasta verifica daca un ip este sau nu online. Sper sa va fie de folos! 🙂

<pre class="brush: php; title: ; notranslate" title=""><?php
function verifica($ip)
{
$da=file_get_contents("http://www.ajaxutils.com/ping/ajax.php?query=$ip");

$findme   = ', 0 received';
$pos = strpos($da, $findme);
if ($pos !== false) {
     return 'Offline';
} else {
     return 'Online';
}
}
echo verifica('127.0.0.1');
?>

</pre>
