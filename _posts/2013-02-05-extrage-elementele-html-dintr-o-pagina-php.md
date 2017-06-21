---
id: 90
title: 'Extrage elementele html dintr-o pagina [PHP]'
date: 2013-02-05T21:04:25+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=90
permalink: /extrage-elementele-html-dintr-o-pagina-php/
dpsp_networks_shares:
  - 'a:0:{}'
tags:
  - atribut
  - class
  - div
  - document
  - html
  - parseaza
---
<pre>Aveti mai jos un script foarte folositor, cu care puteti extrage elementele dintr-o pagina web dupa atribut.


<pre class="brush: php; title: ; notranslate" title="">
&lt;?php
$some_link = 'some website';
$tagName = 'div';
$attrName = 'class';
$attrValue = 'className';

$dom = new DOMDocument;
$dom-&gt;preserveWhiteSpace = false;
@$dom-&gt;loadHTMLFile($some_link);

$html = getTags( $dom, $tagName, $attrName, $attrValue );
echo $html;

function getTags( $dom, $tagName, $attrName, $attrValue ){
    $html = '';
    $domxpath = new DOMXPath($dom);
    $newDom = new DOMDocument;
    $newDom-&gt;formatOutput = true;

    $filtered = $domxpath-&gt;query("//$tagName" . '[@' . $attrName . "='$attrValue']");
    // $filtered =  $domxpath-&gt;query('//div[@class="className"]');
    // '//' when you don't know 'absolute' path

    // since above returns DomNodeList Object
    // I use following routine to convert it to string(html); copied it from someone's post in this site. Thank you.
    $i = 0;
    while( $myItem = $filtered-&gt;item($i++) ){
        $node = $newDom-&gt;importNode( $myItem, true );    // import node
        $newDom-&gt;appendChild($node);                    // append node
    }
    $html = $newDom-&gt;saveHTML();
    return $html;
}

?&gt;
</pre>


<p>
  Sursa: <a href="http://php.net" target="_blank">php.net</a>
</p>