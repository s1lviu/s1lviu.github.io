---
id: 199
title: Strawpoll.me PHP bot
date: 2013-09-28T17:39:59+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=199
permalink: /strawpoll-bot/
dpsp_networks_shares:
  - 'a:0:{}'
image: /wp-content/uploads/2013/09/screen-shot-2013-03-13-at-3-22-39-pm-200x100.png
categories:
  - Projects
tags:
  - straw poll bot
  - straw poll bot 2013
  - Straw poll hack
  - straw poll increaser
  - strawpoll.me bot
  - strawpoll.me hack
---
Am vazut ca pe Facebook e mare agitatie cu site-ul asta si asa m-am gandit sa fac un mic bot in PHP care voteaza intrebarea pe care o setati. Trebuie sa creati un fisier cu numele proxy.txt, iar in acesta sa fie pe fiecare linie cate un proxy in formatul ip:port. Mai trebuie setat id-ul intrebarii pe care il luati de dupa slash-ul strawpoll.me/un_numar , iar optiunea pe care trebuie sa o voteze scriptul, va fi cu o unitate mai mica. De exemplu avem:

1.Ion

2.Gheorghe

3.Maria

Optiunile vor fi: 0 pentru Ion, 1 pentru Gheorghe si 2 pentru Maria.

Dependente de sistem: PHP 5.x si php_curl instalat pe server.

PS: Recomand folosirea lui in CLI, unde se va executa comanda php bot.php, unde bot.php este numele fisierului care contine codul de mai jos.

<pre class="brush: php; title: ; notranslate" title=""><?php
set_time_limit(0);
$fisier='proxy.txt'; //numele fisierului cu proxy-uri ip:port, fiecare pe o linie
function voteaza($proxy)
{
$id='seteaza_id'; //id-ul intrebarii
$optiunea='0'; //optiunea 0 inseamna prima, 1 inseamna a doua, etc.
$url = 'http://strawpoll.me/ajax/vote';
$fields = array('votes%5B%5D' => $optiunea,'id' => $id);
foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
rtrim($fields_string, '&');
$ch = curl_init();
curl_setopt($ch,CURLOPT_URL, $url);
curl_setopt($ch,CURLOPT_TIMEOUT,3000); //cate secunde ii oferi proxy-ului sa se conecteze
curl_setopt($ch,CURLOPT_POST, count($fields));
curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.76 Safari/537.36');
curl_setopt($ch, CURLOPT_REFERER, 'http://strawpoll.me/'.$id.'/');
curl_setopt($ch,CURLOPT_HTTPHEADER,array('X-Requested-With: XMLHttpRequest'));
curl_setopt($ch, CURLOPT_PROXY, $proxy);
curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
$result = curl_exec($ch);
curl_close($ch);
return $result;
}
$a=file_get_contents($fisier);
$a= explode("\n",$a);
$nr=sizeof($a);
for ($i = 0; $i <= $nr; $i++) {
voteaza($a[$i]);
$cate=$nr-$i;
echo "Mai am de votat de $cate ori \n";
flush();
}
?>

</pre>
