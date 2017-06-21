---
id: 334
title: Cum instalam (FEMP) Nginx, MySQL, si PHP pe FreeBSD 10.1
date: 2015-01-27T15:04:40+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=334
permalink: /cum-instalam-femp-nginx-mysql-si-php-pe-freebsd-10-1/
dpsp_networks_shares:
  - 'a:0:{}'
image: /wp-content/uploads/2015/01/nginx--200x100.png
tags:
  - apache
  - freebsd
  - instalare nginx
  - mysql
  - nginx
  - nginx freebsd
  - performanta
  - php-fmp
  - server stabil
  - server web
  - web server freebsd
---
Aceste 4 elemente folosite impreuna, vor forma un mix de stabilitate si performanta pe serverul dumneavoastra, mai ales datorita sistemului de operare FreeBSD care aduce un mare plus in alocarea resurselor necesare intr-un mod destul de subtil, incat sa nu se creeze o supra-incarcare a serverului.
   
Deci, sa incepem instalarea. Prima data va fi nevoie sa instalam pachetele necesare prin comanda:

<pre class="brush: plain; title: ; notranslate" title="">sudo pkg install nginx mysql56-server php56 php56-mysql</pre>

Aceasta va instala Nginx ca webserver, serverul MySQL pentru managementul bazelor de date si limbajul de procesare PHP pentru continutul dinamic pe care il vom avea pe site/uri.
  
In continuare vom executa comanda rehash pentru a actualiza sistemul dupa noile modificari.

<pre class="brush: plain; title: ; notranslate" title="">rehash</pre>

Pornirea serviciilor
  
Pentru aceasta avem nevoie de variabila rcvar, iar prin executarea comenzii

