---
id: 414
title: MongoDB on Laravel Homestead with PHP 7
date: 2016-02-25T20:58:50+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=414
permalink: /mongodb-on-laravel-homestead-with-php-7/
dpsp_networks_shares:
  - 'a:0:{}'
image: /wp-content/uploads/2016/02/laravel-200x100.png
categories:
  - Articles
tags:
  - mongodb
  - mongodb homestead
  - mongodb laravel homestead
  - mongodb php 7
  - mongodb ubuntu 14.04
  - php 7
---
Hi, folks!
  
Because I had some troubles with installing and enabling MongoDB driver on Laravel Homestead with PHP 7 version installed on it, I will explain here how I have solved them.

## Install MongoDB package

Import public key:

<pre class="brush: bash; title: ; notranslate" title="">sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10 </pre>

Creating a List File:

<pre class="brush: bash; title: ; notranslate" title="">echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list </pre>

Update packages list:

<pre class="brush: bash; title: ; notranslate" title="">sudo apt-get update </pre>

Install MongoDB package:

<pre class="brush: bash; title: ; notranslate" title="">sudo apt-get install -y mongodb-org</pre>

## Make connection with PHP

Firstly, I have installed PHP MongoDB driver:

<pre class="brush: bash; title: ; notranslate" title="">sudo pecl install mongodb</pre>

Secondly, I have added in

<pre class="brush: bash; title: ; notranslate" title="">/etc/php/7.0/fpm/php.ini
</pre>

and in

<pre class="brush: bash; title: ; notranslate" title="">/etc/php/7.0/cli/php.ini
</pre>

the following code

<pre class="brush: bash; title: ; notranslate" title="">extension=mongodb.so </pre>

Finally, we need to save the changes:

<pre class="brush: bash; title: ; notranslate" title="">sudo service php7.0-fpm restart && sudo service nginx restart</pre>
