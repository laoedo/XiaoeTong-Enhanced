// ==UserScript==
// @name         小鹅通课程页面防刷新
// @name:zh-CN   小鹅通课程页面防刷新
// @name:en      Xiaoe Course Page Reload Blocker
// @namespace    xiaoe-course-page-no-reload
// @version      1.0.0
// @description  阻止小鹅通 PC 课程页面在切换浏览器标签后自动刷新，减少重复加载并保留当前学习位置。
// @description:en Prevent Xiaoe PC course pages from automatically reloading after switching browser tabs.
// @author       laoedo
// @license      MIT
// @match        https://*.pc.xiaoe-tech.com/p/t_pc/course_pc_detail/*
// @icon         data:image/png;base64,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
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

(function () {
    'use strict';

    /**
     * Some course pages react to the Page Visibility API and reload when the
     * user returns to the tab. Report a consistently visible state instead.
     */
    const visibleProperties = [
        ['hidden', false],
        ['visibilityState', 'visible'],
    ];

    for (const [property, value] of visibleProperties) {
        try {
            Object.defineProperty(Document.prototype, property, {
                configurable: true,
                get: () => value,
            });
        } catch (error) {
            // Fall back to the current document if the prototype is locked.
            try {
                Object.defineProperty(document, property, {
                    configurable: true,
                    get: () => value,
                });
            } catch (_) {
                // Keep running: event interception below may still be enough.
            }
        }
    }

    /** Stop page scripts from observing tab visibility and window focus. */
    const stopSiteHandler = (event) => event.stopImmediatePropagation();

    window.addEventListener('visibilitychange', stopSiteHandler, true);
    document.addEventListener('visibilitychange', stopSiteHandler, true);
    window.addEventListener('blur', stopSiteHandler, true);
    window.addEventListener('focus', stopSiteHandler, true);
})();

