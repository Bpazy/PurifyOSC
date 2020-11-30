// ==UserScript==
// @name         PurifyOSC
// @namespace    https://github.com/Bpazy/PurifyOSC
// @version      0.0.3
// @description  Purify OSCHINA
// @run-at       document-body
// @author       Bpazy
// @match        https://www.oschina.net/*
// ==/UserScript==

(function () {
    'use strict';

    // 屏蔽木兰
    const mulanDoms = document.querySelectorAll('a[title*="木兰"]');
    mulanDoms.forEach(d => d.setAttribute('style', 'filter:blur(3px); pointer-events:none;'));

    // 修改 Gitee 项目更新样式
    const observer = new MutationObserver((mutationsList) => {
        const arr = document.querySelectorAll('.project-update-item__header .name');
        if (!arr || arr.length === 0) {
            return;
        }
        for (const a of arr) {
            $(a).css('background', '#fff');
            $(a).css('color', '#111');
        }
    });
    observer.observe(document.querySelector('body'), { childList: true, subtree: true })
})();
