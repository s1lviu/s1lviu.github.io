---
id: 373
title: Agenda telefonica in Java
date: 2015-08-30T12:50:43+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=373
permalink: /agenda-telefonica-in-java/
dpsp_networks_shares:
  - 'a:0:{}'
categories:
  - Programming
tags:
  - abonati
  - agenda de telefoane electronca
  - agenda java
  - agenda telefonica in java
  - cartedetelefon
  - cautare dupa nume
  - cnp
  - cod sursa
  - interfata grafica
  - model view controller
  - mvc
  - nrfix
  - nrmobil
  - nrtel
  - prenume
  - shareware
  - source code
  - sursa program
  - telefon
---
Salutare!
  
Am urmatorul proiect in Java.

> ENUNT
  
> Sa se construiasca o agenda de telefoane electronica, cu interfata grafica si facilitati de cautare dupa nume, prenume, CNP, telefon si afisare ordonata dupa oricare dintre aceste criterii. Aplicatia porneste initial in mod “shareware”, urmand ca, dupa introducerea codului corect de inregistrare, functionalitatea sa sa fie completa. (vezi detalii mai jos)
  
> PRINCIPII
  
> Cartea de telefoane este formata din abonati. Fiecare abonat este de fapt o persoana care are asociat un numar de telefon. Numerele de telefon pot fi de fix sau de mobil. Vom putea adauga/sterge/edita/ordona abonati, iar informatia se salveaza pe hard-disk la iesirea din program si se incarca la pornire, fiind de asemenea salvata periodic. Manevrarea informatiei se face prin intermediul unei interfete grafice (GUI).
> 
> CLASELE PREZENTE IN PROIECT
  
> Abonat
  
> NrTel – pe care o puteti folosi ca unica clasa pt numere de telefon, sau o puteti declara abstracta si din ea derivati alte doua, NrFix si NrMobil; oricum ar fi, tipul numarului de telefon este cunoscut si validarea tine cont de acest tip
  
> NrFix si NrMobil, daca ati ales varianta derivarii
  
> CarteDeTelefon – este de fapt clasa de pornire care depoziteaza abonatii si metodele de manevrare a acestora, asa-numitul “model” (din arhitectura M-V-C)
  
> Clasele corespunzatoare interfetelor grafice – care sa permita introducere abonat, modificare abonat, stergere abonat, cautare abonat dupa diverse criterii, afisare abonati sortati dupa un anume criteriu specificat de utilizator etc. Aici numarul, tipul si denumirile claselor le alegeti voi cum doriti.
  
> Nici o clasa nu va folosi constructori fara argument (nu dorim sa cream persoane fara nume, numere de telefon vide etc). In aceste conditii este nevoie de o validare a datelor pasate ca argumente, si protejarea impotriva datelor de intrare eronate.
  
> Toate clasele vor face override metodei toString(). De asemenea, abonatii vor fi subiectul ordonarii dupa diverse criterii, in consecinta fiind necesara rescrierea metodei equals() si/sau compareTo (interfata Comparable!) pentru cateva clase din proiect. Este de asemenea posibil, in functie de implementarea aleasa de voi, sa fie nevoie sa folositi un Comparator.
> 
> Clasa Abonat
> 
> Un obiect de tip Abonat are nume, prenume, CNP (care identifica in mod unic o persoana – pentru cazul a doua persoane cu acelasi nume) si un camp de tip NrTel. Obiectele de tip Abonat vor putea fi ordonate dupa oricare din cele 4 atribute.
> 
> Clasa CarteDeTelefon
> 
> Reprezinta “modelul” din arhitectura MVC. Abonatii vor fi stocati sub forma unei colectii. Pentru diversele operatiuni cu aceasta colectie va puteti folosi de algoritmii deja prezenti in clasa java.util.Collections (cautare, sortare etc).
> 
> Clasa CarteDeTelefon pune la dispozitia utilizatorului metode pentru:
  
> – adaugare/stergere/modificare de abonat
  
> – cautare abonat dupa fragmente de nume, numar, CNP si pozitie
  
> – salvarea/incarcarea bazei de date cu abonati (lucru cu hard-disk-ul)
  
> – ordonarea abonatilor dupa oricare dintre criteriile posibile
> 
> Interfata grafica
> 
> Cu exceptia cerintelor prezentate in continuare, design-ul ei este la latitudinea voastra, insa toate functiile enumerate mai sus trebuie sa se realizeze prin intermediul ei. Utilizatorul va putea sa aleaga operatiunea dorita, iar voi preluati input-ul lui si il pasati metodelor din „model” apelandu-le dupa necesitati.
  
