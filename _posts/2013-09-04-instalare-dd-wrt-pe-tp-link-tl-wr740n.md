---
id: 187
title: Instalare DD-WRT pe TP-Link TL-WR740N
date: 2013-09-04T17:02:48+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=187
permalink: /instalare-dd-wrt-pe-tp-link-tl-wr740n/
dpsp_networks_shares:
  - 'a:0:{}'
image: /wp-content/uploads/2013/09/factoryfirmwareupgradegerman-200x100.jpg
categories:
  - Articles
tags:
  - dd wrt tl wr740n
  - instalare dd wrt tp link tl wr740n
  - tp link tl wr740 n dd wrt instalare
---
In acest mic tutorial am sa va prezint cum sa instalati panoul de control DD-WRT pe router-ul dvs. TP-Link TL-WR740N, revizia 4.x (Download <a href="http://www.dd-wrt.com/site/support/router-database" target="_blank">aici</a> pentru alte revizii)

Pentru inceput descarcati <a title="DD-WRT pe TP-Link wr740n" href="http://hotfil.es/959432" target="_blank">aceasta arhiva</a> (parola este: silviu-s.com), in care o sa gasiti 2 fisiere:

Fisierul principal prin care faceti trecerea la DD-WRT, l-am redenumit wr740nv4\_en\_3\_16\_6\_up\_boot(130529).bin pentru a putea “pacali” sistemul de upgradare a routerului si a putea instala DD-WRT pe routerul TP-Link WR740N, iar al doilea fisier tl-wr740nv4-webflash.bin vine ca un upgrade la noul sistem.

Pentru a putea instala DD-WRT, va logati in panoul de control al routerului TP-Link, accesand tplinklogin.net sau 192.168.1.1.

Accesati din meniul din stanga “System tools”, iar apoi “Firmware upgrade”, exact ca in imaginea de mai jos:

[<img class="alignnone size-medium wp-image-188" alt="factoryfirmwareupgradegerman" src="http://silviu-s.com/wp-content/uploads/2013/09/factoryfirmwareupgradegerman-300x159.jpg" width="300" height="159" srcset="https://silviu-s.com/wp-content/uploads/2013/09/factoryfirmwareupgradegerman-300x159.jpg 300w, https://silviu-s.com/wp-content/uploads/2013/09/factoryfirmwareupgradegerman.jpg 681w" sizes="(max-width: 300px) 100vw, 300px" />](http://silviu-s.com/wp-content/uploads/2013/09/factoryfirmwareupgradegerman.jpg)

Aici veti alege fisierul cu numele: wr740nv4\_en\_3\_16\_6\_up\_boot(130529).bin si veti apasa butonul Upgrade.

Veti astepta sa se instaleze DD WRT cateva minute, apoi veti intra in “Administration” , tabul “Firmware Upgrade”, unde veti alege fisierul cu numele tl-wr740nv4-webflash.bin si veti apasa din nou Upgrade, ca in poza de mai jos.

[<img class="alignnone size-medium wp-image-189" alt="ddwrt_firmware" src="http://silviu-s.com/wp-content/uploads/2013/09/ddwrt_firmware-300x168.jpg" width="300" height="168" srcset="https://silviu-s.com/wp-content/uploads/2013/09/ddwrt_firmware-300x168.jpg 300w, https://silviu-s.com/wp-content/uploads/2013/09/ddwrt_firmware.jpg 807w" sizes="(max-width: 300px) 100vw, 300px" />](http://silviu-s.com/wp-content/uploads/2013/09/ddwrt_firmware.jpg)

Si asa se termina instalarea panoului de control DD-WRT pe routerul dvs. TP-Link TL WR740N.

Acum aveti un router modat, cu mult mai multe optiuni, acces SSH si Telnet si va puteti creea chiar un mini server web pe acesta.

**Atentie: Tot ce faceti e pe propria raspundere! Nu imi asum niciun risc pentru eventualele pentru eventuala brickuire (stricare) a routerului!**
