---
id: 497
title: How to send Firebase user auth token with every request in AngularJS
date: 2017-03-12T14:22:22+00:00
author: Silviu Stroe
layout: post
guid: https://silviu-s.com/?p=497
permalink: /send-firebase-user-auth-token-every-request-angularjs/
hefo_before:
  - "0"
hefo_after:
  - "0"
image: /wp-content/uploads/2017/03/angular-firebase-600x300.jpg
categories:
  - Articles
  - Programming
tags:
  - angular firebase
  - angular firebase auth token
  - firebase current user
  - firebase logged user
  - firebase token
  - firebase verify logged user
  - send firebase token
---
Hello, guys!

If you want to build an AngularJS app based of Firebase, probably at a certain time you want to verify if the logged user it’s the same one that makes requests to your backend server in order to serve specific data securely.
  
For this to happen, we must write a [service](https://docs.angularjs.org/guide/services) that will return a [promise](https://docs.angularjs.org/api/ng/service/$q) which contains the logged user’s token if the user is authenticated or else a error.

<pre class="brush: jscript; title: ; notranslate" title="">.factory('User', function ($q) {

        return {
            authToken: function () {
                return $q(function (resolve, reject) {
                    firebase.auth().onAuthStateChanged(function (user) {
                        if (user) {
                            user.getToken().then(function (data) {
                                resolve(data);
                            }).catch(function (err) {
                                reject(err);
                            });
                        }
                    });
                })
            }
     
        }

    })
</pre>

Then, we need a http request [interceptor](https://docs.angularjs.org/api/ng/service/$http) that will wait for the token promise defined above and will inject it in every http header request.

<pre class="brush: jscript; title: ; notranslate" title="">angular.module('YourApp').config(function ($httpProvider) {
  
    $httpProvider.interceptors.push(function (User, $q) {
        return {
            request: function (req) {
                var deferred = $q.defer();
                // Set the `Authorization` header for every outgoing HTTP request
                User.authToken().then(function (data) {
                    req.headers.Authorization = data; //set the Auth token
                    deferred.resolve(req);
                });

                return deferred.promise;
            }
        };
    })
});
</pre>

Now, all you need is to [verify the token](https://firebase.google.com/docs/auth/admin/verify-id-tokens) on your backend.