> La pornirea aplicatiei va fi afisat timp de 2 secunde un splash screen, care va contine o poza aleasa de voi dedesubtul careia este scris numele vostru.
  
> Aplicatia porneste initial in mod shareware, care are urmatoarele (d)efecte:
  
> salvarea si incarcarea bazei de date sunt dezactivate (dezactivati elementele Open si Save din meniul File)
  
> In meniul Help este activ elementul Inregistrare
  
> dedesubtul ferestrei principale (ca parte a sa) va exista o zona de reclame. Alegeti cateva poze de aceeasi marime pe care le puneti intr-un JLabel, si pe care le schimbati periodic (odata la 3-5 secunde, sa zicem) cu ajutorul unui thread – puteti folosi Timer si TimerTask sau chiar un Thread.
  
> Fereastra principala va contine lista de abonati (care, la pornirea aplicatiei, este populata cu informatiile salvate anterior, daca exista) si butoane pentru adaugare/stergere/modificare/sortare/cautare/iesire. Fereastra va avea o bara de meniu, cu meniurile:
  
> File
  
> Open – deschiderea unei baze de date cu abonati; la click pe acest element se deschide o fereastra de alegere de fisier (JFileChooser)
  
> Save – salvarea bazei de date curente. Daca nu este inca stabilit fisierul in care trebuie salvat (in urma unei salvari anterioare), va fi afisat de asemenea un JFileChooser pentru a da utilizatorului posibilitatea de a alege locatia si numele fisierului. Atat acest element cat si precedentul vor fi dezactivate cat timp aplicatia se afla in mod de functionare shareware
  
> (Separator)
  
> Iesire – acelasi rol ca si butonul Iesire din fereastra principala; afiseaza un dialog de confirmare (“Doriti sa parasiti aplicatia?” Butoane: Da/Nu)
  
> Abonati
  
> Adauga… – are acelasi efect ca si butonul de adaugare din fereastra principala, si anume afisarea ferestrei/dialogului de adaugare de abonat
  
> Cauta… – analog
  
> Sterge… – analog
  
> Modifica… – analog
  
> Help
  
> Inregistrare – deschide un dialog care cere codul de inregistrare; in cazul in care codul este corect, se dezactiveaza acest element de meniu, se activeaza Open si Save din meniul File si se elimina reclamele. Fereastra de dialog se poate face usor cu JOptionPane.showInputDialog(…). Codul de inregistrare il stabiliti voi (preferabil scurt, din ratiuni de usurinta in testare…).
  
> (Separator)
  
> About – deschide o fereastra cu scurte informatii despre autor si aplicatie
> 
> Meniurile vor avea pe cat posibil mnemonice (shortcut-uri), iar butoanele texte ajutatoare (hint).
> 
> La dublu-click sau enter pe un abonat va fi afisata fereastra de modificare a acestuia. Apasand Del pe un abonat, va fi afisat un dialog de confirmare (“Doriti sa stergeti abonatul X?”, butoane Da/Nu) inaintea stergerii acestuia.
> 
> Ordonarea abonatilor va fi facuta fie cu click pe capul de tabel (in cazul in care folositi JTable), fie cu un set de componente separate ce permit selectarea criteriului de sortare dorit (ex: radio button-uri, drop down list plus un buton de sortare etc).
  
> Cautarea se va putea face dupa fragmente de nume/prenume/numar de telefon/CNP (practic are rol de filtrare a listei de abonati). Atunci cand exista un filtru setat, acesta trebuie evidentiat (sa apara undeva in fereastra, astfel incat utilizatorul sa stie ca lista nu este cea completa, ci una partiala).
  
> Validarea input-ului (cel de la utilizator, plus argumentele din constructori) va fi facuta folosind regex-uri si aruncand exceptii acolo unde este cazul.
  
> Alte facilitati
  
> Aplicatia va dispune de un thread care efectueaza salvarea bazei de date odata la 5 minute. Fisierul in care se face salvarea este cel ales de utilizator la deschiderea aplicatiei. Daca utilizatorul nu a ales inca un fisier pentru salvare, aceasta nu va avea loc automat.

Cine il doreste, ma poate contacta la sectiunea <a href="http://silviu-s.com/contact/" target="_blank">contact</a>, folosind formularul sau pe Skype.
