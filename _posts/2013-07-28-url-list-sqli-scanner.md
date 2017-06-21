---
id: 143
title: URL list SQLi scanner
date: 2013-07-28T12:16:40+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=143
permalink: /url-list-sqli-scanner/
dpsp_networks_shares:
  - 'a:0:{}'
tags:
  - sql injection list
  - sql scanner list
  - sqli list scanner
  - url list sql scanner
---
Am facut mai demult un script care scaneaza fiecare site dintr-o lista pentru a afla care este vulnerabil la SQL Injection si care nu. Astazi l-am imbunatatit putin, cu toate ca nu este prea optimizat, dar functioneaza.

<pre class="brush: php; title: ; notranslate" title="">&lt;?php
echo '&lt;html&gt;';
echo'&lt;title&gt;URL List SQLi scanner&lt;/title&gt;';
echo '&lt;body bgcolor="green"&gt;';
echo "&lt;u&gt;&lt;tr&gt;Utilizare:&lt;/tr&gt;&lt;/br&gt;&lt;/u&gt;
Creeaza un fisier adrese.txt in care sa existe pe fiecare linie cate o adresa url&lt;/br&gt;
in formatul http://url.tld . Url-urile vulnerabile vor fi afisate si vor fi salvate si in fisierul bune.txt&lt;/br&gt;&lt;/br&gt;";
function get_data($url) {
$ch = curl_init();
$timeout = 10;
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
$data = curl_exec($ch);
curl_close($ch);
return $data;
}

function linii($url)
{
$linecount = 0;
$handle = fopen($url, "r");
while(!feof($handle)){
$line = fgets($handle);
$linecount++;
}

fclose($handle);

return $linecount;
}


if (!(file_exists('adrese.txt'))) {echo "Fisierul adrese.txt nu exista!Acesta trebuie sa contina pe fiecare linie cate un site!&lt;/br&gt;";}else{
$fisier = file_get_contents('adrese.txt'); }// Citeste lista cu url-uri
$linii = explode("\n", $fisier); // Preia fiecare url
$fisier = fopen("bune.txt", "a+"); // Aici le va pune pe cele vulnerabile
echo"&lt;u&gt;Url-uri vulnerabile:&lt;/u&gt;&lt;/br&gt;&lt;/br&gt;";
for($i = 0; $i &lt; count($linii) - 1; $i++) scann($linii[$i]); // Testeaza fiecare url
function scann($sqli)
{
global $fisier;
$sintaxa="'";
$fraza=get_data("$sqli$sintaxa");
$cuvant="syntax";
$pos = strpos($fraza,$cuvant);
if($pos === false || linii($sqli)!=linii("$sqli$sintaxa"))
{
$ok=0;
}
else {
$ok=1;
}

if($ok==1)
{
fwrite($fisier, $sqli . "\n"); // Scrie in bune.txt url-urile vulnerabile
echo"$sqli  &lt;br&gt;"; // Afiseaza url-urile vulnerabile

}
}
fclose($fisier); // Inchide fisierul

echo '&lt;center&gt;&lt;/br&gt;&lt;/br&gt;URL List SQLi Scanner v1.1 - Silvian0 @ &lt;a href="http://rstcenter.com"&gt;RSTForums.com&lt;/a&gt;&lt;/center&gt;';
?&gt;

</pre>