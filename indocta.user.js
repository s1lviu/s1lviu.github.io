// ==UserScript==
// @name          	Indocta Time Waster
// @description     Pastreaza userul logat pentru a face minimul de 50 de ore
// @icon            https://raw.github.com/sepehr/userscript-SCRIPT/master/SCRIPT.png
//
// @author			Silviu Stroe <silviu@silviu-s.com>
// @namespace       https://s1lviu.github.io
// @downloadURL		https://s1lviu.github.io/indocta.user.js
//
// @license         GPLv3 - http://www.gnu.org/licenses/gpl-3.0.txt
// @copyright       Copyright (C) 2016, by Silviu Stroe <silviu@silviu-s.com>
//
// @include         http://*.indocta2.softelio.ro/*
// @match	    http://*.indocta2.softelio.ro/*
//
// @require https://code.jquery.com/jquery-2.1.1.min.js
//
// @version         1.0
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
    console.log("merge");
    var x = $("#login_box").val();
    console.log(x);
})();
