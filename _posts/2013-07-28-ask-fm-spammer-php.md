---
id: 140
title: 'Ask.fm Spammer [PHP]'
date: 2013-07-28T12:12:31+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=140
permalink: /ask-fm-spammer-php/
dpsp_networks_shares:
  - 'a:0:{}'
categories:
  - Projects
tags:
  - ask.fm bot
  - ask.fm curl
  - ask.fm hack
  - ask.fm php
  - ask.fm spammer
---
Poate v-ati saturat si voi de spam-ul facut pe Facebook de catre cei cu conturi pe ask.fm. Asa ca, cu putin ajutor al lui Zatarra de pe RSTForums, avem acest script in PHP care ne va ajuta sa le umplem frigiderul celor cu “Intreaba-ma!”.

<pre class="brush: php; title: ; notranslate" title=""><?php

//Ask.FM spammer by Zatarra @ RSTforums.com

$curli = curl_init();
curl_setopt($curli, CURLOPT_URL, "http://ask.fm/exempluprofil");
curl_setopt($curli, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($curli, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:19.0) Gecko/20100101 Firefox/19.0");
curl_setopt($curli, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curli, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curli, CURLOPT_COOKIEJAR, "a.txt");
curl_setopt($curli, CURLOPT_COOKIEFILE, "a.txt");
curl_setopt($curli, CURLOPT_REFERER, "http://ask.fm/exempluprofil");
$curlDatai = curl_exec($curli);
@preg_match_all("/oken\" type=\"hidden\" value=\"(.*?)\" \/\>/",$curlDatai,$token);
//echo $token[1][0];

$whatever="ask.fm Spammer By Zatarra @ RSTforums.com";

$data='authenticity_token='.urlencode($token[1][0]).'&question%5Bquestion_text%5D='.$whatever.'&authenticity_token='.urlencode($token[1][0]);
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "http://ask.fm/exempluprofil/questions/create");
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:19.0) Gecko/20100101 Firefox/19.0");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
curl_setopt($curl, CURLOPT_COOKIEFILE, "a.txt");
curl_setopt($curl, CURLOPT_REFERER, "http://ask.fm/exempluprofil");
$curlData = curl_exec($curl);

?>

</pre>

Aveti nevoie de un host cu PHP si cURL.

PS: Limita de request-uri sau mai clar intrebari este de 10/5 minute. Partea rea este ca nu se poate folosi proxy, deoarece este detectat, dar cu putina imaginatie, puteti trece peste! 🙂
