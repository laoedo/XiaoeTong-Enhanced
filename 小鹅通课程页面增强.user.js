// ==UserScript==
// @name         小鹅通课程页面增强
// @name:zh-CN   小鹅通课程页面增强
// @name:en      Xiaoe Course Page Enhancer
// @namespace    xiaoe-course-page-no-reload
// @version      2.0.0
// @description  为小鹅通 PC 课程页面增加深浅色切换、原生课程链接和可配置的防刷新功能。
// @description:en Add theme switching, native lesson links, and configurable reload prevention to Xiaoe PC course pages.
// @author       laoedo
// @license      MIT
// @homepageURL  https://github.com/laoedo/xiaoe-no-reload
// @supportURL   https://github.com/laoedo/xiaoe-no-reload/issues
// @match        https://*.pc.xiaoe-tech.com/p/t_pc/course_pc_detail/*
// @icon         data:image/png;base64,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
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

(function () {
    'use strict';

    const SETTINGS_KEY = 'xiaoe-course-enhancer-settings-v2';
    const DEFAULT_SETTINGS = Object.freeze({
        theme: 'light',
        courseLinks: true,
        preventReload: true,
    });

    const readSettings = () => {
        try {
            const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
            return {
                theme: saved.theme === 'dark' ? 'dark' : 'light',
                courseLinks: typeof saved.courseLinks === 'boolean'
                    ? saved.courseLinks
                    : DEFAULT_SETTINGS.courseLinks,
                preventReload: typeof saved.preventReload === 'boolean'
                    ? saved.preventReload
                    : DEFAULT_SETTINGS.preventReload,
            };
        } catch (_) {
            return { ...DEFAULT_SETTINGS };
        }
    };

    let settings = readSettings();

    const saveSettings = () => {
        try {
            localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
        } catch (_) {
            // The page still works when storage is disabled; settings just
            // cannot survive a reload.
        }
    };

    const enableReloadPrevention = () => {
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
            } catch (_) {
                try {
                    Object.defineProperty(document, property, {
                        configurable: true,
                        get: () => value,
                    });
                } catch (_) {
                    // Event interception below may still be sufficient.
                }
            }
        }

        const stopSiteHandler = (event) => event.stopImmediatePropagation();
        window.addEventListener('visibilitychange', stopSiteHandler, true);
        document.addEventListener('visibilitychange', stopSiteHandler, true);
        window.addEventListener('blur', stopSiteHandler, true);
        window.addEventListener('focus', stopSiteHandler, true);
    };

    if (settings.preventReload) {
        enableReloadPrevention();
    }

    const PAGE_STYLE = `
        .xetc-course-linked {
            position: relative !important;
        }

        .xetc-course-linked:hover {
            text-decoration: underline !important;
            text-underline-offset: 3px;
        }

        .xetc-course-native-link {
            position: absolute;
            inset: 0;
            z-index: 2;
            display: block;
            overflow: hidden;
            color: transparent !important;
            font-size: 0;
            cursor: pointer;
        }

        html[data-xetc-theme='dark'],
        html[data-xetc-theme='dark'] body,
        html[data-xetc-theme='dark'] #app,
        html[data-xetc-theme='dark'] .main_content_box,
        html[data-xetc-theme='dark'] .content_left,
        html[data-xetc-theme='dark'] .content_right,
        html[data-xetc-theme='dark'] .course_base_layout {
            background: #0f1218 !important;
            color: #dce2ec !important;
            color-scheme: dark;
        }

        html[data-xetc-theme='dark'] .camp_pro_content_header,
        html[data-xetc-theme='dark'] .tab-files-wrapper,
        html[data-xetc-theme='dark'] .content_switch_tab,
        html[data-xetc-theme='dark'] .catalog_box,
        html[data-xetc-theme='dark'] .camp_pro_content_catalog,
        html[data-xetc-theme='dark'] .el-collapse-item__wrap,
        html[data-xetc-theme='dark'] .navbar-wrapper,
        html[data-xetc-theme='dark'] .shop_msg,
        html[data-xetc-theme='dark'] .shop-information {
            background: #181d26 !important;
            color: #dce2ec !important;
            border-color: #303846 !important;
        }

        html[data-xetc-theme='dark'] .nav-main__wrapper,
        html[data-xetc-theme='dark'] .el-collapse-item__header {
            background: #222936 !important;
            color: #e7ebf2 !important;
            border-color: #384151 !important;
        }

        html[data-xetc-theme='dark'] .section_item_box,
        html[data-xetc-theme='dark'] .cata_box,
        html[data-xetc-theme='dark'] .chapter_item_box,
        html[data-xetc-theme='dark'] .infinite-list {
            background-color: transparent !important;
            border-color: #303846 !important;
        }

        html[data-xetc-theme='dark'] .section_item_box:hover,
        html[data-xetc-theme='dark'] .section_item_box.last_study_bg {
            background: #202a39 !important;
        }

        html[data-xetc-theme='dark'] .camp_pro_content_header *,
        html[data-xetc-theme='dark'] .content_switch_tab *,
        html[data-xetc-theme='dark'] .catalog_box *,
        html[data-xetc-theme='dark'] .navbar-wrapper * {
            border-color: #303846 !important;
        }

        html[data-xetc-theme='dark'] .course_title,
        html[data-xetc-theme='dark'] .sections_title,
        html[data-xetc-theme='dark'] .chapter_title,
        html[data-xetc-theme='dark'] .el-collapse-item__header,
        html[data-xetc-theme='dark'] .catalog_box .textNode,
        html[data-xetc-theme='dark'] .catalog_box .title,
        html[data-xetc-theme='dark'] .catalog_box input,
        html[data-xetc-theme='dark'] .content_switch_tab {
            color: #dce2ec !important;
        }

        html[data-xetc-theme='dark'] .catalog_box input,
        html[data-xetc-theme='dark'] .el-input__inner {
            background: #11161e !important;
            border-color: #3a4556 !important;
        }

        html[data-xetc-theme='dark'] .catalog_box input::placeholder {
            color: #7f8998 !important;
        }
    `;

    const applyTheme = () => {
        document.documentElement.dataset.xetcTheme = settings.theme;
    };

    applyTheme();

    const installPageStyle = () => {
        if (document.getElementById('xetc-page-style')) return;
        const style = document.createElement('style');
        style.id = 'xetc-page-style';
        style.textContent = PAGE_STYLE;
        (document.head || document.documentElement).appendChild(style);
    };

    const addParameter = (url, name, value) => {
        if (!value) return url;
        return `${url}${url.includes('?') ? '&' : '?'}${name}=${encodeURIComponent(value)}`;
    };

    const absoluteUrl = (url, base = location.origin) => {
        try {
            return new URL(url, base).href;
        } catch (_) {
            return '';
        }
    };

    const getCourseUrl = (courseElement) => {
        const component = courseElement.__vue__;
        const item = component?.sectionItem;
        if (!component || !item || component.isBreakJump) return '';

        const type = Number(item.resource_type);
        const unlocked = Boolean(item.unlock_state);
        const hasNormalAccess = Boolean(component.isAvailable)
            && !component.isNeedMsgCollect
            && unlocked;
        const trialTypes = [1, 2, 3, 4, 20, 35, 45, 51];
        const hasTrialAccess = !component.isAvailable
            && Boolean(item.is_try)
            && trialTypes.includes(type);

        if (!hasNormalAccess && !hasTrialAccess) return '';

        const courseId = item.course_id || component.courseId;
        const chapterId = item.chapter_id;
        if (!courseId || !chapterId) return '';

        const communityId = component.communityId || '';
        let jumpUrl = item.jump_url || '';
        if (communityId) {
            jumpUrl = addParameter(jumpUrl, 'community_id', communityId);
        }
        const jumpWithProduct = addParameter(jumpUrl, 'product_id', courseId);
        let h5Base = `https://${window.APPID}.h5.xiaoeknow.com`;
        try {
            if (typeof component.getH5ShopUrl === 'function') {
                h5Base = component.getH5ShopUrl() || h5Base;
            }
        } catch (_) {
            // Fall back to the production H5 shop host.
        }

        const pcCourseUrl = () => {
            const routeName = { 1: 'image_text', 2: 'audio', 3: 'video', 51: 'document' }[type];
            return routeName
                ? absoluteUrl(`/p/t_pc/course_pc_detail/${routeName}/${chapterId}?product_id=${encodeURIComponent(courseId)}`)
                : '';
        };
        const liveUrl = () => absoluteUrl(`/detail/${chapterId}/4?course_id=${encodeURIComponent(courseId)}`);

        if (hasTrialAccess) {
            if ([1, 2, 3, 51].includes(type)) return pcCourseUrl();
            if (type === 4) return liveUrl();
            if (type === 35) return absoluteUrl(jumpUrl, h5Base);
            if ([20, 45].includes(type)) return absoluteUrl(jumpWithProduct, h5Base);
            return '';
        }

        if ([15, 27, 34].includes(type)) {
            const isWeCom = /wxwork/i.test(navigator.userAgent);
            if (type !== 15 && isWeCom && typeof component.getPCShopUrl === 'function') {
                const routeName = { 15: 'exercise', 27: 'exam', 34: 'practice' }[type];
                return absoluteUrl(`/p/t_pc/pc_evaluation/${routeName}/${chapterId}?product_id=${encodeURIComponent(courseId)}`, component.getPCShopUrl());
            }
            const evaluationPath = type === 27
                ? jumpUrl.replace('/p/course', '')
                : type === 34
                    ? jumpUrl
                    : `/evaluation_wechat${jumpUrl}`;
            return absoluteUrl(addParameter(evaluationPath, 'product_id', courseId), h5Base);
        }

        if (type === 16) {
            return absoluteUrl(addParameter(jumpUrl, 'course_id', courseId), h5Base);
        }

        if ([13, 20, 45].includes(type)) return absoluteUrl(jumpWithProduct, h5Base);
        if ([14, 35].includes(type)) return absoluteUrl(jumpUrl, h5Base);

        if (type === 120 && communityId) {
            return absoluteUrl(`/${communityId}/clock_detail?clockId=${encodeURIComponent(chapterId)}&app_id=${encodeURIComponent(component.appId)}&course_id=${encodeURIComponent(courseId)}`, h5Base);
        }

        if (communityId) {
            return absoluteUrl(jumpWithProduct, h5Base);
        }

        if (type === 4) return liveUrl();
        if ([1, 2, 3, 51].includes(type)) return pcCourseUrl();

        return '';
    };

    const removeCourseLink = (courseElement) => {
        courseElement.querySelector('.xetc-course-native-link')?.remove();
        courseElement.querySelector('.xetc-course-linked')?.classList.remove('xetc-course-linked');
    };

    const enhanceCourseLink = (courseElement) => {
        if (!settings.courseLinks) {
            removeCourseLink(courseElement);
            return;
        }

        const titleElement = courseElement.querySelector('.sections_title');
        const href = getCourseUrl(courseElement);
        if (!titleElement || !href) {
            removeCourseLink(courseElement);
            return;
        }

        let link = titleElement.querySelector(':scope > .xetc-course-native-link');
        if (!link) {
            link = document.createElement('a');
            link.className = 'xetc-course-native-link';
            link.addEventListener('click', (event) => {
                const modified = event.ctrlKey || event.metaKey || event.shiftKey || event.altKey;
                if (event.button === 0 && !modified) {
                    // Keep Xiaoe's original left-click behavior and progress handling.
                    event.preventDefault();
                } else {
                    // Prevent Xiaoe's parent click handler from hijacking native
                    // Ctrl/Command/Shift-click navigation.
                    event.stopPropagation();
                }
            }, true);
            link.addEventListener('auxclick', (event) => event.stopPropagation(), true);
            titleElement.appendChild(link);
        }

        const title = titleElement.childNodes.length
            ? [...titleElement.childNodes]
                .filter((node) => node !== link && node.nodeType === Node.TEXT_NODE)
                .map((node) => node.textContent.trim())
                .filter(Boolean)
                .join(' ')
            : '';
        link.href = href;
        link.setAttribute('aria-label', title || '打开课程');
        titleElement.classList.add('xetc-course-linked');
    };

    const updateCourseLinks = () => {
        document.querySelectorAll('.section_item_box').forEach(enhanceCourseLink);
    };

    let updateQueued = false;
    const queueCourseLinkUpdate = () => {
        if (updateQueued) return;
        updateQueued = true;
        requestAnimationFrame(() => {
            updateQueued = false;
            updateCourseLinks();
        });
    };

    const createSettingsUi = () => {
        if (document.getElementById('xetc-settings-host')) return;

        const host = document.createElement('div');
        host.id = 'xetc-settings-host';
        const shadow = host.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                :host { all: initial; }
                *, *::before, *::after { box-sizing: border-box; }
                .settings-button {
                    position: fixed; right: 22px; bottom: 96px; z-index: 2147483646;
                    width: 46px; height: 46px; border: 0; border-radius: 50%;
                    background: #1472ff; color: #fff; box-shadow: 0 8px 24px rgba(20, 114, 255, .34);
                    font: 22px/1 system-ui, sans-serif; cursor: pointer;
                }
                .settings-button:hover { background: #075fd8; }
                .panel {
                    position: fixed; right: 22px; bottom: 154px; z-index: 2147483646;
                    width: 300px; padding: 18px; border: 1px solid #dce2ea; border-radius: 14px;
                    background: #fff; color: #20242b; box-shadow: 0 18px 50px rgba(20, 30, 45, .2);
                    font: 14px/1.45 system-ui, -apple-system, 'Segoe UI', sans-serif;
                }
                .panel[hidden] { display: none; }
                .header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
                .title { font-size: 17px; font-weight: 650; }
                .close { border: 0; background: transparent; color: #697386; font-size: 22px; cursor: pointer; }
                .setting { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 12px 0; border-top: 1px solid #edf0f4; }
                .setting:first-of-type { border-top: 0; }
                .label { min-width: 0; }
                .label strong { display: block; font-weight: 600; }
                .label small { display: block; margin-top: 3px; color: #7a8494; }
                .theme { display: flex; padding: 3px; border-radius: 9px; background: #edf1f6; }
                .theme button { border: 0; border-radius: 7px; padding: 6px 9px; background: transparent; color: #596273; cursor: pointer; }
                .theme button.active { background: #fff; color: #1472ff; box-shadow: 0 1px 5px rgba(0, 0, 0, .12); }
                .switch { position: relative; width: 42px; height: 24px; flex: 0 0 auto; }
                .switch input { position: absolute; opacity: 0; pointer-events: none; }
                .track { position: absolute; inset: 0; border-radius: 999px; background: #c8ced8; cursor: pointer; transition: .18s; }
                .track::after { content: ''; position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; border-radius: 50%; background: #fff; transition: .18s; box-shadow: 0 1px 4px rgba(0, 0, 0, .2); }
                input:checked + .track { background: #1472ff; }
                input:checked + .track::after { transform: translateX(18px); }
                .notice { display: none; margin-top: 10px; padding: 9px 10px; border-radius: 8px; background: #fff4df; color: #855d13; font-size: 12px; }
                :host-context(html[data-xetc-theme='dark']) .panel { background: #202630; color: #e7ebf2; border-color: #3a4351; }
                :host-context(html[data-xetc-theme='dark']) .setting { border-color: #363e4b; }
                :host-context(html[data-xetc-theme='dark']) .label small { color: #9aa5b4; }
                :host-context(html[data-xetc-theme='dark']) .theme { background: #12171e; }
                :host-context(html[data-xetc-theme='dark']) .theme button.active { background: #343d4b; color: #80b2ff; }
            </style>
            <button class="settings-button" type="button" aria-label="打开小鹅通页面设置" title="页面设置">⚙</button>
            <section class="panel" aria-label="小鹅通页面设置" hidden>
                <div class="header"><span class="title">页面设置</span><button class="close" type="button" aria-label="关闭">×</button></div>
                <div class="setting">
                    <div class="label"><strong>页面配色</strong><small>立即切换当前页面</small></div>
                    <div class="theme"><button type="button" data-theme="light">浅色</button><button type="button" data-theme="dark">深色</button></div>
                </div>
                <label class="setting">
                    <span class="label"><strong>显示课程真实链接</strong><small>支持浏览器原生新标签页操作</small></span>
                    <span class="switch"><input name="courseLinks" type="checkbox"><span class="track"></span></span>
                </label>
                <label class="setting">
                    <span class="label"><strong>防止切换标签后刷新</strong><small>切换后需刷新页面生效</small></span>
                    <span class="switch"><input name="preventReload" type="checkbox"><span class="track"></span></span>
                </label>
                <div class="notice">防刷新设置已保存，请刷新页面使其完全生效。</div>
            </section>
        `;

        const panel = shadow.querySelector('.panel');
        const courseLinksInput = shadow.querySelector('input[name="courseLinks"]');
        const preventReloadInput = shadow.querySelector('input[name="preventReload"]');
        const notice = shadow.querySelector('.notice');

        const render = () => {
            shadow.querySelectorAll('[data-theme]').forEach((button) => {
                button.classList.toggle('active', button.dataset.theme === settings.theme);
            });
            courseLinksInput.checked = settings.courseLinks;
            preventReloadInput.checked = settings.preventReload;
        };

        shadow.querySelector('.settings-button').addEventListener('click', () => {
            panel.hidden = !panel.hidden;
        });
        shadow.querySelector('.close').addEventListener('click', () => {
            panel.hidden = true;
        });
        shadow.querySelectorAll('[data-theme]').forEach((button) => {
            button.addEventListener('click', () => {
                settings = { ...settings, theme: button.dataset.theme };
                saveSettings();
                applyTheme();
                render();
            });
        });
        courseLinksInput.addEventListener('change', () => {
            settings = { ...settings, courseLinks: courseLinksInput.checked };
            saveSettings();
            updateCourseLinks();
        });
        preventReloadInput.addEventListener('change', () => {
            settings = { ...settings, preventReload: preventReloadInput.checked };
            saveSettings();
            notice.style.display = 'block';
        });

        render();
        document.body.appendChild(host);
    };

    const startPageEnhancements = () => {
        installPageStyle();
        createSettingsUi();
        updateCourseLinks();

        const observer = new MutationObserver(queueCourseLinkUpdate);
        observer.observe(document.body, { childList: true, subtree: true });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startPageEnhancements, { once: true });
    } else {
        startPageEnhancements();
    }
})();
