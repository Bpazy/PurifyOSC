

// ==UserScript==
// @name         PurifyOSC
// @namespace    https://github.com/Bpazy/PurifyOSC
// @version      0.0.1
// @description  Purify OSCHINA
// @author       Bpazy
// @match        https://www.oschina.net/*
// ==/UserScript==

(function () {
    'use strict';
    const mulanDoms = document.querySelectorAll('a[title*="木兰"]');
    mulanDoms.forEach(d => d.setAttribute('style', 'filter:blur(3px); pointer-events:none;'));
})();
