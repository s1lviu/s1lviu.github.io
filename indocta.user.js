// ==UserScript==
// @name          	Indocta Time Waster
// @description     Pastreaza userul logat pentru a face minimul de 50 de ore
//
// @author			Silviu Stroe <silviu@silviu-s.com>
// @namespace       https://s1lviu.github.io
// @downloadURL		https://s1lviu.github.io/indocta.user.js
//
// @license         GPLv3 - http://www.gnu.org/licenses/gpl-3.0.txt
// @copyright       Copyright (C) 2016, by Silviu Stroe <silviu@silviu-s.com>
//
// @include         http://*.indocta2.softelio.ro/*
// @match	        http://*.indocta2.softelio.ro/*
//
// @require https://code.jquery.com/jquery-2.1.1.min.js
//
// @version         1.2
// @updateURL		https://s1lviu.github.io/indocta.user.js
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


        if (window.location.search.substr(1).indexOf("message=Sesiunea+a+expirat") >= 0) {

            console.log("Magic happens");
            $("#login_box").val("silvius");
            $("#login_form > div:nth-child(4) > div.formElement > div > input").val("parola1337");
            $("#login_form > div:nth-child(5) > div.formElement > div.field > input").click();

        } else {
            console.log("You are already logged in :)");
        }


    });
})();