<pre class="brush: plain; title: ; notranslate" title="">grep rcvar /usr/local/etc/rc.d/*</pre>

vom obtine un rezultat ca acesta:

<pre class="brush: plain; title: ; notranslate" title="">/usr/local/etc/rc.d/avahi-daemon:rcvar=avahi_daemon_enable
/usr/local/etc/rc.d/avahi-dnsconfd:rcvar=avahi_dnsconfd_enable
/usr/local/etc/rc.d/dbus:rcvar=dbus_enable
/usr/local/etc/rc.d/mysql-server:rcvar=mysql_enable
/usr/local/etc/rc.d/nginx:rcvar=nginx_enable
/usr/local/etc/rc.d/php-fpm:rcvar=php_fpm_enable
/usr/local/etc/rc.d/rsyncd:rcvar=rsyncd_enable
</pre>

In acest output vedem serviciile pe care le-am instalat, dar care inca nu sunt active. In continuare va trebui sa editam cateva fisiere, asa ca pentru comoditate va sfatuiesc sa folositi editorul nano, in loc de vi. Pentru a-l instala vom executa comanda:

<pre class="brush: plain; title: ; notranslate" title="">sudo pkg install nano
rehash
</pre>

Apoi, vom edita fisierul /etc/rc.conf cu comanda:

<pre class="brush: plain; title: ; notranslate" title="">sudo nano /etc/rc.conf</pre>

unde va trebui sa avem, in plus urmatoarele linii:

<pre class="brush: plain; title: ; notranslate" title="">mysql_enable="YES"
nginx_enable="YES"
php_fpm_enable="YES"</pre>

Vom apasa CTRL X pentru salvarea fisierului.
  
In continuare, ne vom ocupa de serviciul PHP-FPM. 

<pre class="brush: plain; title: ; notranslate" title="">cd /usr/local/etc</pre>

Unde vom edita fisierul php-fpm.conf

<pre class="brush: plain; title: ; notranslate" title="">sudo nano php-fpm.conf</pre>

Folosind CTRL W, vom cauta linia aceasta 

<pre class="brush: plain; title: ; notranslate" title="">listen = 127.0.0.1:9000</pre>

si o vom face sa arate asa 

<pre class="brush: plain; title: ; notranslate" title="">listen = /var/run/php-fpm.sock</pre>

pentru a putea sa folosim socket-uri. Dupa aceasta, vom cauta grupul de linii 

<pre class="brush: plain; title: ; notranslate" title="">;listen.owner = www
;listen.group = www
;listen.mode = 0660</pre>

si il vom decomenta, stergand punt si virgula din fata liniilor. Salvam si iesim.
  
In etapa urmatoare vom pune in uz fisierul de configuratie al PHP-ului, prin comanda

<pre class="brush: plain; title: ; notranslate" title="">sudo cp php.ini-production php.ini</pre>

si il vom edita 

<pre class="brush: plain; title: ; notranslate" title="">sudo nano php.ini</pre>

.
  
Vom cauta linia ce contine 

<pre class="brush: plain; title: ; notranslate" title="">cgi.fix_pathinfo</pre>

, o vom decomenta, iar la final ii vom seta valoarea 0: 

<pre class="brush: plain; title: ; notranslate" title="">cgi.fix_pathinfo=0</pre>

. Salvam si iesim, iar mai apoi pornim serviciul PHP-FPM prin comanda 

<pre class="brush: plain; title: ; notranslate" title="">sudo service php-fpm start</pre>

Configurarea serverului MySQL
    
Pentru a incepe configurarea, trebuie mai intai sa pornim serverul prin comanda

<pre class="brush: plain; title: ; notranslate" title="">sudo service mysql-server start</pre>

si sa incepem un proces de instalare/configurare a acesteia:

<pre class="brush: plain; title: ; notranslate" title="">sudo mysql_secure_installation</pre>

. Vom intampina un mesaj de introducere a parolei pentru userul curent 

<pre class="brush: plain; title: ; notranslate" title="">Enter current password for root (enter for none):</pre>

, dar vom apasa enter pentru a trece peste acest pas. Apoi, vom intampina mesajul 

<pre class="brush: plain; title: ; notranslate" title="">Set root password? [Y/n]</pre>

, vom apasa Y si enter pentru confirmare si ne vom alege o parola administrativa pentru serverul MySQL.
  
Ultimul pas este acela de a porni serverul, iar comanda necesara este 

<pre class="brush: plain; title: ; notranslate" title="">sudo service mysql-server restart</pre>

Dupa ce serverul a pornit, ne putem concentra asupra configurarii serverului web.
   
Primul pas este pornirea acestuia 

<pre class="brush: plain; title: ; notranslate" title="">sudo service nginx start</pre>

. In continuare, ne vom duce in folderul /usr/local/etc/nginx, prin comanda 

<pre class="brush: plain; title: ; notranslate" title="">cd /usr/local/etc/nginx</pre>

, unde vom modifica fisierul nginx.conf. 

<pre class="brush: plain; title: ; notranslate" title="">sudo nano nginx.conf</pre>

Vom decomenta directiva user, de la inceputul fisierului si o vom seta cu valoarea www, deoarece instanta PHP-FPM cauta aceasta configurare.
  
Linia va arata asa: 

<pre class="brush: plain; title: ; notranslate" title="">user www;</pre>

Apoi, va trebui sa setam worker_processes cu numarul de CPU-uri pe care le are serverul. Pentru a afla acest numar vom tasta comanda 

<pre class="brush: plain; title: ; notranslate" title="">sysctl hw.ncpu</pre>

in linia de comanda. Pentru mine rezultatul este 4, asa ca linia va arata asa: 

<pre class="brush: plain; title: ; notranslate" title="">worker_processes 4;</pre>

In continuare, vom seta fisierul cu log-uri, prin directiva

<pre class="brush: plain; title: ; notranslate" title="">error_log /var/log/nginx/error.log info;</pre>

In blocul http, vom seta log-urile de acces, prin linia corespunzatoare: 

<pre class="brush: plain; title: ; notranslate" title="">access_log /var/log/nginx/access.log;</pre>

In block-ul server, vom modifica server_name cu domeniul nostru sau cu adresa IP a serverului nostru. Putem face ca serverul sa raspunda si la host-ul www, prin adaugarea acestuia dupa domeniul principal. De exemplu:

<pre class="brush: plain; title: ; notranslate" title="">server {
    listen          80;
    server_name     silviu-s.com www.silviu-s.com;

    . . .
</pre>

Vom configura directivele root si index din block-ul server. Radacina noastra va fi /usr/local/www/silviu-s.com si directiva index ar trebui sa serveasca index.php inainte de a se uita dupa fisierele index.html sau index.htm
   
In directiva de locatie va trebui configurata directiva try_files pentru a servi fisierele catre utilizatori sau pentru a returna erori 404 in cazul negasirii lor.

<pre class="brush: plain; title: ; notranslate" title="">server {

    . . .

    root /usr/local/www/silviu-s.com;
    index index.php index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }

    . . .
</pre>

In continuare vom folosi socket-ul configurat mai devreme in php-fpm.conf. Va trebui sa setam SCRIPT_FILENAME pentru ca PHP-ul sa stie ce sa execute.

<pre class="brush: plain; title: ; notranslate" title="">server {

    . . .

    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/var/run/php-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $request_filename;
        include fastcgi_params;
    }
</pre>

Toate puse la un loc, ar trebui sa arate cam asa:

<pre class="brush: plain; title: ; notranslate" title="">user  www;
worker_processes  4;
error_log /var/log/nginx/error.log info;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    access_log /var/log/nginx/access.log;

    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;
        server_name  silviu-s.com www.silviu-s.com;
        root /usr/local/www/silviu-s.com;
        index index.php index.html index.htm;

        location / {
            try_files $uri $uri/ =404;
        }

        error_page      500 502 503 504  /50x.html;
        location = /50x.html {
            root /usr/local/www/nginx-dist;
        }

        location ~ \.php$ {
                try_files $uri =404;
                fastcgi_split_path_info ^(.+\.php)(/.+)$;
                fastcgi_pass unix:/var/run/php-fpm.sock;
                fastcgi_index index.php;
                fastcgi_param SCRIPT_FILENAME $request_filename;
                include fastcgi_params;
        }
    }
}
</pre>

Salvam si inchidem fisierul, dupa ce am terminat. In continuare, vom crea folderele si fisierele necesare pastrarii de log-uri

<pre class="brush: plain; title: ; notranslate" title="">sudo mkdir -p /var/log/nginx
sudo touch /var/log/nginx/access.log
sudo touch /var/log/nginx/error.log
</pre>

si vom crea din nou directoarele, fara legaturi:

<pre class="brush: plain; title: ; notranslate" title="">sudo rm /usr/local/www/nginx
sudo mkdir /usr/local/www/nginx
</pre>

Pentru a ne testa serverul, vom copia un fisier html in directorul radacina.

<pre class="brush: plain; title: ; notranslate" title="">sudo cp /usr/local/www/nginx-dist/index.html /usr/local/www/silviu-s.com</pre>

dar si un fisier php, pentru a vedea daca totul functioneaza cum trebuie:

<pre class="brush: plain; title: ; notranslate" title="">sudo nano /usr/local/www/nginx/info.php</pre>

unde vom introduce 

<pre class="brush: php; title: ; notranslate" title="">&lt;?php phpinfo(); ?&gt;</pre>

.
  
Salvam si iesim. Pentru a vedea daca avem erori de configuratie, introducem comanda 

<pre class="brush: plain; title: ; notranslate" title="">sudo nginx -t</pre>

unde vom primi ca output

<pre class="brush: plain; title: ; notranslate" title="">nginx: the configuration file /usr/local/etc/nginx/nginx.conf syntax is ok
nginx: configuration file /usr/local/etc/nginx/nginx.conf test is successful
</pre>

Vom restarta serverul: 

<pre class="brush: plain; title: ; notranslate" title="">sudo service nginx restart</pre>

si vom testa rezultatele.
  
Accesam http://silviu-s.com, respectiv host-ul sau IP-ul setat de dumneavoastra, iar rezultatul ar trebui sa arate cam asa:
  
![default nginx](https://assets.digitalocean.com/articles/freebsd_lemp/default_index.png)
  
Apoi vom accesa http://silviu-s.com/info.php unde vom avea pagina
  
![php freebsd nginx](https://assets.digitalocean.com/articles/freebsd_lemp/php_info.png)
  
Deoarece contine informatii senzitive, vom sterge fisierul info.php

<pre class="brush: plain; title: ; notranslate" title="">sudo rm /usr/local/www/silviu-s.com/info.php</pre>

In concluzie, trebuie sa aveti acum un server complet functional, ruland Nginx care poate procesa continut dinamic PHP si poate folosi MySQL pentru a stoca informatii.
  
Configuratia prezentata poate fi folosita ca o baza pentru o varietate a altor configuratii si aplicatii web.