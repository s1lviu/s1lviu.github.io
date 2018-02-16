---
id: 47
title: 'Extractor intrebari DRPCIV.ro [PHP]'
date: 2013-01-06T15:21:26+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=47
permalink: /extractor-intrebari-drpciv-ro-php/
dpsp_networks_shares:
  - 'a:0:{}'
categories:
  - Articles
tags:
  - download
  - drpciv
  - extractor
  - intrebari
  - script
  - toate
---
Facand chestionare pe Drpciv.ro, am observat cum genereaza intrebarile si am decis sa fac un mic extractor, pe care, daca il veti lasa cateva ore deschis in browser, ar trebui sa extraga, teoretic, toate intrebarile de pe drpciv.ro.

Mai jos aveti sursa acestuia:

<pre class="brush: php; title: ; notranslate" title=""><HEAD>
<script type="text/javascript">
function reFresh() {
 location.reload(true)
}
window.setInterval("reFresh()",1000);
</script>
</HEAD>
<p><center>
<font face="arial, helvetica" size"-2">DRPCIV extractor<br>
by <a href="http://silviu-s.com">Silviu-S.com</a></font>
</center><p>
<?php
function get_data($url) {
 $ch = curl_init();
 $timeout = 5;
 curl_setopt($ch, CURLOPT_URL, $url);
 curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
 curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
 curl_setopt($ch, CURLOPT_COOKIEFILE, 'cookies.txt');
 $data = curl_exec($ch);
 curl_close($ch);
 return $data;
}
$fisier = get_data('http://www.drpciv.ro/dl-public-exam/examStart.do');
$file = 'intrebari.html';
$current = file_get_contents($file);
$current .= "$fisier\n";
file_put_contents($file, $current);
?>

</pre>

Pentru ca acesta sa functioneze trebuie sa creeati un fisier cookies.txt in care sa puneti cookie-urile din browser dupa ce v-ati logat pe drpciv.ro – puteti face acest lucru cu pluginul pentru google chrome cookie.txt export. Mai aveti nevoie de un fisier intrebari.html. Aici se vor salva intrebarile extrase. Dupa ce ati facut pasii de mai sus, deschideti in browser, de preferat Chrome scriptul, iar acesta va incepe sa isi faca treaba. Este scris basic, se poate imbunatati, dar nu am mai lucrat la el. Sper sa va fie folositor! 🙂
