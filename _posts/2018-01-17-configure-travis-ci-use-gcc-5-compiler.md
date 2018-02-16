---
id: 566
title: Configure Travis-CI to use the GCC 5 compiler
date: 2018-01-17T20:41:04+00:00
author: Silviu Stroe
layout: post
guid: https://silviu-s.com/?p=566
permalink: /configure-travis-ci-use-gcc-5-compiler/
hefo_before:
  - "0"
hefo_after:
  - "0"
ampforwp_custom_content_editor:
  - ""
ampforwp_custom_content_editor_checkbox:
  - null
ampforwp-amp-on-off:
  - default
categories:
  - Articles
  - Programming
tags:
  - gcc
  - gcc 5
  - gcc5
  - travis
  - travis ci gcc 5
  - travis ci gcc5
  - travis-ci
---
Travis CI is a platform where you can test the software you build after every Github push (in my case).
  
After you have did the push, Github send a request to Travis and it start to clone and build your project about the instructions from

<pre class="brush: plain; title: ; notranslate" title="">.travis.yml</pre>

configuration file from your repo.
  
But, this time I will tell you how to instruct Travis to compile your code with GCC 5 compiler version. And it’s very simple. I was needed to do that while I was working at [WebDollar](https://silviu-s.com/webdollar-coin-internet-newest-internet-cryptocurrency/) cryptocurrency project.
  
Bellow you have the config of Travis:

<pre class="brush: plain; title: ; notranslate" title="">{
  "language": "node_js",
  "sudo": "required",
  "before_install": [
    "npm install -g node-gyp"
  ],
  "node_js": "stable",
  "env": "CXX=g++-5",
  "addons": {
    "apt": {
      "sources": [
        "ubuntu-toolchain-r-test"
      ],
      "packages": [
        "g++-5"
      ]
    }
  },
  "group": "stable",
  "dist": "trusty",
  "os": "linux"
}
</pre>

As you can see, in the apt section, in sources I have the ubuntu-toolchain-r-test. This source contain the g++ version 5 compiler.
  
Bellow apt section I instruct the environment to use that GCC compiler.
