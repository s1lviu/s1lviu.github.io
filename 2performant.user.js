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
// @include         https://network.2performant.com/affiliate/tools/product-feeds*
// @match	        https://network.2performant.com/affiliate/tools/product-feeds*
//
//
// @version         2.0
// @updateURL		https://s1lviu.github.io/2performant.user.js
//
// @run-at			document-end
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
        var i = 3;
        if (typeof window.location.href.split(":")[2] !== 'undefined')
            var nrp = window.location.href.split(":")[2];
        else
            nrp = 1;

        function myLoop() {

            setTimeout(function () {
                console.log("Am adaugat produsul nr. " + (i - 3) + ", pagina " + nrp);
                $('tbody > tr:nth-child(' + i + ') > td.text-right.text-left-xs.text-left-sm > div.hidden-xs.hidden-sm > a').click();
                if (i < 22) {
                    myLoop();
                    doi();
                } else {
                    doi();
                    nrp++;
                    window.location.href = "https://network.2performant.com/affiliate/tools/product-feeds/page:" + nrp;
                    i = 3;
                    myLoop();
                }
                i++;

            }, 3000);
        }

        function doi() {
            setTimeout(function () {
                $('body > div.modal.fade.ng-isolate-scope.in > div > div > div > div > div.btn-group-vertical.m-t.w-full > div.btn.btn-default.ng-scope').click()
                $('body > div.modal.fade.ng-isolate-scope.in > div > div > div > div > div.pull-right.p-t-sm.btn-group > button.btn.btn-primary.btn').click();
            }, 1500);
        }

        myLoop();


    });
})();
