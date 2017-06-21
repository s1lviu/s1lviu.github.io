---
id: 445
title: 'WebStorm &#038; React Native: Transpiles ECMAScript 6 code to ECMAScript 5 &#8211; Babel'
date: 2016-08-24T14:06:07+00:00
author: Silviu Stroe
layout: post
guid: https://silviu-s.com/?p=445
permalink: /webstorm-react-native-transpiles-ecmascript-6-code-ecmascript-5/
dpsp_networks_shares:
  - 'a:0:{}'
image: /wp-content/uploads/2016/08/react-native-400x300.png
tags:
  - babel
  - jsx
  - react native babel
  - react native development
  - react native webstorm
---
Hi, geeks!

If you plan to use WebStorm for React Native development, it&#8217;s good to set a file watcher.
  
From the jetbrains blog we will find that
  
&#8220;For some time now WebStorm has supported **ECMAScript 6** (a.k.a. ECMAScript 2015), the future standard for JavaScript. While its features get more and more support in modern browsers and runtimes (see the [Kangax compatibility table](http://kangax.github.io/compat-table/es6/)), to deploy your ES6 code you still need to compile it to ES5.1, the current version of JavaScript.&#8221;

## Setting up Babel File watcher {#setting-up-babel-file-watcher}

_File watcher_ is a WebStorm built-in tool that allows you to automatically run some command-line tools on file changes. For Babel WebStorm has pre-configured File watchers. Let’s see how to enable it.

<p id="babelfilewatcher">
  Install <a href="http://babeljs.io/docs/setup/#babel_cli">Babel CLI</a> in your project via npm:
</p>

<pre class="brush: plain; title: ; notranslate" title="">npm install --save-dev babel-cli</pre>

Now go to Preferences | Tools | File watchers, click + button and select Babel file watcher from the list.

In addition to that, you need to install Babel 6 preset for transpiling ECMAScript 6 locally in your project (for JSX you need _babel-preset-react_ plugin instead). To do that open the Terminal at your application root directory and run:

<pre class="brush: plain; title: ; notranslate" title="">npm i babel-preset-react-native --save-dev</pre>

Add _.babelrc_ file to your project with the following code to enable the preset:

<pre class="brush: plain; title: ; notranslate" title="">{
  "presets": ["react-native"]
}
</pre>

All other Watcher settings are predefined, so it is now ready to use. With this default setup, compiled files will be located next to the original files.

<img class="size-medium" src="http://i.imgur.com/Yz2zHFR.png" alt="babel react native" width="2560" height="1600" />

_I&#8217;ll come back with more details soon._

References:

<blockquote data-secret="wTahaWfSw0" class="wp-embedded-content">
  <p>
    <a href="https://blog.jetbrains.com/webstorm/2015/05/ecmascript-6-in-webstorm-transpiling/">ECMAScript 6 in WebStorm: Transpiling</a>
  </p>
</blockquote>



[Babel preset on GitHub](https://github.com/facebook/react-native/tree/master/babel-preset)

&nbsp;