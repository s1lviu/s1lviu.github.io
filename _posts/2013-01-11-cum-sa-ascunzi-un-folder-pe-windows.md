---
id: 66
title: Cum sa ascunzi un folder pe Windows
date: 2013-01-11T21:42:39+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=66
permalink: /cum-sa-ascunzi-un-folder-pe-windows/
dpsp_networks_shares:
  - 'a:0:{}'
tags:
  - "2000"
  - "7"
  - "8"
  - ascunzi
  - cum
  - folder
  - in
  - sa
  - un
  - vista
  - windows
  - xp
---
Poate v-ati intrebat vreo data daca se poate acest lucru si fara programe aditionale. Va prezint un tutorial facut de **<a id="yui-gen21" title="B7ackAnge7z is online now" href="https://rstforums.com/forum/members/b7ackange7z/" rel="nofollow">B7ackAnge7z</a> **care ne prezinta pasii pentru a realiza acest lucru:**
  
** 

În acest tutorial voi descrie o metodă interesantă de a ascunde fișierele ce nu vor putea fi accesate de către utilizatorii sistemului de operare Windows (începând de la versiunea Win2000 și terminând cu ultima — Win8). De fapt merge vorba despre un bug, din cauza căruia procesul _explorer.exe_ este obligat să părăsească locul de muncă (pe scurt — se închide automat și se restartează).

Ideea constă în modificarea folderului și „transformarea” acestuia într-un shortcut ce face referire la fișierul _desktop.ini_ din același folder. Iată de ce, atunci când _explorer.exe_ încearcă să afle proprietățile folderului, acesta din urmă face din nou referire la obiectul său și&#8230; și tot așa până când procesul se dă bătut (iar acest lucru se întâmplă foarte repede).

_Creators of „New folder” and „New folder (2)” proudly present — „New folder (3): The killer”
  
— the drama of **explorer.exe**_

<span style="font-size: medium;"><b>Istorie</b></span>
  
Persoana care a descoperit acest bug, fiind în anii studenției pe vremea când internetul „picura” cu un scârțâit de mulți cunoscut („pierzând toată noaptea pentru a vedea 4-5 poze” (c)) și dischetele erau la modă, (persoana) dorea să se asigure că datele salvate într-un PC de la universitate nu vor fi șterse sau copiate de către alți studenți. Dat fiind faptul că dischetele erau unicul și cel mai nesigur mod de a „transporta” datele din/către acel PC, eroul nostru a hotărât să găsească o metodă de a ascunde și de a proteja folderul personal pentru ca nimeni să nu-l poată șterge sau copia.

Despre ascunderea unui folder folosind funcțiile Windows nici nu mergea vorba — toți știau cum pot fi găsite acestea. Însă, după mai multe încercări și teste, a găsit un bug foarte interesant care oprește forțat procesul _explorer.exe_ atunci când utilizatorul deschide folderul personal sau folderul în care se afla acesta. El (eroul) știind calea completă putea accesa direct fișierele ascunse în folderul personal.

<span style="font-size: medium;"><b>Explicație</b></span>
  
De exemplu, fiecare utilizator avea dreptul de a crea/șterge/edita datele din folderul D:\usr\, în care fiecare student își salva informațiile necesare. Eroul nostru însă, dorind să păstreze și ceva date mai importante a creat folderul D:\usr\name\key1\key2\ unde făcea backup de pe dischetă și/sau salva alte informații importante. Pentru D:\usr\name\key1\ însă a folosit trucul de care vorbeam mai sus. Astfel, oricine încerca să deschidă D:\usr\name\ sau D:\usr\name\key1\(aceștia probabil erau mai puțini, căci nu toți reușeau să țină minte numele folderului \key1\) nu vedea altceva decât eroarea de rămas bun al procesului _explorer.exe_. Autorul însă, ținând minte numele folderelor \key1\ și \key2\ insera direct calea către acest ultim folder, iar _explorer.exe_rămânea pe poziții deoarece nu trebuia să afle proprietățile folderului \key1\.

<span style="font-size: medium;"><b>Transformare</b></span>
  
