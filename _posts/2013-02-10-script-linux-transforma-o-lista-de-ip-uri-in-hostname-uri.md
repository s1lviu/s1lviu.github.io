---
id: 101
title: 'Script Linux: Transforma o lista de ip-uri in hostname-uri'
date: 2013-02-10T22:16:08+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=101
permalink: /script-linux-transforma-o-lista-de-ip-uri-in-hostname-uri/
dpsp_networks_shares:
  - 'a:0:{}'
categories:
  - Programming
tags:
  - hostname
  - ip
  - linux
  - script
---
Aveti aici un script bash care transforma o lista de ip-uri in reverse ip, adica in hostname-uri:

<pre class="brush: php; title: ; notranslate" title="">for i in `cat ip.txt`
do
nslookup $i |grep name |awk '{print $NF}' |sed 's/.$//' >> hosts.txt
done
</pre>
