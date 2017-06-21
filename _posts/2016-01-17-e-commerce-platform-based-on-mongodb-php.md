---
id: 396
title: 'E-commerce platform based on scalability, mongoDb &#038; php'
date: 2016-01-17T20:19:51+00:00
author: Silviu Stroe
layout: post
guid: http://silviu-s.com/?p=396
permalink: /e-commerce-platform-based-on-mongodb-php/
dpsp_networks_shares:
  - 'a:0:{}'
image: /wp-content/uploads/2016/01/mongodb-gui-tools-200x100.png
tags:
  - fast e-commerce
  - fast php shop
  - fast shop platform
  - mongodb shop
  - responsive shop
  - scalable e-commerce
---
S-commerce is a web e-commerce platform based on PHP, MongoDB, JQuery and HTML5 localstorage.

This platform is focused on scalability and high-performance loading.

S-Commerce is currently in beta and could be buggy.

GitHub project: <a href="https://github.com/s1lviu/S-Commerce" target="_blank">here</a>

Live demo: [S-Commerce Live Demo](http://silviu-s.com/proiecte/mongo)

<div id="wmd-preview-section-3" class="wmd-preview-section preview-content">
  <h2 id="project-scructure">
    Project scructure:
  </h2>
  
  <p>
    <img title="" src="https://i.imgur.com/VqNfzNm.png" alt="enter image description here" />
  </p>
  
  <p>
    The main site:<br /> <code>index.php</code> &#8211; The main site with product listing and search function (by title or description) .<br /> <code>account.php</code> &#8211; There is processed the information about account: register, login, address, orders and order details.<br /> <code>cart.php</code> &#8211; Contains the products added in shopping cart, with empty cart function, checkout functions and with informations about total cost of the products added .<br /> <code>db.php</code> &#8211; Here is the connection to the database server
  </p>
  
  <p>
    Resources:<br /> <code>resources</code> directory which contains the CSS and JavaScript files for a clean and logic structure<br /> <code>uploads</code> folder which contains the products images
  </p>
  
  <p>
    Administration:<br /> <code>admin</code> directory contains the <code>index.php</code> file which is responsable with adding products in database and<code>manage_products.php</code> a sistem which implement the <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete">CRUD</a> functions for products.
  </p>
</div>

<div id="wmd-preview-section-4" class="wmd-preview-section preview-content">
  <h2 id="databse-structure">
    Databse structure
  </h2>
  
  <p>
    <img title="" src="https://i.imgur.com/tTtrkDK.png" alt="enter image description here" />
  </p>
  
  <p>
    The database contains collections as you could see.<br /> Theese collections store the information about users, orders and products as JSON-like documents called <a href="https://en.wikipedia.org/wiki/BSON">BSON</a><br /> A collection it’s like a SQL table, but because it’s on NoSQL engine it process and deliver the information faster than a SQL database.<br /> The website database’s collections stores the following information:<br /> <code>users</code> contains the username, password, e-mail address and phisical address of the user<br /> <code>products</code> contains title, description, price and name of image associated with the product in order of build the image path<br /> <code>orders</code> contains the user_id which has placed a order and the ids of the products separated by semicolon
  </p>
  
  <p>
    All of these collections contain a unique identifier called <code>_id</code> in order of create the relations between them.
  </p>
</div>