Pentru a proteja folderul folosind metoda de mai sus, e necesar să parcurgeți următorii pași (în ordinea specificată):

  1. Creați un folder în locul dorit
  2. Marcați folderul ca fiind te tip „System”
  3. În acest folder creați un fișier _desktop.txt_ în care scrieți: <div>
      <div>
        Code:
      </div>
      
      <pre>[.ShellClassInfo]
CLSID2={0AFACED1-E828-11D1-9187-B532F1E9575D}
Flags=2</pre>
    </div>

  4. Redenumiți fișierul _desktop.txt_ în _desktop.ini_
  5. Creați un shortcut către _desktop.ini_ cu numele _target.lnk_
  6. Priviți cum _explorer.exe_ se zbate în ghiarele ciclului infinit.

<span style="font-size: medium;"><b>Bonus</b></span>
  
Totuși, este și o mică problemă — în cazul eroului, oricine putea șterge folderul D:\usr\name\ fără a-l deschide.

Însă, voi oferi un mic bonus, pentru a interzice ștergerea folderului personal. Chestia e foarte simplă — pentru sistemele de operare Windows, există o listă de cuvinte cheie ce nu pot fi folosite la crearea unui folder sau fișier. Culmea e că, așa cum nu pot fi create astfel de obiecte, ele nu pot fi nici șterse dacă s-a reușit crearea unui astfel de obiect. Unul dintre aceste cuvinte cheie este și_NUL_. Ideea mea e simplă, creăm un folder cu numele _NUL_ în folderul personal și în modul acesta interzicem ștergerea acestuia din urmă.

<span style="font-size: medium;"><b>Automatizare</b></span>
  
Pentru a simplifica tot ce a fost scris mai sus, am făcut un mic script în VBScript care trebuie salvat în folderul personal ca pe un fișier cu extensia _.vbs_ — executând scriptul de mai jos în folderul personal, acesta v-a fi modificat corespunzător, iar procesul _explorer.exe_ se v-a restarta.

<div>
  <div>
    Code:
  </div>
  
  <pre>' Indicăm dacă folderul poate fi șters sau nu
Removable = false

' Obținem locația folderului curent
Set fs = WScript.createObject("Scripting.FileSystemObject")
folder = fs.GetAbsolutePathName(".")

' Dacă e nevoie, folosim un mic truc pentru a proteja ștergerea folderului
If Not Removable Then
   ' Creăm un folder aleatoriu
   Randomize
   secretFolder = folder & "\" & Int(Rnd(1) * 99999999) & "\"
   fs.createFolder(secretFolder)

   ' NUL folder
   On Error Resume Next
   fs.createFolder(secretFolder & "\NUL\")
End If

' Marcăm folderul ca fiind de tip "system"
fs.getFolder(folder).attributes = 4

' Liniile ce vor fi scrise în fișierul desktop.ini
lines = Array("[.ShellClassInfo]", "CLSID2={0AFACED1-E828-11D1-9187-B532F1E9575D}", "Flags=2")

' Scriem datele necesare în desktop.ini
Set file = fs.openTextFile(folder + "\desktop.ini", 2, True)
file.write join(lines, vbCrLf)
file.close

' Creăm shortcut-ul target.lnk către fișierul desktop.ini
Set link = WScript.CreateObject("WScript.Shell").createShortcut(folder + "\target.lnk")
link.targetPath = folder + "\desktop.ini"
link.save

msgBox "Folder-ul a fost modificat cu succes", 64, "Explorer.exe: Au revoir mon cheri"</pre>
</div>

<span style="font-size: medium;"><b>Sfaturi</b></span>

  1. Nu creați folderul personal pe desktopul propriu (ghiciți de ce)
  2. Nu uitați că folderul personal poate fi accesat din alt sistem de operare
  3. Nu uitați că discul local poate fi formatat (astfel nu vă mai protejează nimic datele)
  4. Nu uitați că cuvântul cheie _NUL_ este valabil doar pentru Windows
  5. Nu uitați să experimentați — e un bug foarte isteț
  6. Nu uitați să postați întrebările și ideile voastre

_Sursa: rstforums.com_