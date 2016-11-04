// ==UserScript==
// @name          	2Performant Feed Adder
// @description     Adauga toate feed-urile in myFeed
//
// @author			Silviu Stroe <silviu@silviu-s.com>
// @namespace       https://s1lviu.github.io
// @downloadURL		https://s1lviu.github.io/2performant.user.js
//
// @license         GPLv3 - http://www.gnu.org/licenses/gpl-3.0.txt
// @copyright       Copyright (C) 2016, by Silviu Stroe <silviu@silviu-s.com>
//
// @include         https://network.2performant.com/affiliate/tools/product-feeds/*
// @match	        https://network.2performant.com/affiliate/tools/product-feeds/*
//
// @require https://code.jquery.com/jquery-2.1.1.min.js
//
// @version         1.0
// @updateURL		https://s1lviu.github.io/2performant.user.js
//
// @run-at			document-start
// @unwrap
// ==/UserScript==

/**
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * SCRIPT DESCRIPTION.
 *
 * @see http://wiki.greasespot.net/API_reference
 * @see http://wiki.greasespot.net/Metadata_Block
 */
(function () {
    $(document).ready(function () {

        var nrp = window.location.href.split(":")[2]; 
        
        if (window.location.search.substr(1).indexOf("message=Sesiunea+a+expirat") >= 0) {

           $('div.hidden-xs.hidden-sm > a').click()
    setTimeout(function(){ 
    $('div.btn.btn-default.ng-scope').click()
    }, 2000);
     setTimeout(function(){ 
    $('div.pull-right.p-t-sm.btn-group > button.btn.btn-primary.btn').click()
    }, 4000);
     setTimeout(function(){
     nrp++;
    window.location.href = "https://network.2performant.com/affiliate/tools/product-feeds/page:"+nrp
}, 5500);

    });
})();
