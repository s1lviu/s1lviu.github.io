---
id: 87
title: 'Hotfiles.ro &#8211; Girlshare.ro Mp3 Downloader [PHP]'
date: 2013-02-05T20:57:43+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=87
permalink: /hotfiles-ro-girlshare-ro-mp3-downloader-php/
dpsp_networks_shares:
  - 'a:0:{}'
tags:
  - download
  - fileshare
  - girlshare.ro
  - hotfiles.ro
  - mp3
---
Am creeat un script care preia prima melodie mp3 cautata de pe hotfiles.ro si ofera link de download pentru aceasta si marimea acesteia! Script-ul il aveti mai jos:

<pre class="brush: php; title: ; notranslate" title="">&lt;?php
function get_data($url,$ref="")
{
if(function_exists("curl_init")){
$ch = curl_init();
$user_agent = "Mozilla/4.0 (compatible; MSIE 5.01; "."Windows NT 5.0)";
$ch = curl_init();
curl_setopt($ch, CURLOPT_USERAGENT, $user_agent);
curl_setopt( $ch, CURLOPT_HTTPGET, 1 );
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 );
curl_setopt( $ch, CURLOPT_FOLLOWLOCATION , 1 );
curl_setopt( $ch, CURLOPT_FOLLOWLOCATION , 1 );
curl_setopt( $ch, CURLOPT_URL, $url );
curl_setopt( $ch, CURLOPT_REFERER, $ref );
curl_setopt ($ch, CURLOPT_COOKIEJAR, 'hotfiles.txt');
$html = curl_exec($ch);
curl_close($ch);
}
else{
$hfile = fopen($url,"r");
if($hfile){
while(!feof($hfile)){
$html.=fgets($hfile,1024);
}
}
}
return $html;
}

function limita($text,$inceput,$sfarsit)
{
$rezultat=explode($inceput,$text);
$rezultat=$rezultat[1];
$rezultat=explode($sfarsit,$rezultat);
return $rezultat[0];
}

function getTags( $dom, $tagName, $attrName, $attrValue ){
$html = '';
$domxpath = new DOMXPath($dom);
$newDom = new DOMDocument;
$newDom-&gt;formatOutput = true;

$filtered = $domxpath-&gt;query("//$tagName" . '[@' . $attrName . "='$attrValue']");
$i = 0;
while( $myItem = $filtered-&gt;item($i++) ){
$node = $newDom-&gt;importNode( $myItem, true );    // import node
$newDom-&gt;appendChild($node);                    // append node
}
$html = $newDom-&gt;saveHTML();
return $html;
}

$melodie=$_GET["melodie"];
if(isset($melodie))
{
$melodie=str_replace(' ','_',$melodie);
$some_link = 'http://www.hotfiles.ro/search/'.$melodie.'';

$tagName = 'span';
$attrName = 'class';
$attrValue = 'file-name';

$dom = new DOMDocument;
$dom-&gt;preserveWhiteSpace = false;
@$dom-&gt;loadHTMLFile($some_link);

$html = getTags( $dom, $tagName, $attrName, $attrValue );
$f1=explode('mp3"',$html);
$l = $f1[1];
$l1 = limita($l,'href="','"&gt; ');
$l1 = 'http://www.hotfiles.ro'.$l1.'';
$n1= limita($l,'title="','"');
$follows = get_data($l1);
$follow = limita($follows,'href="http://www.hotfiles.ro:8079/dmz/fisier/redirect/girlshare','"');
$final = 'http://www.hotfiles.ro:8079/dmz/fisier/redirect/girlshare'.$follow.'';
$finish=get_data($final,$l1);
$finish=limita($finish,'&lt;p class="waiting"&gt; ',' pentru');
$finish=limita($finish,'"','"');
$mp3=get_data($finish);
$mp3=limita($mp3,'"POST" action="','"&gt;');
$mp3=str_replace('.mp3','[Silviu-S.com].mp3',$mp3);
echo '&lt;a href="'.$mp3.'"&gt;'.$n1.'&lt;/a&gt;';
$marime=limita($follows,'Marime&lt;/label&gt;&lt;span&gt;','&lt;/span&gt;');
echo '&lt;/br&gt;Marimea:';
echo $marime;
}
?&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;title&gt;Hotfiles.ro mp3 downloader - Silviu-S.com&lt;/title&gt;
&lt;body&gt;
&lt;form  method="get"&gt;
Melodie: &lt;input type="text" name="melodie"&gt;
&lt;input type="submit" value="Cauta"&gt;
&lt;/form&gt;
&lt;footer&gt;
&lt;center&gt;&lt;a href="http://silviu-s.com"&gt;Copyright - Silviu-S.com&lt;/a&gt;&lt;/center&gt;
&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

Daca folositi acest script, va rog sa pastrati footer-ul acestuia intact.