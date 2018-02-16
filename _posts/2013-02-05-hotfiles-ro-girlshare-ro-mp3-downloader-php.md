---
id: 87
title: 'Hotfiles.ro – Girlshare.ro Mp3 Downloader [PHP]'
date: 2013-02-05T20:57:43+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=87
permalink: /hotfiles-ro-girlshare-ro-mp3-downloader-php/
dpsp_networks_shares:
  - 'a:0:{}'
categories:
  - Projects
tags:
  - download
  - fileshare
  - girlshare.ro
  - hotfiles.ro
  - mp3
---
Am creeat un script care preia prima melodie mp3 cautata de pe hotfiles.ro si ofera link de download pentru aceasta si marimea acesteia! Script-ul il aveti mai jos:

<pre class="brush: php; title: ; notranslate" title=""><?php
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
$newDom->formatOutput = true;

$filtered = $domxpath->query("//$tagName" . '[@' . $attrName . "='$attrValue']");
$i = 0;
while( $myItem = $filtered->item($i++) ){
$node = $newDom->importNode( $myItem, true );    // import node
$newDom->appendChild($node);                    // append node
}
$html = $newDom->saveHTML();
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
$dom->preserveWhiteSpace = false;
@$dom->loadHTMLFile($some_link);

$html = getTags( $dom, $tagName, $attrName, $attrValue );
$f1=explode('mp3"',$html);
$l = $f1[1];
$l1 = limita($l,'href="','"> ');
$l1 = 'http://www.hotfiles.ro'.$l1.'';
$n1= limita($l,'title="','"');
$follows = get_data($l1);
$follow = limita($follows,'href="http://www.hotfiles.ro:8079/dmz/fisier/redirect/girlshare','"');
$final = 'http://www.hotfiles.ro:8079/dmz/fisier/redirect/girlshare'.$follow.'';
$finish=get_data($final,$l1);
$finish=limita($finish,'<p class="waiting"> ',' pentru');
$finish=limita($finish,'"','"');
$mp3=get_data($finish);
$mp3=limita($mp3,'"POST" action="','">');
$mp3=str_replace('.mp3','[Silviu-S.com].mp3',$mp3);
echo '<a href="'.$mp3.'">'.$n1.'</a>';
$marime=limita($follows,'Marime</label><span>','</span>');
echo '</br>Marimea:';
echo $marime;
}
?>
<!DOCTYPE html>
<html>
<title>Hotfiles.ro mp3 downloader - Silviu-S.com</title>
<body>
<form  method="get">
Melodie: <input type="text" name="melodie">
<input type="submit" value="Cauta">
</form>
<footer>
<center><a href="http://silviu-s.com">Copyright - Silviu-S.com</a></center>
</footer>
</body>
</html>
</pre>

Daca folositi acest script, va rog sa pastrati footer-ul acestuia intact.
