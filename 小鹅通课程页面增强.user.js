// ==UserScript==
// @name         小鹅通课程页面增强
// @name:zh-CN   小鹅通课程页面增强
// @name:en      Xiaoe Course Page Enhancer
// @namespace    xiaoe-course-page-no-reload
// @version      3.0.10
// @description  为小鹅通 PC 课程页面增加影院式双栏布局、无刷新切课、深浅色切换和原生课程链接。
// @description:en Add a theater-style layout, seamless lesson switching, themes, and native lesson links to Xiaoe PC course pages.
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

    const SETTINGS_KEY = 'xiaoe-course-enhancer-settings-v3';
    const LEGACY_SETTINGS_KEY = 'xiaoe-course-enhancer-settings-v2';
    const DEFAULT_SETTINGS = Object.freeze({
        theme: 'light',
        courseLinks: true,
        preventReload: true,
        theaterLayout: true,
        seamlessSwitch: true,
        animations: true,
        chapterColors: true,
        chapterFontSize: 16,
        lessonFontSize: 14,
    });

    const readSettings = () => {
        try {
            const legacy = JSON.parse(localStorage.getItem(LEGACY_SETTINGS_KEY) || '{}');
            const current = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
            const saved = { ...legacy, ...current };
            return {
                theme: saved.theme === 'dark' ? 'dark' : 'light',
                courseLinks: typeof saved.courseLinks === 'boolean'
                    ? saved.courseLinks
                    : DEFAULT_SETTINGS.courseLinks,
                preventReload: typeof saved.preventReload === 'boolean'
                    ? saved.preventReload
                    : DEFAULT_SETTINGS.preventReload,
                theaterLayout: typeof saved.theaterLayout === 'boolean'
                    ? saved.theaterLayout
                    : DEFAULT_SETTINGS.theaterLayout,
                seamlessSwitch: typeof saved.seamlessSwitch === 'boolean'
                    ? saved.seamlessSwitch
                    : DEFAULT_SETTINGS.seamlessSwitch,
                animations: typeof saved.animations === 'boolean'
                    ? saved.animations
                    : DEFAULT_SETTINGS.animations,
                chapterColors: typeof saved.chapterColors === 'boolean'
                    ? saved.chapterColors
                    : DEFAULT_SETTINGS.chapterColors,
                chapterFontSize: Number.isFinite(Number(saved.chapterFontSize))
                    ? Math.min(22, Math.max(14, Number(saved.chapterFontSize)))
                    : DEFAULT_SETTINGS.chapterFontSize,
                lessonFontSize: Number.isFinite(Number(saved.lessonFontSize))
                    ? Math.min(20, Math.max(12, Number(saved.lessonFontSize)))
                    : DEFAULT_SETTINGS.lessonFontSize,
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

        html[data-xetc-animations='on'] .xetc-course-native-link,
        html[data-xetc-animations='on'] .section_item_box,
        html[data-xetc-animations='on'] .video-content-header,
        html[data-xetc-animations='on'] #xetc-theater-layout,
        html[data-xetc-animations='on'] #xetc-course-sidebar {
            transition: color 180ms ease, background-color 180ms ease,
                border-color 180ms ease, opacity 220ms ease,
                transform 220ms cubic-bezier(.2, 0, 0, 1);
        }

        #xetc-theater-layout {
            box-sizing: border-box;
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(400px, 460px);
            align-items: start;
            gap: 16px;
            width: calc(100% - 32px);
            margin: 16px auto 0;
        }

        #xetc-player-column {
            min-width: 0;
            overflow: hidden;
            border-radius: 12px;
            background: transparent;
        }

        #xetc-player-column > .content_header,
        #xetc-player-column .course-player-box,
        #xetc-player-column .video-content-header,
        #xetc-player-column .video-player,
        #xetc-player-column #pc_course_fe_basic_video {
            box-sizing: border-box !important;
            width: 100% !important;
            max-width: none !important;
            margin-right: 0 !important;
            margin-left: 0 !important;
        }

        #xetc-player-column .video-player,
        #xetc-player-column #pc_course_fe_basic_video {
            aspect-ratio: 16 / 9;
            height: auto !important;
            min-height: 0 !important;
        }

        #xetc-player-column video {
            width: 100% !important;
            height: 100% !important;
            object-fit: contain;
        }

        #xetc-player-column > .content_header,
        #xetc-player-column .course-player-box,
        #xetc-player-column .video-content-header {
            height: auto !important;
            min-height: 0 !important;
            aspect-ratio: auto !important;
            overflow: visible !important;
        }

        #xetc-player-column .video-title {
            box-sizing: border-box;
            width: 100%;
            min-height: 64px;
            margin: 0;
            padding: 14px 18px;
            background: #fff;
            color: #0f0f0f;
        }

        #xetc-player-column .video-title__font {
            color: #0f0f0f;
            font: 650 20px/1.45 system-ui, -apple-system, 'Segoe UI', sans-serif !important;
            letter-spacing: .01em;
        }

        #xetc-course-sidebar {
            box-sizing: border-box;
            position: sticky;
            top: 16px;
            min-width: 0;
            height: min(72vh, 760px);
            min-height: 420px;
            overflow: hidden;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            background: #fff;
        }

        #xetc-course-sidebar-content {
            box-sizing: border-box;
            height: 100%;
            min-height: 0;
            overflow: hidden;
        }

        #xetc-course-sidebar-content > .course_content_catalog,
        #xetc-course-sidebar-content .content_detail,
        #xetc-course-sidebar-content .catalog_box,
        #xetc-course-sidebar-content .camp_pro_content_catalog {
            box-sizing: border-box;
            width: 100% !important;
            max-width: none !important;
            height: 100% !important;
            max-height: none !important;
            margin: 0 !important;
        }

        #xetc-course-sidebar-content .camp_pro_content_catalog {
            overflow-y: auto !important;
            overscroll-behavior: contain;
            scrollbar-gutter: stable;
            scrollbar-width: auto;
            scrollbar-color: #8b8b8b transparent;
            padding-right: 0 !important;
        }

        #xetc-course-sidebar-content .catalog_list_collapse,
        #xetc-course-sidebar-content .chapter_item_box,
        #xetc-course-sidebar-content .infinite-list {
            box-sizing: border-box !important;
            width: 100% !important;
            margin-right: 0 !important;
            padding-right: 2px !important;
        }

        #xetc-course-sidebar-content .xetc-catalog-heading {
            flex: 0 0 auto !important;
            min-width: max-content;
            white-space: nowrap !important;
        }

        #xetc-course-sidebar-content .camp_pro_content_catalog::-webkit-scrollbar {
            width: 14px !important;
        }

        #xetc-course-sidebar-content .camp_pro_content_catalog::-webkit-scrollbar-track {
            background: transparent;
        }

        #xetc-course-sidebar-content .camp_pro_content_catalog::-webkit-scrollbar-thumb {
            min-height: 48px;
            border: 2px solid transparent;
            border-radius: 999px;
            background: #8b8b8b !important;
            background-clip: content-box;
        }

        #xetc-course-sidebar-content .camp_pro_content_catalog::-webkit-scrollbar-thumb:hover {
            background-color: #606060 !important;
        }

        #xetc-course-sidebar-content .chapter_title {
            font-size: var(--xetc-chapter-font-size, 16px) !important;
        }

        #xetc-course-sidebar-content .sections_title {
            font-size: var(--xetc-lesson-font-size, 14px) !important;
        }

        #xetc-course-sidebar-content .catalog_box,
        #xetc-course-sidebar-content .infinite-list,
        #xetc-course-sidebar-content .infinite_list_chapter_children {
            overflow: visible !important;
        }

        #xetc-course-sidebar-content .chapter_item_box_wrapper.is-active > .el-collapse-item__wrap,
        #xetc-course-sidebar-content .chapter_item_box_wrapper.is-active .el-collapse-item__content,
        #xetc-course-sidebar-content .chapter_item_box_wrapper.is-active .infinite-list {
            height: auto !important;
            max-height: none !important;
            overflow: visible !important;
        }

        #xetc-course-sidebar-content .subcourse {
            display: flex !important;
            width: 100% !important;
            align-items: stretch;
        }

        #xetc-course-sidebar-content .subcourse-list {
            min-width: 0;
            overflow-x: hidden !important;
            scrollbar-width: none;
        }

        #xetc-course-sidebar-content .subcourse-list::-webkit-scrollbar {
            display: none;
        }

        #xetc-course-sidebar-content .subcourse-list-item {
            flex: 0 0 var(--xetc-subcourse-card-width, 280px) !important;
            width: var(--xetc-subcourse-card-width, 280px) !important;
            margin-right: 0 !important;
        }

        #xetc-course-sidebar-content .subcourse-operate {
            display: flex !important;
            flex: 0 0 84px !important;
            align-items: center;
            justify-content: center;
            width: 84px !important;
            min-width: 84px;
            padding: 0 4px !important;
            background: transparent !important;
            box-shadow: none !important;
            filter: none !important;
        }

        #xetc-course-sidebar-content .subcourse-scroller {
            display: flex !important;
            width: auto !important;
            height: 40px !important;
            gap: 4px;
        }

        #xetc-course-sidebar-content .subcourse-scroller .icon {
            display: flex !important;
            align-items: center;
            justify-content: center;
            width: 40px !important;
            height: 40px !important;
            border: 1px solid #d8dce5;
            border-radius: 50%;
            background: #fff !important;
            box-shadow: none !important;
        }

        #xetc-course-sidebar-content .subcourse-scroller .icon.disabled {
            display: none !important;
        }

        #xetc-course-sidebar-content .subcourse-scroller .icon i {
            font-size: 24px !important;
            font-weight: 700;
        }

        #xetc-course-sidebar-content .section_item_box:hover {
            transform: translateX(2px);
        }

        html[data-xetc-animations='on'] #xetc-course-sidebar-content .xetc-locate-pulse {
            animation: xetc-locate-current 680ms cubic-bezier(.2, 0, 0, 1);
        }

        @keyframes xetc-locate-current {
            0%, 100% { box-shadow: none; }
            42% { box-shadow: 0 0 0 3px rgba(20, 114, 255, .42), 0 8px 22px rgba(20, 114, 255, .2); }
        }

        #xetc-course-sidebar-content .section_item_box {
            box-sizing: border-box;
            position: relative;
            border: 1px solid transparent !important;
            border-radius: 9px;
        }

        #xetc-course-sidebar-content .section_item_box::after {
            content: '';
            position: absolute;
            right: 12px;
            bottom: -1px;
            left: 12px;
            height: 1px;
            background: #e5e7eb;
            pointer-events: none;
        }

        #xetc-course-sidebar-content .last_study {
            display: none !important;
        }

        #xetc-course-sidebar-content .section_item_box.xetc-last-study-row {
            padding-right: 82px !important;
        }

        #xetc-course-sidebar-content .xetc-last-study-badge {
            position: absolute;
            z-index: 2;
            top: 50%;
            right: 12px;
            padding: 3px 7px;
            border: 1px solid #cdd4df;
            border-radius: 999px;
            background: #f4f6f8;
            color: #596273;
            font-size: 11px;
            line-height: 1.2;
            white-space: nowrap;
            transform: translateY(-50%);
            pointer-events: none;
        }

        html[data-xetc-chapter-colors='on'] #xetc-course-sidebar-content .chapter_item_box.xetc-colorized-chapter {
            --xetc-chapter-row-bg: hsl(var(--xetc-chapter-hue) 70% 96%);
        }

        html[data-xetc-chapter-colors='on'] #xetc-course-sidebar-content .chapter_item_box.xetc-colorized-chapter .el-collapse-item__header {
            background: hsl(var(--xetc-chapter-hue) 72% 89%) !important;
            border-color: hsl(var(--xetc-chapter-hue) 48% 76%) !important;
        }

        html[data-xetc-chapter-colors='on'] #xetc-course-sidebar-content .chapter_item_box.xetc-colorized-chapter .section_item_box:not(:hover):not(.xetc-current-lesson-row) {
            background: var(--xetc-chapter-row-bg) !important;
        }

        html[data-xetc-chapter-colors='on'] #xetc-course-sidebar-content .chapter_item_box.xetc-colorized-chapter .section_item_box::after {
            background: hsl(var(--xetc-chapter-hue) 38% 82%);
        }

        html[data-xetc-chapter-colors='on'] #xetc-course-sidebar-content .section_item_box:hover:not(.xetc-current-lesson-row) {
            background: #e5e7eb !important;
            border-color: #9ca3af !important;
        }

        html[data-xetc-chapter-colors='on'] #xetc-course-sidebar-content .section_item_box.xetc-current-lesson-row {
            background: #d1d5db !important;
            border-color: #9ca3af !important;
        }

        html[data-xetc-chapter-colors='on'] #xetc-course-sidebar-content .section_item_box.xetc-current-lesson-row::before {
            border-left-color: #111827;
        }

        #xetc-course-sidebar-content .section_item_box:hover {
            background: #eef4ff !important;
            border-color: #b9d2ff !important;
            box-shadow: none !important;
        }

        #xetc-course-sidebar-content .section_item_box.xetc-current-lesson-row {
            position: relative;
            background: #e6f0ff !important;
            border-color: #8db8ff !important;
            box-shadow: none !important;
            padding-left: 30px !important;
        }

        #xetc-course-sidebar-content .section_item_box.xetc-current-lesson-row::before {
            content: '';
            position: absolute;
            z-index: 2;
            top: 50%;
            left: 11px;
            width: 0;
            height: 0;
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent;
            border-left: 9px solid #1472ff;
            transform: translateY(-50%);
            pointer-events: none;
        }

        #xetc-course-sidebar-content .section_item_box.last_study_bg:not(.xetc-current-lesson-row):not(:hover) {
            background: var(--xetc-chapter-row-bg, transparent) !important;
            border-color: transparent !important;
            box-shadow: none !important;
        }

        #xetc-route-loading {
            position: absolute;
            inset: 0;
            z-index: 20;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: rgba(0, 0, 0, .58);
            color: #fff;
            font: 500 14px/1.4 system-ui, -apple-system, 'Segoe UI', sans-serif;
            opacity: 0;
            pointer-events: none;
        }

        #xetc-route-loading::before {
            content: '';
            width: 20px;
            height: 20px;
            border: 2px solid rgba(255, 255, 255, .35);
            border-top-color: #fff;
            border-radius: 50%;
            animation: xetc-spin .8s linear infinite;
        }

        #xetc-player-column {
            position: relative;
        }

        html[data-xetc-navigating='true'] #xetc-route-loading {
            opacity: 1;
            pointer-events: auto;
        }

        html[data-xetc-navigating='true'] #xetc-player-column .video-content-header {
            opacity: .45;
            transform: scale(.994);
        }

        @keyframes xetc-spin {
            to { transform: rotate(360deg); }
        }

        @media (max-width: 1100px) {
            #xetc-theater-layout {
                grid-template-columns: minmax(0, 1fr);
            }

            #xetc-course-sidebar {
                position: relative;
                top: auto;
                height: min(62vh, 620px);
            }
        }

        @media (max-width: 640px) {
            #xetc-theater-layout {
                width: 100%;
                gap: 12px;
                margin-top: 0;
            }

            #xetc-player-column,
            #xetc-course-sidebar {
                border-radius: 0;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            #xetc-route-loading::before { animation: none; }
            html[data-xetc-animations='on'] .xetc-course-native-link,
            html[data-xetc-animations='on'] .section_item_box,
            html[data-xetc-animations='on'] .video-content-header,
            html[data-xetc-animations='on'] #xetc-theater-layout,
            html[data-xetc-animations='on'] #xetc-course-sidebar {
                transition: none;
            }
        }

        html[data-xetc-theme='dark'],
        html[data-xetc-theme='dark'] body,
        html[data-xetc-theme='dark'] #app,
        html[data-xetc-theme='dark'] .main_content_box,
        html[data-xetc-theme='dark'] .content_left,
        html[data-xetc-theme='dark'] .content_right,
        html[data-xetc-theme='dark'] .course_base_layout {
            background: #0f0f0f !important;
            color: #fff !important;
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
            background: #181818 !important;
            color: #fff !important;
            border-color: #303030 !important;
        }

        html[data-xetc-theme='dark'] .nav-main__wrapper,
        html[data-xetc-theme='dark'] .el-collapse-item__header {
            background: #212121 !important;
            color: #fff !important;
            border-color: #3f3f3f !important;
        }

        html[data-xetc-theme='dark'] .section_item_box,
        html[data-xetc-theme='dark'] .cata_box,
        html[data-xetc-theme='dark'] .chapter_item_box,
        html[data-xetc-theme='dark'] .infinite-list {
            background-color: transparent !important;
            border-color: #303030 !important;
        }

        html[data-xetc-theme='dark'] #xetc-course-sidebar-content .section_item_box:hover:not(.xetc-current-lesson-row) {
            background: #343434 !important;
            border-color: #4a4a4a !important;
            box-shadow: none !important;
        }

        html[data-xetc-theme='dark'] #xetc-course-sidebar-content .section_item_box.xetc-current-lesson-row {
            background: #3d3d3d !important;
            border-color: #5a5a5a !important;
            box-shadow: none !important;
        }

        html[data-xetc-theme='dark'] #xetc-course-sidebar-content .section_item_box.xetc-current-lesson-row::before {
            border-left-color: #fff;
        }

        html[data-xetc-theme='dark'] #xetc-course-sidebar-content .section_item_box.last_study_bg:not(.xetc-current-lesson-row):not(:hover) {
            background: var(--xetc-chapter-row-bg, transparent) !important;
            border-color: transparent !important;
            box-shadow: none !important;
        }

        html[data-xetc-theme='dark'] #xetc-course-sidebar-content .section_item_box::after {
            background: #303030;
        }

        html[data-xetc-theme='dark'] #xetc-course-sidebar-content .xetc-last-study-badge {
            border-color: #505050;
            background: #292929;
            color: #fff !important;
        }

        html[data-xetc-theme='dark'][data-xetc-chapter-colors='on'] #xetc-course-sidebar-content .chapter_item_box.xetc-colorized-chapter {
            --xetc-chapter-row-bg: hsl(var(--xetc-chapter-hue) 30% 15%);
        }

        html[data-xetc-theme='dark'][data-xetc-chapter-colors='on'] #xetc-course-sidebar-content .chapter_item_box.xetc-colorized-chapter .el-collapse-item__header {
            background: hsl(var(--xetc-chapter-hue) 38% 22%) !important;
            border-color: hsl(var(--xetc-chapter-hue) 34% 34%) !important;
        }

        html[data-xetc-theme='dark'][data-xetc-chapter-colors='on'] #xetc-course-sidebar-content .chapter_item_box.xetc-colorized-chapter .section_item_box:not(:hover):not(.xetc-current-lesson-row) {
            background: var(--xetc-chapter-row-bg) !important;
        }

        html[data-xetc-theme='dark'][data-xetc-chapter-colors='on'] #xetc-course-sidebar-content .chapter_item_box.xetc-colorized-chapter .section_item_box::after {
            background: hsl(var(--xetc-chapter-hue) 28% 27%);
        }

        html[data-xetc-theme='dark'][data-xetc-chapter-colors='on'] #xetc-course-sidebar-content .section_item_box:hover:not(.xetc-current-lesson-row) {
            background: #343434 !important;
            border-color: #4a4a4a !important;
        }

        html[data-xetc-theme='dark'][data-xetc-chapter-colors='on'] #xetc-course-sidebar-content .section_item_box.xetc-current-lesson-row {
            background: #3d3d3d !important;
            border-color: #5a5a5a !important;
        }

        html[data-xetc-theme='dark'][data-xetc-chapter-colors='on'] #xetc-course-sidebar-content .section_item_box.xetc-current-lesson-row::before {
            border-left-color: #fff;
        }

        html[data-xetc-theme='dark'] .camp_pro_content_header *,
        html[data-xetc-theme='dark'] .content_switch_tab *,
        html[data-xetc-theme='dark'] .catalog_box *,
        html[data-xetc-theme='dark'] .navbar-wrapper * {
            border-color: #303030 !important;
        }

        html[data-xetc-theme='dark'] .course_title,
        html[data-xetc-theme='dark'] .sections_title,
        html[data-xetc-theme='dark'] .chapter_title,
        html[data-xetc-theme='dark'] .el-collapse-item__header,
        html[data-xetc-theme='dark'] .catalog_box .textNode,
        html[data-xetc-theme='dark'] .catalog_box .title,
        html[data-xetc-theme='dark'] .catalog_box input,
        html[data-xetc-theme='dark'] .content_switch_tab {
            color: #fff !important;
        }

        html[data-xetc-theme='dark'] .course_base_layout *,
        html[data-xetc-theme='dark'] #xetc-course-sidebar *,
        html[data-xetc-theme='dark'] .navbar-wrapper * {
            color: #fff !important;
        }

        html[data-xetc-theme='dark'] #xetc-course-sidebar {
            background: #181818 !important;
            border-color: #303030 !important;
            color: #fff !important;
        }

        html[data-xetc-theme='dark'] #xetc-player-column .video-title,
        html[data-xetc-theme='dark'] #xetc-player-column .video-title__font {
            background: #0f0f0f !important;
            color: #fff !important;
        }

        html[data-xetc-theme='dark'] .subcourse-list-item,
        html[data-xetc-theme='dark'] .subcourse-list-item.active {
            background: #242424 !important;
            border: 1px solid #3f3f3f !important;
            color: #fff !important;
        }

        html[data-xetc-theme='dark'] .subcourse-list-item:hover,
        html[data-xetc-theme='dark'] .subcourse-list-item.active {
            background: #383838 !important;
            border-color: #5a5a5a !important;
        }

        html[data-xetc-theme='dark'] #xetc-course-sidebar-content .subcourse-scroller .icon {
            border-color: #4a4a4a;
            background: #2f2f2f !important;
            color: #fff !important;
        }

        html[data-xetc-theme='dark'] .related_channel,
        html[data-xetc-theme='dark'] .related_channel_box,
        html[data-xetc-theme='dark'] .empty-wrapper,
        html[data-xetc-theme='dark'] .ss-popover,
        html[data-xetc-theme='dark'] .ss-dialog {
            background: #181818 !important;
            border-color: #303030 !important;
            color: #fff !important;
        }

        html[data-xetc-theme='dark'] .catalog_box input,
        html[data-xetc-theme='dark'] .el-input__inner {
            background: #121212 !important;
            border-color: #3f3f3f !important;
        }

        html[data-xetc-theme='dark'] .catalog_box input::placeholder {
            color: #fff !important;
        }

        html[data-xetc-theme='dark'] #xetc-course-sidebar-content .camp_pro_content_catalog {
            scrollbar-color: #aaa transparent;
        }

        html[data-xetc-theme='dark'] #xetc-course-sidebar-content .camp_pro_content_catalog::-webkit-scrollbar-thumb {
            background-color: #aaa !important;
        }

        html[data-xetc-theme='dark'] #xetc-course-sidebar-content .camp_pro_content_catalog::-webkit-scrollbar-thumb:hover {
            background-color: #d0d0d0 !important;
        }
    `;

    const applyTheme = () => {
        document.documentElement.dataset.xetcTheme = settings.theme;
    };

    const applyAnimationPreference = () => {
        document.documentElement.dataset.xetcAnimations = settings.animations ? 'on' : 'off';
    };

    const applyChapterColorPreference = () => {
        document.documentElement.dataset.xetcChapterColors = settings.chapterColors ? 'on' : 'off';
    };

    const applyCatalogFontSizes = () => {
        document.documentElement.style.setProperty('--xetc-chapter-font-size', `${settings.chapterFontSize}px`);
        document.documentElement.style.setProperty('--xetc-lesson-font-size', `${settings.lessonFontSize}px`);
    };

    applyTheme();
    applyAnimationPreference();
    applyChapterColorPreference();
    applyCatalogFontSizes();

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

    const isVideoCourseUrl = (url) => {
        try {
            const parsed = new URL(url, location.origin);
            return parsed.origin === location.origin
                && /\/p\/t_pc\/course_pc_detail\/video\//.test(parsed.pathname);
        } catch (_) {
            return false;
        }
    };

    const waitFor = (predicate, timeout = 12000) => new Promise((resolve, reject) => {
        const startedAt = Date.now();
        const check = () => {
            let value = null;
            try {
                value = predicate();
            } catch (_) {
                // The page may be between two Vue component trees.
            }
            if (value) {
                resolve(value);
                return;
            }
            if (Date.now() - startedAt >= timeout) {
                reject(new Error('等待小鹅通播放器初始化超时'));
                return;
            }
            requestAnimationFrame(check);
        };
        check();
    });

    let seamlessNavigationRunning = false;
    let activeLessonPath = location.pathname;
    let lastStudyPath = '';
    let learningStateInitialized = false;
    const originalJumpTargetUrl = new WeakMap();
    const originalChangeNextVideoEvent = new WeakMap();
    const originalReloadSwitchDescriptor = new WeakMap();

    const getVideoPageContext = () => {
        const baseVm = document.querySelector('.course_base_layout')?.__vue__;
        const playerVm = document.querySelector('.video-content-header')?.__vue__;
        return {
            baseVm,
            playerVm,
            router: baseVm?.$router,
            scrollHost: document.querySelector('#xetc-course-sidebar .camp_pro_content_catalog'),
        };
    };

    const invalidateComputedValues = (component) => {
        Object.values(component?._computedWatchers || {}).forEach((watcher) => {
            watcher.dirty = true;
        });
    };

    const resetPlayerState = (playerVm) => {
        playerVm.captionList = [];
        playerVm.routeListObj = {};
        playerVm.hasRouteList = false;
        playerVm.storageRoute = '';
        playerVm.playTime = 0;
        playerVm.isFirstReport = true;
        playerVm.videoUrls = [];
        playerVm.loopVideoForPackage = null;
    };

    const refreshVideoPlayer = async (target, updateRoute) => {
        const { baseVm, playerVm, router, scrollHost } = getVideoPageContext();
        if (!baseVm || !playerVm || !router
            || typeof baseVm.initCourseCoreData !== 'function'
            || typeof playerVm.initVideo !== 'function') {
            throw new Error('没有找到小鹅通播放器的局部刷新接口');
        }

        const scrollTop = scrollHost?.scrollTop || 0;
        playerVm.player?.pause?.();
        playerVm.player?.destroy?.();
        playerVm.player = null;

        if (updateRoute) {
            const route = `${target.pathname}${target.search}${target.hash}`;
            const navigation = router.push(route);
            if (navigation && typeof navigation.then === 'function') {
                await navigation;
            }
        }

        // Xiaoe obtains resourceId from the URL but caches it in Vue computed
        // watchers. Invalidate those caches after history.pushState so the
        // following native data requests use the newly selected lesson.
        invalidateComputedValues(baseVm);
        invalidateComputedValues(playerVm);
        await baseVm.initCourseCoreData();
        invalidateComputedValues(baseVm);
        invalidateComputedValues(playerVm);

        resetPlayerState(playerVm);
        if (typeof playerVm.getVideoExchangeRouteList === 'function') {
            await playerVm.getVideoExchangeRouteList();
        }
        if (typeof playerVm.initCaptionsList === 'function') {
            await playerVm.initCaptionsList();
        }
        patchPlayerNextNavigation();
        playerVm.initQuizz?.();
        playerVm.initVideo();

        const targetId = target.pathname.split('/').pop();
        await waitFor(() => playerVm.player
            && playerVm.resourceId === targetId
            && document.querySelector('#pc_course_fe_basic_video video'));

        if (scrollHost?.isConnected) scrollHost.scrollTop = scrollTop;
        queueEnhancementUpdate();
    };

    const navigateVideoWithoutReload = async (targetUrl) => {
        const target = new URL(targetUrl, location.origin);
        if (!settings.seamlessSwitch || !isVideoCourseUrl(target.href)) {
            location.assign(target.href);
            return;
        }

        if (target.href === location.href || seamlessNavigationRunning) return;

        seamlessNavigationRunning = true;
        document.documentElement.dataset.xetcNavigating = 'true';

        try {
            const previousPath = activeLessonPath;
            await refreshVideoPlayer(target, true);
            if (previousPath !== target.pathname) {
                lastStudyPath = previousPath;
            }
            activeLessonPath = target.pathname;
            queueEnhancementUpdate();
        } catch (error) {
            console.warn('[小鹅通课程页面增强] 无刷新切课失败，已退回普通跳转。', error);
            try {
                sessionStorage.setItem(
                    'xetc-last-navigation-error',
                    String(error?.stack || error || '未知错误'),
                );
            } catch (_) {
                // Diagnostics are optional when session storage is unavailable.
            }
            location.assign(target.href);
        } finally {
            seamlessNavigationRunning = false;
            delete document.documentElement.dataset.xetcNavigating;
        }
    };

    const packageVideoTargetToPcUrl = (target) => {
        const targetUrl = typeof target === 'string' ? target : target?.url;
        const resourceId = targetUrl?.match(/\/p\/course\/video\/([^/?#]+)/)?.[1];
        if (!resourceId) return '';

        const pcUrl = new URL(location.href);
        pcUrl.pathname = pcUrl.pathname.replace(/\/video\/[^/]+$/, `/video/${resourceId}`);
        return pcUrl.href;
    };

    const getNextCatalogVideoUrl = () => {
        const links = [...document.querySelectorAll(
            '#xetc-course-sidebar-content .xetc-course-native-link',
        )].filter((link) => isVideoCourseUrl(link.href));
        const currentIndex = links.findIndex((link) => {
            try {
                return new URL(link.href).pathname === location.pathname;
            } catch (_) {
                return false;
            }
        });
        return currentIndex >= 0 ? links[currentIndex + 1]?.href || '' : '';
    };

    const patchPlayerNextNavigation = () => {
        const playerVm = document.querySelector('.video-content-header')?.__vue__;
        const funcTool = playerVm?.$funcTool;
        if (!playerVm) return;

        if (!funcTool || typeof funcTool.jumpTargetUrl !== 'function') return;

        if (!funcTool.jumpTargetUrl?.__xetcPatched) {
            if (!originalJumpTargetUrl.has(funcTool)) {
                originalJumpTargetUrl.set(funcTool, funcTool.jumpTargetUrl);
            }
            const original = originalJumpTargetUrl.get(funcTool);
            const patched = function (target, ...args) {
                const pcUrl = getNextCatalogVideoUrl() || packageVideoTargetToPcUrl(target);
                if (settings.seamlessSwitch && pcUrl) {
                    navigateVideoWithoutReload(pcUrl);
                    return;
                }
                return original.call(this, target, ...args);
            };
            patched.__xetcPatched = true;
            funcTool.jumpTargetUrl = patched;
        }

        if (!originalChangeNextVideoEvent.has(playerVm)) {
            originalChangeNextVideoEvent.set(playerVm, playerVm.changeNextVideoEvent);
        }
        if (playerVm.changeNextVideoEvent?.__xetcPatched) return;

        const originalNext = originalChangeNextVideoEvent.get(playerVm);
        const patchedNext = async function (...args) {
            if (!settings.seamlessSwitch || !this.isPrdPackage) {
                return originalNext.apply(this, args);
            }

            try {
                if (!this.loopVideoForPackage?.next && typeof this.initLoop === 'function') {
                    await this.initLoop();
                }
                const pcUrl = packageVideoTargetToPcUrl(this.loopVideoForPackage?.next)
                    || getNextCatalogVideoUrl();
                if (pcUrl) {
                    navigateVideoWithoutReload(pcUrl);
                    return;
                }
            } catch (error) {
                console.warn('[小鹅通课程页面增强] 获取下一集失败，已退回小鹅通原生切换。', error);
            }
            return originalNext.apply(this, args);
        };
        patchedNext.__xetcPatched = true;
        playerVm.changeNextVideoEvent = patchedNext;
    };

    const patchCatalogReload = () => {
        const catalogVm = document.querySelector('.content_detail')?.__vue__;
        if (!catalogVm || originalReloadSwitchDescriptor.has(catalogVm)) return;

        const descriptor = Object.getOwnPropertyDescriptor(catalogVm, 'reloadSwitch');
        if (!descriptor?.get || !descriptor?.set || !descriptor.configurable) return;
        originalReloadSwitchDescriptor.set(catalogVm, descriptor);

        Object.defineProperty(catalogVm, 'reloadSwitch', {
            configurable: descriptor.configurable,
            enumerable: descriptor.enumerable,
            get: descriptor.get,
            set(value) {
                const playerVm = document.querySelector('.video-content-header')?.__vue__;
                const keepCatalogStable = settings.seamlessSwitch
                    && Number(playerVm?.playModeType) === 3;
                if (keepCatalogStable) {
                    queueEnhancementUpdate();
                    return;
                }
                descriptor.set.call(this, value);
            },
        });
    };

    const handleBrowserHistoryNavigation = () => {
        if (!settings.seamlessSwitch) return;

        requestAnimationFrame(async () => {
            if (!/\/p\/t_pc\/course_pc_detail\/video\//.test(location.pathname)) return;
            if (seamlessNavigationRunning) return;

            seamlessNavigationRunning = true;
            document.documentElement.dataset.xetcNavigating = 'true';
            try {
                const target = new URL(location.href);
                const previousPath = activeLessonPath;
                await refreshVideoPlayer(target, false);
                if (previousPath !== target.pathname) {
                    lastStudyPath = previousPath;
                }
                activeLessonPath = target.pathname;
                queueEnhancementUpdate();
            } catch (error) {
                console.warn('[小鹅通课程页面增强] 历史记录切课失败，已重新加载当前课程。', error);
                location.reload();
            } finally {
                seamlessNavigationRunning = false;
                delete document.documentElement.dataset.xetcNavigating;
            }
        });
    };

    const originalOpenCatalogTarget = new WeakMap();

    const patchCourseNavigation = (courseElement) => {
        const component = courseElement.__vue__;
        if (!component || typeof component.openCatalogTarget !== 'function') return;

        if (!originalOpenCatalogTarget.has(component)) {
            originalOpenCatalogTarget.set(component, component.openCatalogTarget);
        }

        const original = originalOpenCatalogTarget.get(component);
        if (!settings.seamlessSwitch) {
            if (component.openCatalogTarget !== original) {
                component.openCatalogTarget = original;
            }
            return;
        }

        if (component.openCatalogTarget?.__xetcPatched) return;
        const patched = function (path) {
            const url = absoluteUrl(path);
            if (isVideoCourseUrl(url)) {
                navigateVideoWithoutReload(url);
                return;
            }
            return original.call(this, path);
        };
        patched.__xetcPatched = true;
        component.openCatalogTarget = patched;
    };

    const layoutState = {
        header: null,
        catalog: null,
        headerPlaceholder: null,
        catalogPlaceholder: null,
        resizeObserver: null,
    };

    const clearDisconnectedLayoutState = () => {
        if (layoutState.header?.isConnected || layoutState.catalog?.isConnected) return;
        layoutState.header = null;
        layoutState.catalog = null;
        layoutState.headerPlaceholder = null;
        layoutState.catalogPlaceholder = null;
        layoutState.resizeObserver?.disconnect();
        layoutState.resizeObserver = null;
    };

    const restoreTheaterLayout = () => {
        const wrapper = document.getElementById('xetc-theater-layout');
        if (layoutState.header?.isConnected && layoutState.headerPlaceholder?.parentNode) {
            layoutState.headerPlaceholder.parentNode.insertBefore(
                layoutState.header,
                layoutState.headerPlaceholder.nextSibling,
            );
        }
        if (layoutState.catalog?.isConnected && layoutState.catalogPlaceholder?.parentNode) {
            layoutState.catalogPlaceholder.parentNode.insertBefore(
                layoutState.catalog,
                layoutState.catalogPlaceholder.nextSibling,
            );
        }
        layoutState.headerPlaceholder?.remove();
        layoutState.catalogPlaceholder?.remove();
        wrapper?.remove();
        layoutState.header = null;
        layoutState.catalog = null;
        layoutState.headerPlaceholder = null;
        layoutState.catalogPlaceholder = null;
        layoutState.resizeObserver?.disconnect();
        layoutState.resizeObserver = null;
    };

    const syncSubcourseSwitcher = () => {
        const list = document.querySelector('#xetc-course-sidebar-content .subcourse-list');
        const width = list?.getBoundingClientRect().width || 0;
        if (!list || width <= 0) return;

        list.style.setProperty('--xetc-subcourse-card-width', `${width}px`);
        const cards = [...list.querySelectorAll('.subcourse-list-item')];
        const scroller = document.querySelector('#xetc-course-sidebar-content .subcourse-scroller');
        const previous = scroller?.querySelector('.icon.right');
        const next = scroller?.querySelector('.icon.left');

        const setControlState = (index) => {
            previous?.classList.toggle('disabled', index <= 0);
            next?.classList.toggle('disabled', index >= cards.length - 1);
        };
        setControlState(Math.max(0, Math.min(cards.length - 1, Math.round(list.scrollLeft / width))));

        [previous, next].forEach((control) => {
            if (!control || control.dataset.xetcSwitcherEvents) return;
            control.dataset.xetcSwitcherEvents = 'true';
            control.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopImmediatePropagation();
                const currentWidth = list.getBoundingClientRect().width || width;
                const currentIndex = Math.round(list.scrollLeft / currentWidth);
                const direction = control.classList.contains('left') ? 1 : -1;
                const targetIndex = Math.max(0, Math.min(cards.length - 1, currentIndex + direction));
                list.scrollTo({
                    left: targetIndex * currentWidth,
                    behavior: settings.animations ? 'smooth' : 'auto',
                });
                setControlState(targetIndex);
            }, true);
        });
    };

    const applyTheaterLayout = () => {
        clearDisconnectedLayoutState();
        const isVideoPage = /\/p\/t_pc\/course_pc_detail\/video\//.test(location.pathname);
        if (!settings.theaterLayout || !isVideoPage) {
            restoreTheaterLayout();
            return;
        }

        const existingWrapper = document.getElementById('xetc-theater-layout');
        if (existingWrapper && layoutState.header?.isConnected && layoutState.catalog?.isConnected) {
            syncSubcourseSwitcher();
            return;
        }

        existingWrapper?.remove();
        const baseLayout = document.querySelector('.course_base_layout');
        const header = baseLayout?.querySelector(':scope > .content_header');
        const catalog = baseLayout?.querySelector('.course_content_catalog');
        if (!baseLayout || !header || !catalog) return;

        const headerPlaceholder = document.createComment('xetc-header-origin');
        const catalogPlaceholder = document.createComment('xetc-catalog-origin');
        header.parentNode.insertBefore(headerPlaceholder, header);
        catalog.parentNode.insertBefore(catalogPlaceholder, catalog);

        const wrapper = document.createElement('section');
        wrapper.id = 'xetc-theater-layout';
        wrapper.setAttribute('aria-label', '课程播放区');

        const playerColumn = document.createElement('div');
        playerColumn.id = 'xetc-player-column';
        const loading = document.createElement('div');
        loading.id = 'xetc-route-loading';
        loading.textContent = '正在加载课程…';

        const sidebar = document.createElement('aside');
        sidebar.id = 'xetc-course-sidebar';
        sidebar.setAttribute('aria-label', '课程目录');
        const sidebarContent = document.createElement('div');
        sidebarContent.id = 'xetc-course-sidebar-content';

        playerColumn.append(header, loading);
        sidebarContent.appendChild(catalog);
        sidebar.appendChild(sidebarContent);
        wrapper.append(playerColumn, sidebar);
        baseLayout.insertBefore(wrapper, headerPlaceholder.nextSibling);

        layoutState.header = header;
        layoutState.catalog = catalog;
        layoutState.headerPlaceholder = headerPlaceholder;
        layoutState.catalogPlaceholder = catalogPlaceholder;
        if (typeof ResizeObserver === 'function') {
            const syncSidebarHeight = () => {
                const playerHeight = Math.round(playerColumn.getBoundingClientRect().height);
                if (playerHeight > 0) {
                    sidebar.style.height = `${Math.min(820, Math.max(420, playerHeight))}px`;
                }
                syncSubcourseSwitcher();
            };
            layoutState.resizeObserver = new ResizeObserver(syncSidebarHeight);
            layoutState.resizeObserver.observe(playerColumn);
            syncSidebarHeight();
        }
    };

    const getLessonPath = (row) => {
        try {
            const href = row.querySelector('.xetc-course-native-link')?.href || getCourseUrl(row);
            return href ? new URL(href, location.origin).pathname : '';
        } catch (_) {
            return '';
        }
    };

    const updateCurrentLessonPresentation = () => {
        const rows = [...document.querySelectorAll('#xetc-course-sidebar-content .section_item_box')];
        if (!rows.length) return;

        if (!learningStateInitialized) {
            const nativeLastRow = rows.find((row) => row.classList.contains('last_study_bg')
                && getLessonPath(row) !== activeLessonPath);
            lastStudyPath = nativeLastRow ? getLessonPath(nativeLastRow) : '';
            learningStateInitialized = true;
        }

        rows.forEach((row) => {
            const rowPath = getLessonPath(row);
            const isCurrent = Boolean(rowPath) && rowPath === activeLessonPath;
            const isLastStudy = Boolean(rowPath) && !isCurrent && rowPath === lastStudyPath;
            row.classList.toggle('xetc-current-lesson-row', isCurrent);
            row.classList.toggle('xetc-last-study-row', isLastStudy);

            if (isCurrent) {
                row.setAttribute('aria-current', 'page');
            } else {
                row.removeAttribute('aria-current');
            }

            let badge = row.querySelector(':scope > .xetc-last-study-badge');
            if (isLastStudy && !badge) {
                badge = document.createElement('span');
                badge.className = 'xetc-last-study-badge';
                badge.textContent = '上次学习';
                row.appendChild(badge);
            } else if (!isLastStudy) {
                badge?.remove();
            }
        });
    };

    const updateCatalogHeading = () => {
        const heading = [...document.querySelectorAll('#xetc-course-sidebar-content *')]
            .find((element) => element.children.length === 0
                && element.textContent?.trim() === '课程目录');
        heading?.classList.add('xetc-catalog-heading');
    };

    const locateCurrentLesson = () => {
        const scrollHost = document.querySelector(
            '#xetc-course-sidebar-content .camp_pro_content_catalog',
        );
        const currentRow = document.querySelector(
            '#xetc-course-sidebar-content .xetc-current-lesson-row',
        );
        if (!scrollHost || !currentRow) return false;

        const hostRect = scrollHost.getBoundingClientRect();
        const rowRect = currentRow.getBoundingClientRect();
        const centeredTop = scrollHost.scrollTop + rowRect.top - hostRect.top
            - (scrollHost.clientHeight - rowRect.height) / 2;
        const maxScrollTop = Math.max(0, scrollHost.scrollHeight - scrollHost.clientHeight);
        scrollHost.scrollTo({
            top: Math.min(maxScrollTop, Math.max(0, centeredTop)),
            behavior: settings.animations ? 'smooth' : 'auto',
        });

        currentRow.classList.remove('xetc-locate-pulse');
        requestAnimationFrame(() => currentRow.classList.add('xetc-locate-pulse'));
        window.setTimeout(() => currentRow.classList.remove('xetc-locate-pulse'), 750);
        return true;
    };

    const CHAPTER_HUES = [38, 158, 218, 278, 338, 188, 18, 118, 248, 308, 68, 173];

    const updateChapterColors = () => {
        document.querySelectorAll('#xetc-course-sidebar-content .chapter_item_box').forEach((chapter, index) => {
            chapter.classList.toggle('xetc-colorized-chapter', settings.chapterColors);
            if (settings.chapterColors) {
                chapter.style.setProperty('--xetc-chapter-hue', String(CHAPTER_HUES[index % CHAPTER_HUES.length]));
            } else {
                chapter.style.removeProperty('--xetc-chapter-hue');
            }
        });
    };

    const removeCourseLink = (courseElement) => {
        courseElement.querySelector('.xetc-course-native-link')?.remove();
        courseElement.querySelector('.xetc-course-linked')?.classList.remove('xetc-course-linked');
    };

    const enhanceCourseLink = (courseElement) => {
        patchCourseNavigation(courseElement);

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
            titleElement.appendChild(link);
        }
        if (!link.dataset.xetcV3Events) {
            link.dataset.xetcV3Events = 'true';
            link.addEventListener('click', (event) => {
                const modified = event.ctrlKey || event.metaKey || event.shiftKey || event.altKey;
                if (event.button === 0 && !modified) {
                    event.preventDefault();
                    if (settings.seamlessSwitch && isVideoCourseUrl(link.href)) {
                        event.stopImmediatePropagation();
                        navigateVideoWithoutReload(link.href);
                    }
                } else {
                    // Prevent Xiaoe's parent click handler from hijacking native
                    // Ctrl/Command/Shift-click navigation.
                    event.stopPropagation();
                }
            }, true);
            link.addEventListener('auxclick', (event) => event.stopPropagation(), true);
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
    const queueEnhancementUpdate = () => {
        if (updateQueued) return;
        updateQueued = true;
        requestAnimationFrame(() => {
            updateQueued = false;
            applyTheaterLayout();
            updateCourseLinks();
            patchPlayerNextNavigation();
            patchCatalogReload();
            updateCurrentLessonPresentation();
            updateCatalogHeading();
            updateChapterColors();
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
                .floating-actions {
                    position: fixed; right: 16px; bottom: 96px; z-index: 2147483646;
                    display: grid; gap: 12px; width: 46px;
                    transform: translateX(calc(100% + 6px));
                }
                :host([data-actions-nearby]) .floating-actions,
                .floating-actions:focus-within,
                :host([data-panel-open]) .floating-actions {
                    transform: translateX(0);
                }
                .settings-button,
                .locate-button {
                    width: 46px; height: 46px; border: 0; border-radius: 50%;
                    background: #1472ff; color: #fff; box-shadow: 0 8px 24px rgba(20, 114, 255, .34);
                    font: 22px/1 system-ui, sans-serif; cursor: pointer;
                }
                .locate-button,
                .settings-button { display: grid; place-items: center; }
                .locate-button svg,
                .settings-button svg { width: 34px; height: 34px; }
                .settings-button:hover,
                .locate-button:hover { background: #075fd8; transform: translateY(-1px); }
                :host([data-panel-open]) .locate-button { visibility: hidden; pointer-events: none; }
                .panel {
                    position: fixed; right: 22px; bottom: 154px; z-index: 2147483646;
                    width: 340px; max-height: min(76vh, 620px); overflow-y: auto;
                    padding: 18px; border: 1px solid #dce2ea; border-radius: 14px;
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
                .font-setting { display: block; }
                .font-controls { display: grid; gap: 9px; margin-top: 10px; }
                .font-control { display: grid; grid-template-columns: 54px 1fr 42px; align-items: center; gap: 8px; }
                .font-control span { color: #596273; font-size: 12px; }
                .font-control input { width: 100%; accent-color: #1472ff; cursor: pointer; }
                .font-control output { text-align: right; color: #1472ff; font-variant-numeric: tabular-nums; }
                .notice { display: none; margin-top: 10px; padding: 9px 10px; border-radius: 8px; background: #fff4df; color: #855d13; font-size: 12px; }
                :host-context(html[data-xetc-animations='on']) .floating-actions,
                :host-context(html[data-xetc-animations='on']) .settings-button,
                :host-context(html[data-xetc-animations='on']) .locate-button,
                :host-context(html[data-xetc-animations='on']) .panel { transition: .2s cubic-bezier(.2, 0, 0, 1); }
                :host-context(html[data-xetc-theme='dark']) .panel { background: #181818; color: #fff; border-color: #303030; }
                :host-context(html[data-xetc-theme='dark']) .setting { border-color: #303030; }
                :host-context(html[data-xetc-theme='dark']) .label small,
                :host-context(html[data-xetc-theme='dark']) .close,
                :host-context(html[data-xetc-theme='dark']) .theme button { color: #fff; }
                :host-context(html[data-xetc-theme='dark']) .theme { background: #0f0f0f; }
                :host-context(html[data-xetc-theme='dark']) .theme button.active { background: #272727; color: #fff; }
                :host-context(html[data-xetc-theme='dark']) .font-control span { color: #fff; }
            </style>
            <div class="floating-actions">
                <button class="locate-button" type="button" aria-label="定位当前播放小节" title="定位当前播放小节">
                    <svg viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="8" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="18" cy="18" r="2.5" fill="currentColor"/><path d="M18 3v7M18 26v7M3 18h7M26 18h7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
                </button>
                <button class="settings-button" type="button" aria-label="打开小鹅通页面设置" title="页面设置">
                    <svg viewBox="0 0 36 36" aria-hidden="true"><path d="M15.2 4.3h5.6l.8 3.1c.8.3 1.6.7 2.3 1.3l3.1-.9 2.8 4.8-2.3 2.3c.1.5.2 1 .2 1.6s-.1 1.1-.2 1.6l2.3 2.3-2.8 4.8-3.1-.9c-.7.6-1.5 1-2.3 1.3l-.8 3.1h-5.6l-.8-3.1c-.8-.3-1.6-.7-2.3-1.3l-3.1.9-2.8-4.8 2.3-2.3c-.1-.5-.2-1-.2-1.6s.1-1.1.2-1.6l-2.3-2.3L9 7.8l3.1.9c.7-.6 1.5-1 2.3-1.3l.8-3.1Z" fill="none" stroke="currentColor" stroke-width="2.7" stroke-linejoin="round"/><circle cx="18" cy="16.5" r="4.7" fill="none" stroke="currentColor" stroke-width="2.7"/></svg>
                </button>
            </div>
            <section class="panel" aria-label="小鹅通页面设置" hidden>
                <div class="header"><span class="title">页面设置</span><button class="close" type="button" aria-label="关闭">×</button></div>
                <div class="setting">
                    <div class="label"><strong>页面配色</strong><small>立即切换当前页面</small></div>
                    <div class="theme"><button type="button" data-theme="light">浅色</button><button type="button" data-theme="dark">深色</button></div>
                </div>
                <label class="setting">
                    <span class="label"><strong>YouTube 式学习布局</strong><small>大播放器在左，独立滚动目录在右</small></span>
                    <span class="switch"><input name="theaterLayout" type="checkbox"><span class="track"></span></span>
                </label>
                <label class="setting">
                    <span class="label"><strong>无刷新切换视频课程</strong><small>保留小鹅通原生进度和权限流程</small></span>
                    <span class="switch"><input name="seamlessSwitch" type="checkbox"><span class="track"></span></span>
                </label>
                <label class="setting">
                    <span class="label"><strong>界面动画</strong><small>切课和目录交互更加流畅</small></span>
                    <span class="switch"><input name="animations" type="checkbox"><span class="track"></span></span>
                </label>
                <label class="setting">
                    <span class="label"><strong>章节彩色分组</strong><small>用低饱和度色块区分各个大章节</small></span>
                    <span class="switch"><input name="chapterColors" type="checkbox"><span class="track"></span></span>
                </label>
                <div class="setting font-setting">
                    <div class="label"><strong>大章节和小节字号</strong><small>拖动后立即调整课程目录文字大小</small></div>
                    <div class="font-controls">
                        <label class="font-control"><span>大章节</span><input name="chapterFontSize" type="range" min="14" max="22" step="1"><output name="chapterFontSizeValue"></output></label>
                        <label class="font-control"><span>小节</span><input name="lessonFontSize" type="range" min="12" max="20" step="1"><output name="lessonFontSizeValue"></output></label>
                    </div>
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
        const theaterLayoutInput = shadow.querySelector('input[name="theaterLayout"]');
        const seamlessSwitchInput = shadow.querySelector('input[name="seamlessSwitch"]');
        const animationsInput = shadow.querySelector('input[name="animations"]');
        const chapterColorsInput = shadow.querySelector('input[name="chapterColors"]');
        const chapterFontSizeInput = shadow.querySelector('input[name="chapterFontSize"]');
        const lessonFontSizeInput = shadow.querySelector('input[name="lessonFontSize"]');
        const courseLinksInput = shadow.querySelector('input[name="courseLinks"]');
        const preventReloadInput = shadow.querySelector('input[name="preventReload"]');
        const notice = shadow.querySelector('.notice');
        const floatingActions = shadow.querySelector('.floating-actions');

        let proximityFrame = 0;
        let latestPointerPosition = null;
        const updateFloatingActionsProximity = () => {
            proximityFrame = 0;
            if (!latestPointerPosition || host.hasAttribute('data-panel-open')) return;

            const actionsRect = floatingActions.getBoundingClientRect();
            const nearRightEdge = latestPointerPosition.x >= window.innerWidth - 96;
            const nearActionsHeight = latestPointerPosition.y >= actionsRect.top - 32
                && latestPointerPosition.y <= actionsRect.bottom + 32;
            host.toggleAttribute('data-actions-nearby', nearRightEdge && nearActionsHeight);
        };

        window.addEventListener('pointermove', (event) => {
            latestPointerPosition = { x: event.clientX, y: event.clientY };
            if (!proximityFrame) proximityFrame = window.requestAnimationFrame(updateFloatingActionsProximity);
        }, { passive: true });
        window.addEventListener('blur', () => {
            host.removeAttribute('data-actions-nearby');
        });

        const render = () => {
            shadow.querySelectorAll('[data-theme]').forEach((button) => {
                button.classList.toggle('active', button.dataset.theme === settings.theme);
            });
            theaterLayoutInput.checked = settings.theaterLayout;
            seamlessSwitchInput.checked = settings.seamlessSwitch;
            animationsInput.checked = settings.animations;
            chapterColorsInput.checked = settings.chapterColors;
            chapterFontSizeInput.value = String(settings.chapterFontSize);
            lessonFontSizeInput.value = String(settings.lessonFontSize);
            shadow.querySelector('output[name="chapterFontSizeValue"]').value = `${settings.chapterFontSize}px`;
            shadow.querySelector('output[name="lessonFontSizeValue"]').value = `${settings.lessonFontSize}px`;
            courseLinksInput.checked = settings.courseLinks;
            preventReloadInput.checked = settings.preventReload;
        };

        const setPanelOpen = (open) => {
            panel.hidden = !open;
            host.toggleAttribute('data-panel-open', open);
            if (open) host.removeAttribute('data-actions-nearby');
        };

        shadow.querySelector('.locate-button').addEventListener('click', () => {
            locateCurrentLesson();
        });
        shadow.querySelector('.settings-button').addEventListener('click', () => {
            setPanelOpen(panel.hidden);
        });
        shadow.querySelector('.close').addEventListener('click', () => {
            setPanelOpen(false);
        });
        shadow.querySelectorAll('[data-theme]').forEach((button) => {
            button.addEventListener('click', () => {
                settings = { ...settings, theme: button.dataset.theme };
                saveSettings();
                applyTheme();
                render();
            });
        });
        theaterLayoutInput.addEventListener('change', () => {
            settings = { ...settings, theaterLayout: theaterLayoutInput.checked };
            saveSettings();
            applyTheaterLayout();
        });
        seamlessSwitchInput.addEventListener('change', () => {
            settings = { ...settings, seamlessSwitch: seamlessSwitchInput.checked };
            saveSettings();
            updateCourseLinks();
        });
        animationsInput.addEventListener('change', () => {
            settings = { ...settings, animations: animationsInput.checked };
            saveSettings();
            applyAnimationPreference();
        });
        chapterColorsInput.addEventListener('change', () => {
            settings = { ...settings, chapterColors: chapterColorsInput.checked };
            saveSettings();
            applyChapterColorPreference();
            updateChapterColors();
        });
        chapterFontSizeInput.addEventListener('input', () => {
            settings = { ...settings, chapterFontSize: Number(chapterFontSizeInput.value) };
            saveSettings();
            applyCatalogFontSizes();
            render();
        });
        lessonFontSizeInput.addEventListener('input', () => {
            settings = { ...settings, lessonFontSize: Number(lessonFontSizeInput.value) };
            saveSettings();
            applyCatalogFontSizes();
            render();
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
        applyTheaterLayout();
        updateCourseLinks();
        patchPlayerNextNavigation();
        patchCatalogReload();
        updateCurrentLessonPresentation();
        updateCatalogHeading();
        updateChapterColors();

        const observer = new MutationObserver(queueEnhancementUpdate);
        observer.observe(document.body, { childList: true, subtree: true });
        window.addEventListener('popstate', handleBrowserHistoryNavigation);
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startPageEnhancements, { once: true });
    } else {
        startPageEnhancements();
    }
})();
