

// ==UserScript==
// @name         PurifyOSC
// @namespace    https://github.com/Bpazy/PurifyOSC
// @version      0.0.2
// @description  Purify OSCHINA
// @author       Bpazy
// @match        https://www.oschina.net/*
// ==/UserScript==

(function () {
    'use strict';

    // 屏蔽木兰
    const mulanDoms = document.querySelectorAll('a[title*="木兰"]');
    mulanDoms.forEach(d => d.setAttribute('style', 'filter:blur(3px); pointer-events:none;'));

    // 修改 Gitee 项目更新样式
    const arr = document.querySelectorAll('.project-update-item__header .name');
    for (const a of arr) {
        $(a).css('background', '#fff');
        $(a).css('color', '#111');
    }
})();
