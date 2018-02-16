---
id: 482
title: How to use jQuery and its modules with AngularJS ng-include
date: 2016-11-27T20:58:45+00:00
author: Silviu Stroe
layout: post
guid: https://silviu-s.com/?p=482
permalink: /use-jquery-library-modules-angularjs-ng-include/
hefo_before:
  - "0"
hefo_after:
  - "0"
image: /wp-content/uploads/2016/11/angular-jquery-680x300.jpg
categories:
  - Programming
tags:
  - angular
  - angular-js
  - jquery
  - jquery not working
  - jquery wait for angular
  - ng-include
---
Hi, folks!
  
These days I’ve tried to convert a basic html template bought from codecanyon to AngularJS. But there was a problem.
  
The jQuery does not wait for AngularJS to load because.. asynchronicity of the JavaScript language.

After few discussions with [Radu Amarie](https://eek.ro/), the Head Of Engineering at [Findie](https://www.findie.me/) (a great start-up 😀 ) and few unsuccessful tests, he recommended me to try this function from [SitePoint](https://www.sitepoint.com/dynamically-load-jquery-library-javascript/) which I have inserted in my main Angular controller:

<pre class="brush: jscript; title: ; notranslate" title="">(function () {

function loadScript(url, callback) {

var script = document.createElement("script")
script.type = "text/javascript";

if (script.readyState) { //IE
script.onreadystatechange = function () {
if (script.readyState == "loaded" || script.readyState == "complete") {
script.onreadystatechange = null;
callback();
}
};
} else { //Others
script.onload = function () {
callback();
};
}

script.src = url;
document.getElementsByTagName("head")[0].appendChild(script);
}

loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function () {

//jQuery loaded
console.log('jquery loaded');

});
})();

</pre>

 

In the first place, the solution won’t worked, because the scripts was still loading asyncronously. After that, I have setted

<pre class="brush: jscript; title: ; notranslate" title="">async=false;</pre>

after

<pre class="brush: jscript; title: ; notranslate" title="">script.type = "text/javascript";</pre>

and magically jQuery and Angular became friends and now I can continue the work! 😀

 

Later edit:
  
I found that [ocLazyLoad](https://oclazyload.readme.io/) is a more elegant solution, in combination with directives. 🙂

 
