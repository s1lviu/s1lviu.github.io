---
id: 244
title: Optimizare SEO pentru imagini
date: 2014-01-17T12:17:11+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=244
permalink: /optimizare-seo-pentru-imagini/
dpsp_networks_shares:
  - 'a:0:{}'
categories:
  - Articles
tags:
  - exif seo
  - imagini exif
  - imagini google imagini
  - imagini seo
  - optimizare imagini seo
  - seo pentru imagini
---
Din cate probabil stiti, google indexeaza mult mai multe informatii decat vedem in motorul de cautare in mod obisnuit. La aceste informatii se adauga si metadata din imagini. Am observat asta cautand in google images dupa niste tag-uri si am examinat o imagine sa vad pe ce criteriu mi-a aparut in search pentru ca numele acesteia nu avea nicio legatura cu ce am cautat eu.

Imaginea am analizat-o cu <a href="http://en.wikipedia.org/wiki/ExifTool" target="_blank" rel="nofollow">exiftool</a>

Sa vedem cum sta treaba.

Descarcam o imagine de pe un site oarecare:

<div>
  <div>
    Code:
  </div>
  
  <pre>marian@pluto:~/work/<acronym title="Search Engine Optimization">seo</acronym>$ curl -o imagine.jpg http://cache.pakistantoday.com.pk/2013/05/5274-gun-fire-WallFizz.jpg
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  341k  100  341k    0     0   180k      0  0:00:01  0:00:01 --:--:--  248k
marian@pluto:~/work/<acronym title="Search Engine Optimization">seo</acronym>$</pre>
</div>

Vedem ce informatii meta contine imaginea originala:

<div>
  <div>
    Code:
  </div>
  
  <pre>macbook <acronym title="Search Engine Optimization">seo</acronym>$ exiftool-5.12 imagine.jpg 
ExifTool Version Number         : 9.06
File Name                       : imagine.jpg
Directory                       : .
File Size                       : 49 kB
File Modification Date/Time     : 2014:01:16 23:35:43+02:00
File Access Date/Time           : 2014:01:16 23:35:43+02:00
File Permissions                : rw-r--r--
File Type                       : JPEG
MIME Type                       : image/jpeg
JFIF Version                    : 1.01
Resolution Unit                 : inches
X Resolution                    : 1
Y Resolution                    : 1
Image Width                     : 600
Image Height                    : 400
Encoding Process                : Baseline DCT, Huffman coding
Bits Per Sample                 : 8
Color Components                : 3
Y Cb Cr Sub Sampling            : YCbCr4:2:0 (2 2)
Image Size                      : 600x400
macbook <acronym title="Search Engine Optimization">seo</acronym>$</pre>
</div>

Adaugam ceva keywords, descriere, copyright:

<div>
  <div>
    Code:
  </div>
  
  <pre>marian@pluto:~/work/<acronym title="Search Engine Optimization">seo</acronym>$ exiftool \
> -Comment='Brandurile comercializate de compania RST LTD va asigura garantia calitatii' \
> -Keywords='calitate,nume produs,cod produs, exemplu ..' \
> -Copyright='RST LTD @ 2014' \
> imagine.jpg
    1 image files updated</pre>
</div>

Verificam informatiile introduse in imagine:

<div>
  <div>
    Code:
  </div>
  
  <pre>marian@pluto:~/work/<acronym title="Search Engine Optimization">seo</acronym>$ exiftool imagine.jpg
ExifTool Version Number         : 8.60
File Name                       : imagine.jpg
Directory                       : .
File Size                       : 342 kB
File Modification Date/Time     : 2014:01:16 21:58:28+00:00
File Permissions                : rw-r--r--
File Type                       : JPEG
MIME Type                       : image/jpeg
JFIF Version                    : 1.01
Exif Byte Order                 : Big-endian (Motorola, MM)
X Resolution                    : 1
Y Resolution                    : 1
Resolution Unit                 : None
Y Cb Cr Positioning             : Centered
Copyright                       : RST LTD @ 2014
Current IPTC Digest             : 5e9c360d0a9d4da80f86fbad65df409b
Keywords                        : calitate,nume produs,cod produs, exemplu ..
Application Record Version      : 4
Comment                         : Brandurile comercializate de compania RST LTD va asigura garantia calitatii
Image Width                     : 1600
Image Height                    : 1200
Encoding Process                : Baseline DCT, Huffman coding
Bits Per Sample                 : 8
Color Components                : 3
Y Cb Cr Sub Sampling            : YCbCr4:2:0 (2 2)
Image Size                      : 1600x1200</pre>
</div>

Referinte:

– <a href="http://en.wikipedia.org/wiki/ExifTool" target="_blank" rel="nofollow">ExifTool – Wikipedia, the free encyclopedia</a>
  
– <a href="http://www.sno.phy.queensu.ca/~phil/exiftool/" target="_blank" rel="nofollow">ExifTool by Phil Harvey</a>
  
– <a href="http://www.sno.phy.queensu.ca/~phil/exiftool/exiftool_pod.html" target="_blank" rel="nofollow">exiftool Application Documentation</a>

<a href="http://googlewebmastercentral.blogspot.de/2012/04/1000-words-about-images.html" target="_blank" rel="nofollow">Official Google Webmaster Central Blog: 1000 Words About Images</a>

<div>
  <div>
    Code:
  </div>
  
  <pre>Q: What happens to the EXIF, XMP and other metadata my images contain?
A: We may use any information we find to help our users find what they’re looking for more easily. Additionally, information like EXIF data may be displayed in the right-hand sidebar of the interstitial page that appears when you click on an image.

Q: Should I really submit an Image Sitemap? What are the benefits?
A: Yes! Image Sitemaps help us learn about your new images and may also help us learn what the images are about.</pre>
</div>

Nota: Chestia cred ca este buna daca cineva va fura tot timpul pozele facute de voi.
  
Il puteti da in judecata si aveti dovada clara ca pozele sunt ale voastre (prin metadata info)
  
Avantajul este ca puteti ridica un site web si in google images dupa anumite cuvinte cheie.

Sursa: https://rstforums.com/forum/80116-search-engine-optimization-pentru-imagini.rst
