import { b as createAstro, c as createComponent, m as maybeRenderHead, s as spreadAttributes, d as addAttribute, a as renderTemplate, r as renderComponent, F as Fragment, u as unescapeHTML, e as createTransitionScope, f as defineScriptVars, A as AstroError, U as UnknownContentCollectionError, R as RenderUndefinedEntryError, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, j as renderScript, k as renderSlot, l as renderHead } from './astro/server_DjYQvG4n.mjs';
import 'piccolore';
/* empty css                          */
import 'clsx';
import { ssr, ssrHydrationKey, createComponent as createComponent$1, Portal, ssrAttribute, escape, ssrStyle, mergeProps, ssrElement, ssrStyleProperty } from 'solid-js/web';
import { createSignal, untrack, createRoot, createEffect, onCleanup, For, Switch, Match, createMemo, onMount } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { escape as escape$1 } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import * as devalue from 'devalue';
import { format } from 'date-fns';
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { getIconData, iconToSVG } from '@iconify/utils';

const siteConfig = {
  url: "https://blog.loli.life/",
  title: "猫猫博客",
  subtitle: "故梦待续 | 结局无期",
  description: "故梦待续 | 结局无期",
  lang: "zh_CN",
  favicon: "/favicon.ico",
  author: {
    username: "Cat",
    bio: "故梦待续 | 结局无期",
    avatar: "/images/avatar.svg"
  },
  icp_license: "",
  // ICP备案号，请替换为实际备案号
  police_license: ""
  // 公安备案号，请替换为实际备案号
};

const icons = {"local":{"prefix":"local","lastModified":1783941784,"icons":{"42tag":{"body":"<path fill=\"#31EC7C\" d=\"M663.492 1002.315c-162.455 0-294.16-131.734-294.16-294.189v-598.89A109.237 109.237 0 0 1 478.57 0h369.845a109.237 109.237 0 0 1 109.237 109.237v598.89c0 162.454-131.705 294.158-294.16 294.158\"/><path fill=\"#A267F8\" d=\"M871.484 916.149c-114.868 114.868-301.116 114.868-416.015 0L32.015 492.634a109.207 109.207 0 0 1 0-154.443L293.527 76.65a109.207 109.207 0 0 1 154.443 0l423.514 423.455c114.869 114.928 114.869 301.176 0 416.045\"/><path fill=\"#F83CB6\" d=\"M455.5 916.149c-114.87-114.869-114.87-301.117 0-416.015L879.013 76.649a109.207 109.207 0 0 1 154.443 0l261.542 261.542a109.207 109.207 0 0 1 0 154.443L871.514 916.15c-114.898 114.868-301.176 114.868-416.015 0\"/><path fill=\"#7E42B9\" d=\"M871.484 500.134 663.492 292.14 455.469 500.134c-114.838 114.868-114.838 301.116 0 416.015 114.899 114.868 301.177 114.868 416.015 0 114.869-114.9 114.869-301.147 0-416.015\"/><path fill=\"#FFF\" d=\"M740.533 636.235A101.707 101.707 0 0 1 596.72 780.047a101.707 101.707 0 0 1 143.812-143.812\"/>","width":1355,"height":1024},"account-circle-fill":{"body":"<path fill=\"currentColor\" d=\"M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2M6.023 15.416C7.491 17.606 9.695 19 12.16 19s4.669-1.393 6.136-3.584A8.97 8.97 0 0 0 12.16 13a8.97 8.97 0 0 0-6.137 2.416M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6\"/>"},"arrow-down-s-line":{"body":"<path fill=\"currentColor\" d=\"m12 13.171 4.95-4.95 1.414 1.415L12 16 5.636 9.636 7.05 8.222z\"/>"},"arrow-left-s-line":{"body":"<path fill=\"currentColor\" d=\"m10.828 12 4.95 4.95-1.414 1.415L8 12l6.364-6.364 1.414 1.414z\"/>"},"arrow-right-s-line":{"body":"<path fill=\"currentColor\" d=\"m13.172 12-4.95-4.95 1.414-1.413L16 12l-6.364 6.364-1.414-1.415z\"/>"},"bookmark-3-line":{"body":"<path fill=\"currentColor\" d=\"M4 2h16a1 1 0 0 1 1 1v19.276a.5.5 0 0 1-.704.457L12 19.03l-8.296 3.702A.5.5 0 0 1 3 22.276V3a1 1 0 0 1 1-1m15 17.965V4H5v15.965l7-3.124zM12 13.5l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L12 6l1.47 2.977 3.285.478-2.377 2.318.56 3.272z\"/>"},"brush-ai-line":{"body":"<path fill=\"currentColor\" d=\"m4.713 7.128-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.37 4.37 0 0 0 3.276.931L3.53.32a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251m10.601 2.405.143.142a5.5 5.5 0 0 1 1.356 5.245 5.505 5.505 0 0 1-5.311 4.078c-2.036 0-4.714-.625-6.973-1.514 1.205-1.414 1.645-2.809 1.8-4.679.037-.451.06-.63.103-.79.793-2.962 3.585-4.61 6.492-3.831.93.25 1.742.724 2.39 1.349m2.914-7.162-4.94 3.842c-3.946-.974-7.73 1.333-8.788 5.284-.102.38-.134.765-.167 1.169-.115 1.394-.247 3.005-3.333 5.33 2.5 1.5 7 3.002 10.502 3.002a7.505 7.505 0 0 0 7.283-9.291l3.84-4.938a1 1 0 0 0-.082-1.321L19.55 2.454a1 1 0 0 0-1.321-.083m-1.333 5.914a8 8 0 0 0-.194-.194l-1.124-1.124 3.182-2.475 1.746 1.746L18.03 9.42z\"/>"},"circle-arrow-up-s-line":{"body":"<path fill=\"currentColor\" d=\"M515.887 938.659a422.796 422.796 0 1 1 422.795-422.772 423.24 423.24 0 0 1-422.795 422.772m0-775.75a352.977 352.977 0 1 0 352.977 352.978 353.373 353.373 0 0 0-352.977-352.978\"/><path fill=\"currentColor\" d=\"M671.046 550.796a34.9 34.9 0 0 1-24.693-10.24L515.887 410.089l-130.49 130.467a34.91 34.91 0 0 1-49.362-49.362l155.16-155.16a34.91 34.91 0 0 1 49.36 0l155.16 155.16a34.91 34.91 0 0 1-24.67 59.602\"/><path fill=\"currentColor\" d=\"M515.887 705.932a34.91 34.91 0 0 1-34.91-34.91V360.728a34.91 34.91 0 0 1 69.819 0v310.296a34.91 34.91 0 0 1-34.91 34.909\"/>","width":1024,"height":1024},"creative-commons-fill":{"body":"<path fill=\"currentColor\" d=\"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2M9 8c-2.208 0-4 1.792-4 4a4.001 4.001 0 0 0 6.828 2.828l-1.414-1.414a2 2 0 1 1 0-2.828l1.415-1.413A4 4 0 0 0 9 8m7 0c-2.208 0-4 1.792-4 4a4.001 4.001 0 0 0 6.828 2.828l-1.414-1.414a2 2 0 1 1 0-2.828l1.415-1.413A4 4 0 0 0 16 8\"/>"},"eye-2-line":{"body":"<path fill=\"currentColor\" d=\"M1.182 12C2.122 6.88 6.608 3 12 3s9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.819 9s-9.878-3.88-10.818-9M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6\"/>"},"fire-line":{"body":"<path fill=\"currentColor\" d=\"M12 23a7.5 7.5 0 0 1-5.138-12.963C8.204 8.774 11.5 6.5 11 1.5c6 4 9 8 3 14 1 0 2.5 0 5-2.47.27.773.5 1.604.5 2.47A7.5 7.5 0 0 1 12 23\"/>"},"hot":{"body":"<path fill=\"red\" d=\"M14.656 512a497.344 497.344 0 1 0 994.688 0 497.344 497.344 0 1 0-994.688 0\"/><path fill=\"#FFF\" d=\"M374.976 872.64c-48.299-100.032-22.592-157.44 14.421-211.37 40.448-58.966 51.115-117.611 51.115-117.611s31.659 41.386 19.115 106.005c56.149-62.72 66.816-162.133 58.325-200.405 127.317 88.746 181.59 281.002 108.181 423.381C1016 652.501 723.093 323.2 672.277 285.867c16.939 37.333 20.054 100.032-14.101 130.474-58.027-219.84-201.664-265.002-201.664-265.002 16.96 113.536-61.781 237.397-137.344 330.24-2.816-45.163-5.632-76.544-29.483-119.808-5.333 82.176-68.373 149.269-85.29 231.445-22.912 111.637 17.237 193.173 170.581 279.424\"/>","width":1024,"height":1024},"ICP":{"body":"<path fill=\"#ED4201\" d=\"M90.293 381.12c7.574 4.48 13.974 10.773 21.12 16.107 10.134 7.573 20.374 14.933 30.294 22.293 15.253-33.6 29.76-65.707 45.013-99.093-23.573-4.16-47.68-8.747-72-12.267-3.2-.427-8.747 3.947-10.56 7.467-7.36 14.186-13.653 28.8-20.267 43.306-4.16 9.174-3.306 16.427 6.4 22.187m124.587-104c28.16-24.32 55.147-47.573 83.093-71.787-20.053-13.866-40.32-28.266-61.226-41.813-2.774-1.813-10.027-.533-13.014 1.92-13.973 11.413-27.52 23.573-40.64 36.053-2.24 2.134-3.413 7.787-2.133 10.454 10.88 21.76 22.4 43.2 33.92 65.173m133.013-95.893c30.827-8.96 61.654-18.027 92.587-26.774 7.893-2.24 6.827-5.866 3.627-11.306-10.667-18.24-20.587-36.907-32-54.614-2.347-3.733-10.134-7.04-14.4-6.08-16.64 3.734-32.96 8.96-49.174 14.294-2.986.96-6.72 5.44-6.826 8.32-.534 24.96-.32 50.026-.32 75.093 5.013.853 5.866 1.28 6.506 1.067M131.04 473.067c-3.093-.64-4.373-1.28-5.44-.96-20.8 5.333-41.6 10.56-62.187 16.746-3.093.96-6.506 7.04-6.613 10.774-.32 18.453 0 36.906 1.28 55.253.32 3.84 5.013 9.6 8.64 10.56 21.013 5.547 42.453 9.92 64.213 14.827v-107.2zm479.893-320.96c-1.066-14.72-1.386-29.547-3.84-43.947-5.333-32 2.667-27.2-30.826-32.853-3.947-.64-7.894-1.387-11.84-2.027-28.16-4.267-28.374-4.267-39.894 21.333-7.786 17.28-14.613 34.88-21.76 51.947 36.587 5.227 71.68 10.133 108.267 15.36-.107-2.987.107-6.507-.107-9.813M777.227 172.8c.853-2.56-2.027-7.787-4.694-9.707-14.293-10.453-28.8-20.586-43.733-29.866-3.2-1.92-10.24-1.92-12.907.32-19.2 16.426-37.653 33.6-56.106 50.24 31.146 21.226 60.693 41.493 91.306 62.4 8.854-24.214 17.92-48.64 26.134-73.387M523.68 886.187c8.64 18.56 17.28 37.866 26.88 56.533 1.6 3.093 8 5.973 11.627 5.44 19.093-3.093 38.186-6.72 56.96-11.52 3.84-.96 8.32-7.467 8.853-11.947 1.707-13.44 1.813-27.093 2.347-40.746.213-6.934 0-13.867 0-20.48-36.48 7.786-70.72 15.04-106.667 22.72m261.653-68.16c-5.973-14.4-11.946-28.8-17.813-42.987-30.507 23.36-59.413 45.547-89.067 68.267C695.947 857.92 712.16 872 729.227 885.12c2.773 2.133 10.24 1.387 13.76-.853 11.733-7.254 22.826-15.574 33.813-23.894 19.307-14.4 19.2-14.506 10.24-36.586-.747-1.707-.96-3.84-1.707-5.76m-222.08-53.014c-60.693-1.92-117.226-19.093-165.226-56.533-76.48-59.733-104.427-141.44-90.774-235.2 11.84-81.813 60.8-141.12 133.974-176.96 58.666-28.8 121.813-34.347 184.213-10.56 48.64 18.56 75.2 56.64 55.893 113.6-12.266 36.053-37.973 61.333-69.013 81.493-36.48 23.787-75.52 40-120.213 36.907-43.52-3.093-63.36-35.307-46.72-75.733 3.2-7.787 7.893-14.934 11.946-22.294-22.506 20.8-40.853 44.8-46.933 76.054-5.013 26.346 9.92 53.333 34.347 62.613 23.36 8.96 47.573 12.267 72.32 9.28 80.213-9.707 149.546-42.667 207.573-98.987 64.107-62.186 62.827-162.346-4.48-218.346-58.667-48.747-126.72-76.374-203.52-78.294-86.827-2.24-166.613 19.734-235.413 74.88C212.96 301.867 169.76 372.587 154.72 458.987c-10.56 60.586-4.907 120.32 16.96 178.453 27.733 73.707 72.533 133.333 139.627 175.253 93.013 58.134 192.746 69.227 296.746 38.72 92.8-27.2 157.12-89.92 203.627-172.906 1.493-2.667 1.92-5.974 2.88-8.96-14.08 9.706-25.493 21.226-38.293 30.72-63.254 46.72-134.827 67.2-213.014 64.746m-100.48 118.08c-15.466-1.813-30.933-4.266-46.08-7.68-16.213-3.626-32.106-8.746-50.453-13.76 0 22.827-.213 43.84.32 64.854.107 2.773 3.733 7.253 6.613 8 19.307 5.12 38.72 9.706 58.24 13.546 3.2.64 9.067-1.706 10.667-4.48 9.6-16.106 18.24-32.64 27.2-49.066 3.84-7.147 2.347-10.347-6.507-11.414m-263.36-53.653c-1.173 2.667.747 8.427 3.094 10.453 15.253 13.014 31.04 25.6 46.933 37.867 2.453 1.92 7.787 3.2 9.707 1.813 18.453-13.226 36.373-26.986 54.4-40.533-29.334-23.787-56.96-46.187-86.614-70.187-9.28 20.16-18.773 40.214-27.52 60.587M93.173 675.52c-2.24 2.027-2.986 8.533-1.6 11.52 8.107 17.173 16.854 34.133 26.134 50.773 1.706 3.094 7.04 6.72 10.026 6.187 22.08-3.947 44.054-8.853 65.174-13.227l-49.174-98.026c-16.96 14.186-34.026 28.16-50.56 42.773\"/><path fill=\"#035DB6\" d=\"M975.947 338.347c-15.467-35.947-46.614-52.054-80.427-62.614-21.227-6.613-43.307-9.493-65.6-10.133a428 428 0 0 0-33.067.32c-9.813.427-19.84 1.493-29.76 3.947 5.334 1.28 42.987 11.733 59.414 20.266 1.173.64 2.24 1.174 3.413 1.814 21.653 12.266 34.987 30.826 35.84 57.28 1.067 33.92-13.973 61.76-33.813 87.466-.64.854-1.387 1.707-2.027 2.454-19.733 24.96-43.2 45.973-68.907 64.746-49.386 35.947-103.68 61.76-162.346 77.227-44.48 11.733-89.814 15.147-135.574 5.333-48.32-10.346-81.6-52.693-61.973-104.533 3.307-8.747 6.613-17.6 9.92-26.347-16.32 20.907-28.587 42.88-31.573 69.867-3.84 35.733 11.093 62.507 38.186 82.453 33.814 24.96 74.347 31.147 114.88 32.534 26.24.853 52.8-3.627 79.04-6.294 45.654-4.693 89.067-18.133 131.2-35.306 30.08-12.267 59.414-26.134 87.147-42.667 17.707-10.56 34.667-22.187 50.88-35.307 36.267-29.546 70.72-61.013 89.707-105.173 10.773-24.96 17.066-50.347 5.44-77.333\"/>","width":1024,"height":1024},"mail-line":{"body":"<path fill=\"currentColor\" d=\"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 4.238-7.928 7.1L4 7.216V19h16zM4.511 5l7.55 6.662L19.502 5z\"/>"},"menu-line":{"body":"<path fill=\"currentColor\" d=\"M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z\"/>"},"paint-fill":{"body":"<path fill=\"currentColor\" d=\"m19.228 18.732 1.767-1.767 1.768 1.767a2.5 2.5 0 1 1-3.535 0M8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.415l-8.485 8.485a1 1 0 0 1-1.414 0l-8.485-8.485a1 1 0 0 1 0-1.415l7.778-7.778-2.122-2.121zM11 6.03 3.929 13.1H18.07z\"/>"},"read":{"body":"<path fill=\"#FF0808\" d=\"M1024 512c0 282.778-229.222 512-512 512S0 794.778 0 512 229.222 0 512 0s512 229.222 512 512\"/><path fill=\"#FFF\" d=\"M408.576 448.192v-.448a419 419 0 0 0-.18-6.925v.282l-.012-1.088a77 77 0 0 1-.038-2.24 123 123 0 0 1 .32-7.719l-.128 1.716.192-2.688c1.177-13.99 4.992-31.335 10.79-49.23 9.587-27.545 26.112-57.266 52.275-79.18C506.867 271.296 557.312 256 607.655 256c5.734 0 11.02 2.854 13.887 7.488s2.88 10.342.026 14.976c-1.971 3.277-86.22 81.754 11.558 137.344 38.784 22.054 96.474 79.872 96.474 148.8 0 54.016-22.63 104.986-63.731 143.5C624.679 746.727 570.022 768 512 768c-57.792 0-112.46-21.58-153.907-60.749a206.6 206.6 0 0 1-46.554-64.691 186.9 186.9 0 0 1-17.139-77.952c0-52.326 26.291-110.349 62.9-119.411l.178 10.957c.09 3.443.256 6.784.487 10.15l.576 6.81c.333 3.443.768 6.976 1.28 10.713l1.152 7.783 1.408 8.499.806 4.595 1.818 9.958c1.638 8.832 4.198 18.855 7.68 30.183a25.6 25.6 0 0 0 48.947-15.027 228 228 0 0 1-6.298-24.512l-2.342-13.03-1.254-7.514-1.024-6.784a287 287 0 0 1-.436-3.175l-.69-6.016-.513-5.683a182 182 0 0 1-.153-2.394l-.218-4.966-.128-6.618z\"/>","width":1024,"height":1024},"search-line":{"body":"<path fill=\"currentColor\" d=\"m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7 3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z\"/>"},"stack-fill":{"body":"<path fill=\"currentColor\" d=\"m20.083 10.5 1.203.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35zm0 4.7 1.203.721a.5.5 0 0 1 0 .858l-8.772 5.262a1 1 0 0 1-1.028 0L2.715 16.78a.5.5 0 0 1 0-.858l1.202-.721L12 20.05zM12.515 1.309l8.77 5.262a.5.5 0 0 1 0 .858L12 12.999 2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0\"/>"},"tag":{"body":"<path fill=\"currentColor\" d=\"m10.904 2.1 9.9 1.414 1.414 9.9-9.192 9.192a1 1 0 0 1-1.415 0l-9.9-9.9a1 1 0 0 1 0-1.413zm2.829 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829\"/>"},"textCount":{"body":"<path fill=\"currentColor\" d=\"m13.289 6.213 4.939-3.842a1 1 0 0 1 1.32.083l2.995 2.994a1 1 0 0 1 .082 1.32l-3.84 4.939a7.505 7.505 0 0 1-7.283 9.292C8 20.999 3.5 19.497 1 17.997c3.98-3 3.047-4.81 3.5-6.5 1.058-3.95 4.842-6.258 8.789-5.284M16.7 8.092q.098.095.194.193L18.03 9.42l2.475-3.182-1.746-1.746-3.182 2.475z\"/>"},"time":{"body":"<path fill=\"currentColor\" d=\"M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2zM4 9v10h16V9zm2 2h2v2H6zm0 4h2v2H6zm4-4h8v2h-8zm0 4h5v2h-5z\"/>"},"url-line":{"body":"<path fill=\"currentColor\" d=\"m13.06 8.111 1.415 1.414a7 7 0 0 1 0 9.9l-.354.353a7 7 0 1 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415zm6.718 6.01-1.414-1.414a5 5 0 0 0-7.071-7.07l-.354.353a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 1 1 9.9 9.9\"/>"},"user-line":{"body":"<path fill=\"currentColor\" d=\"M4 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4\"/>"}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$8 = createAstro("https://blog.loli.life/");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "D:/soak/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer id="footer" class="py-8 text-center space-y-2 bg-base-100"> <div class="flex items-center justify-center gap-2 flex-wrap"> ${siteConfig.icp_license} ${siteConfig.police_license}</div> <p class="text-xs"> <span>©&nbsp;${(/* @__PURE__ */ new Date()).getFullYear()}&nbsp;</span> <a class="no-underline text-blue-600"${addAttribute(siteConfig.url, "href")}>${siteConfig.title}</a> <span>&nbsp;※&nbsp;采用&nbsp;</span> <a class="no-underline text-blue-600" href="https://zwy.life/soak-theme" target="_blank">Soak</a> <span> &nbsp;独立部署构建</span> </p> </footer>`;
}, "D:/soak/src/components/Footer/Footer.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a class="block" href="/"> ${siteConfig.logo ? renderTemplate`<div> <span class="sr-only">首页</span> <img class="h-10 w-auto"${addAttribute(siteConfig.logo, "src")} alt="logo"> </div>` : renderTemplate`<span class="logo-text font-serif text-2xl font-bold whitespace-nowrap inline-flex"> ${siteConfig.title} </span>`} </a>`;
}, "D:/soak/src/components/Header/Logo.astro", void 0);

const $$Astro$7 = createAstro("https://blog.loli.life/");
const $$MenuSubItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MenuSubItem;
  const { category } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="leading-normal relative group/two"> <button class="hover:bg-base-content/10 transition flex items-center justify-between gap-2 w-full px-4 py-2.5 text-left first-of-type:rounded-t-box last-of-type:rounded-b-box"> <span class="transition group-hover/two:translate-x-2">${category.label || category.name}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right-s-line", "class": "size-4 flex-none" })} </button> <div class="absolute pl-1 left-full top-0 opacity-0 invisible scale-90 leading-normal transition duration-200 origin-top-left group-hover/two:opacity-100 group-hover/two:visible group-hover/two:scale-100"> <div class="min-w-36 bg-base-100 border-base-300 border shadow-lg rounded-box"> ${category.children && category.children.map((subChild) => renderTemplate`<a${addAttribute(subChild.url || `/${subChild.slug}`, "href")} class="hover:bg-base-content/10 transition group/text flex items-center gap-2 w-full px-4 py-2.5 text-left first-of-type:rounded-t-box last-of-type:rounded-b-box"> <span class="transition group-hover/text:translate-x-2"> ${subChild.label || subChild.name} </span> </a>`)} </div> </div> </div>`;
}, "D:/soak/src/components/Header/Menu/MenuSubItem.astro", void 0);

const $$Astro$6 = createAstro("https://blog.loli.life/");
const $$MenuItemChildren = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MenuItemChildren;
  const { category } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group/one"> <div class="relative"> <button class="flex items-center gap-x-1"> <span>${category.label || category.name}</span> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-4 flex-none transition-all group-hover/one:rotate-180", "name": "arrow-down-s-line" })} </button> <div class="pt-1 absolute -left-2 opacity-0 invisible scale-90 transition duration-200 origin-top-left group-hover/one:opacity-100 group-hover/one:visible group-hover/one:scale-100"> <div data-nav-item class="bg-base-100 border-base-300 border min-w-40 shadow-lg rounded-box leading-normal"> ${category.children && category.children.map(
    (item) => item.children && item.children.length > 0 ? renderTemplate`${renderComponent($$result, "MenuSubItem", $$MenuSubItem, { "category": item })}` : renderTemplate`<a${addAttribute(item.url || `/${item.slug}`, "href")} class="group/text transition hover:bg-base-content/10 flex items-center gap-2 w-full px-4 py-2.5 text-left first-of-type:rounded-t-box last-of-type:rounded-b-box"> <span class="transition group-hover/text:translate-x-2"> ${item.label || item.name} </span> </a>`
  )} </div> </div> </div> </div>`;
}, "D:/soak/src/components/Header/Menu/MenuItemChildren.astro", void 0);

const navbarConfig = {
  navbar_style: "fixed",
  menu: [
    {
      // name为分类名称，在文章书写时，通过指定分类的name来实现文章分类
      name: "默认分类",
      // slug为标识符，如果不指定url参数，那么将使用slug拼凑最终url结果
      slug: "default",
      // label为导航栏上显示的名称
      label: "默认",
      // url为分类的url，指定了url，那么将使用url，最好配置一下，这样和自定义url不会冲突
      // 文章分类url风格均为 /category/分类名称
      url: "/category/default"
    },
    // 子分类配置方式：
    {
      name: "电子信息",
      label: "电子信息",
      slug: "information",
      children: [
        {
          name: "计算机",
          label: "📊计算机",
          slug: "computer",
          url: "/category/computer"
        }
      ]
    },
    // 其他页面配置：
    {
      name: "朋友圈",
      label: "朋友",
      slug: "friends",
      url: "/friends"
    }
  ]
};

const $$MenuItem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="hidden md:block h-14"> <div class="flex items-center gap-6 text-sm leading-14"> ${navbarConfig.menu.map(
    (category) => category.children && category.children.length > 0 ? renderTemplate`${renderComponent($$result, "MenuItemChildren", $$MenuItemChildren, { "category": category })}` : renderTemplate`<a${addAttribute(category.url || `/${category.slug}`, "href")} class="hover:text-blue-500"> ${category.label || category.name} </a>`
  )} </div> </nav>`;
}, "D:/soak/src/components/Header/Menu/MenuItem.astro", void 0);

var _tmpl$$7 = ["<button", ' class="btn btn-square btn-ghost"><svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg></button>'], _tmpl$2$2 = ["<dialog", "", ' class="modal"><div class="modal-box"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button><h3 class="text-lg font-serif mb-4">全站搜索</h3><label class="input w-full mb-4"><svg class="size-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg><input type="search" placeholder="输入搜索内容..." id="search"></label><!--$-->', "<!--/--></div></dialog>"], _tmpl$3 = ["<div", ' role="presentation" class="transition cursor-pointer first-of-type:mt-2 lg:first-of-type:mt-0 group block rounded-lg text-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"><div class="transition inline-flex font-bold font-serif group-hover:text-blue-600 dark:group-hover:text-blue-400">', '</div><div class="transition text-sm">', "</div></div>"];
const Search = () => {
  const [open, setOpen] = createSignal(false);
  const [isComposing, setIsComposing] = createSignal(false);
  const [searchResult, setSearchResult] = createSignal([]);
  return [ssr(_tmpl$$7, ssrHydrationKey()), createComponent$1(Portal, {
    get mount() {
      return document.body;
    },
    get children() {
      return ssr(_tmpl$2$2, ssrHydrationKey(), ssrAttribute("open", open(), true), searchResult().length > 0 && escape(searchResult().map((item) => ssr(_tmpl$3, ssrHydrationKey(), escape(item.meta.title), item.excerpt))));
    }
  })];
};

const $$Theme = createComponent(($$result, $$props, $$slots) => {
  let themes = ["light", "dark"];
  let themesName = ["\u6D45\u8272\u6A21\u5F0F", "\u6697\u9ED1\u6A21\u5F0F"];
  return renderTemplate`${maybeRenderHead()}<div class="dropdown dropdown-end"> <div tabindex="0" role="button" class="btn btn-ghost btn-square"> ${renderComponent($$result, "Icon", $$Icon, { "name": "brush-ai-line", "class": "size-5" })} </div> <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm space-y-2"> ${themes.map((theme, idx) => renderTemplate`<li> <button class="btn flex items-center gap-x-1"${addAttribute(theme, "data-set-theme")}> <div${addAttribute(theme, "data-theme")} class="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-box p-1 shadow-sm"> <div class="bg-base-content size-1.5 rounded-full"></div> <div class="bg-primary size-1.5 rounded-full"></div> <div class="bg-secondary size-1.5 rounded-full"></div> <div class="bg-accent size-1.5 rounded-full"></div> </div> <div class="w-30 truncate">${themesName[idx]}</div> </button> </li>`)} </ul> </div>`;
}, "D:/soak/src/components/Header/Theme.astro", void 0);

const sidebarConfig = {
  sidebar_position: "right",
  sidebar_view_on_article_list: false,
  profile_background: "/images/bg.jpg",
  mobile_top_image: "/images/bg.jpg",
  mobile_top_image_height: "10rem",
  mobile_profile_nickname: "Cat",
  mobile_profile_image: "/images/avatar.svg",
  mobile_profile_signature: "故梦待续 | 结局无期",
  recent_article_style: "simple"
};

const $$MobileSidebar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="drawer lg:hidden me-4 w-auto"> <input id="my-drawer" type="checkbox" class="drawer-toggle"> <div class="drawer-content"> <label for="my-drawer" class="btn btn-ghost btn-square drawer-button"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-5", "name": "menu-line" })} </label> </div> <div class="drawer-side"> <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label> <div class="menu bg-base-100 text-base-content min-h-full w-4/5 p-4"> <div class="mb-4 rounded-box overflow-hidden bg-cover bg-center object-cover"${addAttribute(`height:${sidebarConfig.mobile_top_image_height};background-image:url(${sidebarConfig.mobile_top_image})`, "style")}></div> <div class="mb-4 p-4 rounded-box flex items-center"> <img${addAttribute(sidebarConfig.mobile_profile_image, "src")} alt="头像" class="size-12"> <div class="ms-4"> <h1 class="text-lg font-bold font-serif">${sidebarConfig.mobile_profile_nickname}</h1> <p class="mt-1 line-clamp-2">${sidebarConfig.mobile_profile_signature}</p> </div> </div> <ul> ${navbarConfig.menu.map((item) => {
    const renderItems = (categories) => categories.map((category) => renderTemplate`<li> ${category.children && category.children.length > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <details open> <summary>${category.name}</summary> <ul> ${renderItems(category.children)} </ul> </details> ` })}` : renderTemplate`<a${addAttribute(category.url, "href")}>${category.name}</a>`} </li>`);
    return renderItems([item]);
  })} </ul> </div> </div> </div>`;
}, "D:/soak/src/components/Header/MobileSidebar.astro", void 0);

const homeConfig = {
  title: "Life",
  subtitle: "故梦待续 | 结局无期",
  top_image: "/images/covers/Cuteen.png",
  top_image_height: "40rem",
  article_list_style: "blur",
  article_list_page_size: 8,
  article_list_load_type: "ajax"
};

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "<header", ' id="navbar"', "", "", '> <div class="navbar-start w-auto"> ', " ", ' <div class="navbar-center ms-10 hidden lg:flex"> ', ' </div> </div> <div class="navbar-end gap-x-1 leading-14 w-auto"> ', " ", ' </div> </header> <script>\n    (function () {\n        let lastScrollY = window.scrollY;\n        let isTop = true;\n        let hidden = true;\n\n        function updateHeaderState() {\n            const header = document.getElementById("navbar");\n            const heroBox = document.querySelector("[data-hero-box]");\n            if (!header) return;\n\n            const currentScrollY = window.scrollY;\n\n            // \u5904\u7406\u5BFC\u822A\u680F\u663E\u9690\n            if (header.dataset.hideNavbarOnScroll === "1") {\n                hidden = currentScrollY <= lastScrollY;\n\n                // \u663E\u5F0F\u8BBE\u7F6E\u5C5E\u6027\u503C\n                if (hidden) {\n                    header.setAttribute("data-pinned", "true");\n                    header.removeAttribute("data-unpinned");\n                } else {\n                    header.setAttribute("data-unpinned", "true");\n                    header.removeAttribute("data-pinned");\n                }\n            }\n\n            // \u5904\u7406\u9876\u90E8\u72B6\u6001\n            if (heroBox && heroBox.clientHeight) {\n                isTop =\n                    currentScrollY <=\n                    heroBox.clientHeight - header.clientHeight;\n            } else {\n                isTop = currentScrollY <= header.clientHeight;\n            }\n            if (isTop) {\n                header.setAttribute("data-is-top", "true");\n            } else {\n                header.setAttribute("data-is-top", "false");\n            }\n\n            lastScrollY = currentScrollY;\n        }\n\n        // \u521D\u59CB\u5316\u903B\u8F91\u4FDD\u6301\u4E0D\u53D8\n        document.addEventListener("DOMContentLoaded", () => {\n            window.addEventListener("scroll", updateHeaderState);\n            updateHeaderState();\n        });\n    })();\n<\/script>'])), maybeRenderHead(), addAttribute("true" , "data-have-img"), addAttribute("1" , "data-hide-navbar-on-scroll"), addAttribute([
    "navbar justify-between bg-base-100 h-14 min-h-14 px-4 sm:px-6 lg:px-12 z-30 py-0 top-0 left-0 right-0",
    "fixed",
    navbarConfig.navbar_style === "static"
  ], "class:list"), addAttribute(createTransitionScope($$result, "y6nrcfoz"), "data-astro-transition-persist"), renderComponent($$result, "MobileSidebar", $$MobileSidebar, {}), renderComponent($$result, "Logo", $$Logo, {}), renderComponent($$result, "MenuItem", $$MenuItem, {}), renderComponent($$result, "Search", Search, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/Header/Search.tsx", "client:component-export": "default" }), renderComponent($$result, "Theme", $$Theme, {}));
}, "D:/soak/src/components/Header/Header.astro", "self");

const isFunction = (valOrFunction) => typeof valOrFunction === 'function';
const resolveValue = (valOrFunction, arg) => isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction;

var ActionType;
(function (ActionType) {
    ActionType[ActionType["ADD_TOAST"] = 0] = "ADD_TOAST";
    ActionType[ActionType["UPDATE_TOAST"] = 1] = "UPDATE_TOAST";
    ActionType[ActionType["UPSERT_TOAST"] = 2] = "UPSERT_TOAST";
    ActionType[ActionType["DISMISS_TOAST"] = 3] = "DISMISS_TOAST";
    ActionType[ActionType["REMOVE_TOAST"] = 4] = "REMOVE_TOAST";
    ActionType[ActionType["START_PAUSE"] = 5] = "START_PAUSE";
    ActionType[ActionType["END_PAUSE"] = 6] = "END_PAUSE";
})(ActionType || (ActionType = {}));

const [store, setStore] = createStore({
    toasts: [],
    pausedAt: undefined,
});
const createTimers = () => {
    const { pausedAt, toasts } = store;
    if (pausedAt)
        return;
    const now = Date.now();
    const timers = toasts.map((toast) => {
        if (toast.duration === Infinity)
            return;
        const durationLeft = (toast.duration || 0) + toast.pauseDuration - (now - toast.createdAt);
        if (durationLeft <= 0) {
            if (toast.visible) {
                dispatch({
                    type: ActionType.DISMISS_TOAST,
                    toastId: toast.id,
                });
            }
            return;
        }
        return setTimeout(() => {
            dispatch({
                type: ActionType.DISMISS_TOAST,
                toastId: toast.id,
            });
        }, durationLeft);
    });
    return timers;
};
const removalQueue = new Map();
const scheduleRemoval = (toastId, unmountDelay) => {
    if (removalQueue.has(toastId))
        return;
    const timeout = setTimeout(() => {
        removalQueue.delete(toastId);
        dispatch({
            type: ActionType.REMOVE_TOAST,
            toastId,
        });
    }, unmountDelay);
    removalQueue.set(toastId, timeout);
};
const unscheduleRemoval = (toastId) => {
    const timeout = removalQueue.get(toastId);
    removalQueue.delete(toastId);
    if (timeout)
        clearTimeout(timeout);
};
const dispatch = (action) => {
    switch (action.type) {
        case ActionType.ADD_TOAST:
            setStore('toasts', (t) => {
                const toasts = t;
                return [action.toast, ...toasts];
            });
            break;
        case ActionType.DISMISS_TOAST:
            const { toastId } = action;
            const toasts = store.toasts;
            if (toastId) {
                const toastToRemove = toasts.find((t) => t.id === toastId);
                if (toastToRemove)
                    scheduleRemoval(toastId, toastToRemove.unmountDelay);
                setStore('toasts', (t) => t.id === toastId, produce((t) => (t.visible = false)));
            }
            else {
                toasts.forEach((t) => {
                    scheduleRemoval(t.id, t.unmountDelay);
                });
                setStore('toasts', (t) => t.id !== undefined, produce((t) => (t.visible = false)));
            }
            break;
        case ActionType.REMOVE_TOAST:
            if (!action.toastId) {
                setStore('toasts', []);
                break;
            }
            setStore('toasts', (t) => {
                const toasts = t;
                return toasts.filter((t) => t.id !== action.toastId);
            });
            break;
        case ActionType.UPDATE_TOAST:
            if (action.toast.id) {
                unscheduleRemoval(action.toast.id);
            }
            setStore('toasts', (t) => t.id === action.toast.id, (t) => {
                const toast = t;
                return {
                    ...toast,
                    ...action.toast,
                };
            });
            break;
        case ActionType.UPSERT_TOAST:
            store.toasts.find((t) => t.id === action.toast.id)
                ? dispatch({ type: ActionType.UPDATE_TOAST, toast: action.toast })
                : dispatch({ type: ActionType.ADD_TOAST, toast: action.toast });
            break;
        case ActionType.START_PAUSE:
            setStore(produce((s) => {
                s.pausedAt = Date.now();
                s.toasts.forEach((t) => {
                    t.paused = true;
                });
            }));
            break;
        case ActionType.END_PAUSE:
            const pauseInterval = action.time - (store.pausedAt || 0);
            setStore(produce((s) => {
                s.pausedAt = undefined;
                s.toasts.forEach((t) => {
                    t.pauseDuration += pauseInterval;
                    t.paused = false;
                });
            }));
            break;
    }
};

const defaultTimeouts = {
    blank: 4000,
    error: 4000,
    success: 2000,
    loading: Infinity,
    custom: 4000,
};
const defaultToastOptions = {
    id: '',
    icon: '',
    unmountDelay: 500,
    duration: 3000,
    ariaProps: {
        role: 'status',
        'aria-live': 'polite',
    },
    className: '',
    style: {},
    position: 'top-right',
    iconTheme: {},
};
const defaultToasterOptions = {
    position: 'top-right',
    toastOptions: defaultToastOptions,
    gutter: 8,
    containerStyle: {},
    containerClassName: '',
};
const defaultContainerPadding = '16px';
const defaultContainerStyle = {
    position: 'fixed',
    'z-index': 9999,
    top: defaultContainerPadding,
    bottom: defaultContainerPadding,
    left: defaultContainerPadding,
    right: defaultContainerPadding,
    'pointer-events': 'none',
};

const generateID = (() => {
    let count = 0;
    return () => String(++count);
})();
const mergeContainerOptions = (props) => {
    setDefaultOpts((s) => ({
        containerClassName: props.containerClassName ?? s.containerClassName,
        containerStyle: props.containerStyle ?? s.containerStyle,
        gutter: props.gutter ?? s.gutter,
        position: props.position ?? s.position,
        toastOptions: {
            ...props.toastOptions,
        },
    }));
};
const getToastWrapperStyles = (position, offset) => {
    const top = position.includes('top');
    const verticalStyle = top
        ? { top: 0, 'margin-top': `${offset}px` }
        : { bottom: 0, 'margin-bottom': `${offset}px` };
    const horizontalStyle = position.includes('center')
        ? { 'justify-content': 'center' }
        : position.includes('right')
            ? { 'justify-content': 'flex-end' }
            : {};
    return {
        left: 0,
        right: 0,
        display: 'flex',
        position: 'absolute',
        transition: `all 230ms cubic-bezier(.21,1.02,.73,1)`,
        ...verticalStyle,
        ...horizontalStyle,
    };
};
const getWrapperYAxisOffset = (toast, position) => {
    const { toasts } = store;
    const gutter = defaultOpts().gutter || defaultToasterOptions.gutter || 8;
    const relevantToasts = toasts.filter((t) => (t.position || position) === position && t.height);
    const toastIndex = relevantToasts.findIndex((t) => t.id === toast.id);
    const toastsBefore = relevantToasts.filter((toast, i) => i < toastIndex && toast.visible).length;
    const offset = relevantToasts.slice(0, toastsBefore).reduce((acc, t) => acc + gutter + (t.height || 0), 0);
    return offset;
};

const toastBarBase = {
    display: 'flex',
    'align-items': 'center',
    color: '#363636',
    background: 'white',
    'box-shadow': '0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05)',
    'max-width': '350px',
    'pointer-events': 'auto',
    padding: '8px 10px',
    'border-radius': '4px',
    'line-height': '1.3',
    'will-change': 'transform',
};
const messageContainer = {
    display: 'flex',
    'align-items': 'center',
    flex: '1 1 auto',
    margin: '4px 10px',
    'white-space': 'pre-line',
};
const iconContainer = {
    'flex-shrink': 0,
    'min-width': '20px',
    'min-height': '20px',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'text-align': 'center',
};
const genSVGCubicBezier = (keySplines) => ({
    calcMode: 'spline',
    keyTimes: '0; 1',
    keySplines: keySplines,
});

const [defaultOpts, setDefaultOpts] = createSignal(defaultToasterOptions);
const createToast = (message, type = 'blank', options) => ({
    ...defaultToastOptions,
    ...defaultOpts().toastOptions,
    ...options,
    type,
    message,
    pauseDuration: 0,
    createdAt: Date.now(),
    visible: true,
    id: options.id || generateID(),
    paused: false,
    style: {
        ...defaultToastOptions.style,
        ...defaultOpts().toastOptions?.style,
        ...options.style,
    },
    duration: options.duration || defaultOpts().toastOptions?.duration || defaultTimeouts[type],
    position: options.position || defaultOpts().toastOptions?.position || defaultOpts().position || defaultToastOptions.position,
});
const createToastCreator = (type) => (message, options = {}) => {
    return createRoot(() => {
        const existingToast = store.toasts.find((t) => t.id === options.id);
        const toast = createToast(message, type, { ...existingToast, duration: undefined, ...options });
        dispatch({ type: ActionType.UPSERT_TOAST, toast });
        return toast.id;
    });
};
const toast = (message, opts) => createToastCreator('blank')(message, opts);
untrack(() => toast);
toast.error = createToastCreator('error');
toast.success = createToastCreator('success');
toast.loading = createToastCreator('loading');
toast.custom = createToastCreator('custom');
toast.dismiss = (toastId) => {
    dispatch({
        type: ActionType.DISMISS_TOAST,
        toastId,
    });
};
toast.promise = (promise, msgs, opts) => {
    const id = toast.loading(msgs.loading, { ...opts });
    promise
        .then((p) => {
        toast.success(resolveValue(msgs.success, p), {
            id,
            ...opts,
        });
        return p;
    })
        .catch((e) => {
        toast.error(resolveValue(msgs.error, e), {
            id,
            ...opts,
        });
    });
    return promise;
};
toast.remove = (toastId) => {
    dispatch({
        type: ActionType.REMOVE_TOAST,
        toastId,
    });
};

var _tmpl$$6 = ["<div", ' style="', '"', "><style>.sldt-active{z-index:9999;}.sldt-active>*{pointer-events:auto;}</style><!--$-->", "<!--/--></div>"];
const Toaster = (props) => {
  createEffect(() => {
    mergeContainerOptions(props);
  });
  createEffect(() => {
    const timers = createTimers();
    onCleanup(() => {
      if (!timers) return;
      timers.forEach((timer) => timer && clearTimeout(timer));
    });
  });
  return ssr(_tmpl$$6, ssrHydrationKey(), ssrStyle({
    ...defaultContainerStyle,
    ...props.containerStyle
  }), ssrAttribute("class", escape(props.containerClassName, true), false), escape(createComponent$1(For, {
    get each() {
      return store.toasts;
    },
    children: (toast) => createComponent$1(ToastContainer, {
      toast
    })
  })));
};

var _tmpl$$5 = ["<div", ' style="', '">', "</div>"], _tmpl$2$1 = ["<div", ' style="', '"><!--$-->', "<!--/-->", "</div>"];
const ToastBar = (props) => {
  createEffect(() => {
    return;
  });
  return ssr(_tmpl$2$1, ssrHydrationKey() + ssrAttribute("class", escape(props.toast.className, true), false), ssrStyle({
    ...toastBarBase,
    ...props.toast.style
  }), escape(createComponent$1(Switch, {
    get children() {
      return [createComponent$1(Match, {
        get when() {
          return props.toast.icon;
        },
        get children() {
          return ssr(_tmpl$$5, ssrHydrationKey(), ssrStyle(iconContainer), escape(props.toast.icon));
        }
      }), createComponent$1(Match, {
        get when() {
          return props.toast.type === "loading";
        },
        get children() {
          return ssr(_tmpl$$5, ssrHydrationKey(), ssrStyle(iconContainer), escape(createComponent$1(Loader, mergeProps(() => props.toast.iconTheme))));
        }
      }), createComponent$1(Match, {
        get when() {
          return props.toast.type === "success";
        },
        get children() {
          return ssr(_tmpl$$5, ssrHydrationKey(), ssrStyle(iconContainer), escape(createComponent$1(Success, mergeProps(() => props.toast.iconTheme))));
        }
      }), createComponent$1(Match, {
        get when() {
          return props.toast.type === "error";
        },
        get children() {
          return ssr(_tmpl$$5, ssrHydrationKey(), ssrStyle(iconContainer), escape(createComponent$1(Error$1, mergeProps(() => props.toast.iconTheme))));
        }
      })];
    }
  })), ssrElement("div", mergeProps({
    style: messageContainer
  }, () => props.toast.ariaProps), () => escape(resolveValue(props.toast.message, props.toast)), false));
};

var _tmpl$$4 = ["<div", ' style="', '"', ">", "</div>"];
const ToastContainer = (props) => {
  const calculatePosition = () => {
    const position = props.toast.position || defaultToastOptions.position;
    const offset = getWrapperYAxisOffset(props.toast, position);
    const positionStyle2 = getToastWrapperStyles(position, offset);
    return positionStyle2;
  };
  const positionStyle = createMemo(() => calculatePosition());
  onMount(() => {
  });
  return ssr(_tmpl$$4, ssrHydrationKey(), ssrStyle(positionStyle()), ssrAttribute("class", props.toast.visible ? "sldt-active" : "", false), props.toast.type === "custom" ? escape(resolveValue(props.toast.message, props.toast)) : escape(createComponent$1(ToastBar, {
    get toast() {
      return props.toast;
    },
    get position() {
      return props.toast.position || defaultToastOptions.position;
    }
  })));
};

var _tmpl$$3 = ["<circle", ' cx="16" cy="16" r="0">', "", "</circle>"], _tmpl$2 = ["<circle", ' cx="16" cy="16" r="12" opacity="0">', "", "</circle>"];
const MainCircle = (props) => {
  const publicProps = {
    dur: "0.35s",
    begin: "100ms",
    fill: "freeze",
    calcMode: "spline",
    keyTimes: "0; 0.6; 1",
    keySplines: "0.25 0.71 0.4 0.88; .59 .22 .87 .63"
  };
  return ssr(_tmpl$$3, ssrHydrationKey() + ssrAttribute("fill", escape(props.fill, true), false), ssrElement("animate", mergeProps({
    attributeName: "opacity",
    values: "0; 1; 1"
  }, publicProps), void 0, false), ssrElement("animate", mergeProps({
    attributeName: "r",
    values: "0; 17.5; 16"
  }, publicProps), void 0, false));
};
const SecondaryCircle = (props) => {
  const publicProps = {
    dur: "1s",
    begin: props.begin || "320ms",
    fill: "freeze",
    ...genSVGCubicBezier("0.0 0.0 0.2 1")
  };
  return ssr(_tmpl$2, ssrHydrationKey() + ssrAttribute("fill", escape(props.fill, true), false), ssrElement("animate", mergeProps({
    attributeName: "opacity",
    values: "1; 0"
  }, publicProps), void 0, false), ssrElement("animate", mergeProps({
    attributeName: "r",
    values: "12; 26"
  }, publicProps), void 0, false));
};

var _tmpl$$2 = ["<svg", ' style="', '" viewBox="0 0 32 32" width="1.25rem" height="1.25rem"><!--$-->', "<!--/--><!--$-->", '<!--/--><path fill="none"', ' stroke-width="4" stroke-dasharray="22" stroke-dashoffset="22" stroke-linecap="round" stroke-miterlimit="10" d="M9.8,17.2l3.8,3.6c0.1,0.1,0.3,0.1,0.4,0l9.6-9.7">', "</path></svg>"];
const Success = (props) => {
  const fill = props.primary || "#34C759";
  return ssr(_tmpl$$2, ssrHydrationKey(), ssrStyleProperty("overflow:", "visible"), escape(createComponent$1(MainCircle, {
    fill
  })), escape(createComponent$1(SecondaryCircle, {
    fill,
    begin: "350ms"
  })), ssrAttribute("stroke", escape(props.secondary || "#FCFCFC", true), false), ssrElement("animate", mergeProps({
    attributeName: "stroke-dashoffset",
    values: "22;0",
    dur: "0.25s",
    begin: "250ms",
    fill: "freeze"
  }, () => genSVGCubicBezier("0.0, 0.0, 0.58, 1.0")), void 0, false));
};

var _tmpl$$1 = ["<svg", ' style="', '" viewBox="0 0 32 32" width="1.25rem" height="1.25rem"><!--$-->', "<!--/--><!--$-->", '<!--/--><path fill="none"', ' stroke-width="4" stroke-dasharray="9" stroke-dashoffset="9" stroke-linecap="round" d="M16,7l0,9">', "</path><circle", ' cx="16" cy="23" r="2.5" opacity="0">', "</circle></svg>"];
const Error$1 = (props) => {
  const fill = props.primary || "#FF3B30";
  return ssr(_tmpl$$1, ssrHydrationKey(), ssrStyleProperty("overflow:", "visible"), escape(createComponent$1(MainCircle, {
    fill
  })), escape(createComponent$1(SecondaryCircle, {
    fill
  })), ssrAttribute("stroke", escape(props.secondary || "#FFFFFF", true), false), ssrElement("animate", mergeProps({
    attributeName: "stroke-dashoffset",
    values: "9;0",
    dur: "0.2s",
    begin: "250ms",
    fill: "freeze"
  }, () => genSVGCubicBezier("0.0, 0.0, 0.58, 1.0")), void 0, false), ssrAttribute("fill", escape(props.secondary || "#FFFFFF", true), false), ssrElement("animate", mergeProps({
    attributeName: "opacity",
    values: "0;1",
    dur: "0.25s",
    begin: "350ms",
    fill: "freeze"
  }, () => genSVGCubicBezier("0.0, 0.0, 0.58, 1.0")), void 0, false));
};

var _tmpl$ = ["<svg", ' style="', '" viewBox="0 0 32 32" width="1.25rem" height="1.25rem"><path fill="none"', ' stroke-width="4" stroke-miterlimit="10" d="M16,6c3,0,5.7,1.3,7.5,3.4c1.5,1.8,2.5,4,2.5,6.6c0,5.5-4.5,10-10,10S6,21.6,6,16S10.5,6,16,6z"></path><path fill="none"', ' stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" d="M16,6c3,0,5.7,1.3,7.5,3.4c0.6,0.7,1.1,1.4,1.5,2.2"><animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.75s" repeatCount="indefinite"></animateTransform></path></svg>'];
const Loader = (props) => ssr(_tmpl$, ssrHydrationKey(), ssrStyleProperty("overflow:", "visible"), ssrAttribute("stroke", escape(props.primary || "#E5E7EB", true), false), ssrAttribute("stroke", escape(props.secondary || "#4b5563", true), false));

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$PageFind = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>(function(){", '\n    (async function findInit() {\n        const pageFind = await import(scriptUrl);\n        await pageFind.options({\n            excerptLength: 20,\n        });\n        pageFind.init();\n        window.pagefind = pageFind;\n        pageFind.search(""); // speed up the first search\n    })();\n})();<\/script>'])), defineScriptVars({ scriptUrl: "/pagefind/pagefind.js" }));
}, "D:/soak/src/components/Function/PageFind.astro", void 0);

const $$BackToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="back-to-top" class="fixed right-6 bottom-6 w-10 h-10 btn btn-square opacity-100 invisible transition-all"> <div role="button" class="flex justify-center items-center w-full h-full"> <button onclick="window.scrollTo({ top: 0, behavior: 'smooth' });" class="cursor-pointer"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-6", "name": "circle-arrow-up-s-line" })} </button> </div> </div>`;
}, "D:/soak/src/components/Function/BackToTop.astro", void 0);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position",
  "background"
];

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BE0alpsC.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://blog.loli.life/", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames,
  liveCollections
}) {
  return async function getEntry(collectionOrLookupObject, lookup) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!lookup)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = lookup;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
      });
    }
    if (typeof lookupId === "object") {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `The entry identifier must be a string. Received object.`
      });
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      if (entry2.legacyId) {
        return emulateLegacyEntry({ ...entry2, collection });
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_BPi2ipgu.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape$1(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_3ithnFco.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: isRemotePath(link) ? link : prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
	liveCollections,
});

const getCategoryNames = (categories) => {
  let names = [];
  categories.forEach((category) => {
    if (category.children) {
      names = names.concat(getCategoryNames(category.children));
    } else {
      names.push(category.name);
    }
  });
  names = [...new Set(names)];
  return names;
};
getCategoryNames(navbarConfig.menu);
function formatDateToYYYYMMDD(date) {
  return format(date, "yyyy年MM月dd日");
}
function formatRelativeTime(date) {
  const now = /* @__PURE__ */ new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1e3);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);
  if (years > 0) return `${years} 年前`;
  if (months > 0) return `${months} 月前`;
  if (weeks > 0) return `${weeks} 周前`;
  if (days > 0) return `${days} 天前`;
  if (hours > 0) return `${hours} 小时前`;
  if (minutes > 0) return `${minutes} 分钟前`;
  return "刚刚";
}
function formatDate(date, style = "absolute") {
  return style === "relative" ? formatRelativeTime(date) : formatDateToYYYYMMDD(date);
}
async function getSortedPosts() {
  const allBlogPosts = await getAllPosts();
  return allBlogPosts.sort((a, b) => {
    const dateA = new Date(a.data.created);
    const dateB = new Date(b.data.created);
    return dateA > dateB ? -1 : 1;
  });
}
const getPostTotalWords = async (posts) => {
  let count = 0;
  for (const post of posts) {
    if (post) {
      const { words } = word_count(post);
      count += words;
    }
  }
  return count;
};
function findCategorySlugByName(categories, name) {
  for (const category of categories) {
    if (category.name === name) {
      return category.slug;
    }
    if (category.children) {
      const result = findCategorySlugByName(category.children, name);
      if (result) {
        return result;
      }
    }
  }
  return null;
}
function findCategoryImageByName(categories, name) {
  for (const category of categories) {
    if (category.name === name) {
      return category.image;
    }
    if (category.children) {
      const result = findCategoryImageByName(category.children, name);
      if (result) {
        return result;
      }
    }
  }
  return void 0;
}
function getRandomImage() {
  const imageList = readdirSync(
    join(process.cwd(), "public/images/covers")
  ).filter((file) => {
    return file.endsWith(".jpg") || file.endsWith(".png") || file.endsWith(".jpeg") || file.endsWith(".webp") || file.endsWith(".avif");
  });
  const randomIndex = Math.floor(Math.random() * imageList.length);
  const fileName = imageList[randomIndex];
  return `/images/covers/${fileName}`;
}
function getBlurImage(url) {
  if (url) {
    return url;
  } else {
    return getRandomImage();
  }
}
async function getAllPosts() {
  return await getCollection("posts", ({ data }) => {
    return data.draft !== true ;
  });
}
async function getPostCount() {
  const allBlogPosts = await getAllPosts();
  return format_number(allBlogPosts.length);
}
async function getTagCount() {
  const allBlogPosts = await getAllPosts();
  const tags = allBlogPosts.map((post) => post.data.tags).flat();
  return format_number(new Set(tags).size);
}
async function getWordCount() {
  const allBlogPosts = await getAllPosts();
  const posts = allBlogPosts.map((post) => post.body).flat();
  return format_number(await getPostTotalWords(posts));
}
async function getRecentPosts() {
  const allPosts = await getSortedPosts();
  return allPosts.slice(0, 5);
}
function checkFileExists(filePath) {
  const fullPath = join(process.cwd(), filePath);
  return existsSync(fullPath);
}
function hasCustomStyle() {
  return checkFileExists("public/assets/style.css");
}
async function loadHookComponent(componentName) {
  try {
    const hookPath = `/hooks/${componentName}.astro`;
    const hookModules = /* #__PURE__ */ Object.assign({});
    if (hookModules[hookPath]) {
      const mod = await hookModules[hookPath]();
      return mod.default;
    }
    return null;
  } catch (error) {
    console.warn(`Failed to load hook component: ${componentName}`, error);
    return null;
  }
}
function format_number(num) {
  if (num >= 1e4) {
    const formatted = (num / 1e4).toFixed(1);
    return formatted.endsWith(".0") ? formatted.slice(0, -2) + "W" : formatted + "W";
  } else if (num >= 1e3) {
    const formatted = (num / 1e3).toFixed(1);
    return formatted.endsWith(".0") ? formatted.slice(0, -2) + "K" : formatted + "K";
  } else {
    return num.toString();
  }
}
function get_article_summary(content) {
  let text = content.replace(/```[\s\S]*?```/g, "").replace(/`[^`]*`/g, "").replace(/^#{1,6}\s+.*$/gm, "").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\*\*([^*]*)\*\*/g, "$1").replace(/\*([^*]*)\*/g, "$1").replace(/__([^_]*)__/g, "$1").replace(/_([^_]*)_/g, "$1").replace(/~~([^~]*)~~/g, "$1").replace(/^>\s+/gm, "").replace(/^[\s]*[-*+]\s+/gm, "").replace(/^[\s]*\d+\.\s+/gm, "").replace(/^[-*_]{3,}$/gm, "").replace(/<[^>]*>/g, "").replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
  if (text.length > 180) {
    return text.substring(0, 180) + "...";
  }
  return text;
}
function word_count(markdown) {
  let text = markdown.replace(/```[\s\S]*?```/g, "").replace(/`[^`]*`/g, "");
  const characters = text.replace(/[\s\n\r]/g, "").length;
  const chineseChars = (text.match(/[\u4e00-\u9fff]/g) || []).length;
  const englishWords = text.replace(/[\u4e00-\u9fff]/g, " ").match(/\b[a-zA-Z]+\b/g);
  const englishWordCount = englishWords ? englishWords.length : 0;
  const words = chineseChars + englishWordCount;
  const paragraphs = text.split(/\n\s*\n/).filter((paragraph) => paragraph.trim().length > 0).length;
  return {
    characters,
    words,
    paragraphs
  };
}

const $$InitApp = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "D:/soak/src/components/Function/InitApp.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/soak/src/components/Function/InitApp.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro("https://blog.loli.life/");
const $$DefaultLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$DefaultLayout;
  let { title, description } = Astro2.props;
  const siteLang = siteConfig.lang.replace("_", "-");
  let pageTitle;
  if (title) {
    pageTitle = `${title} - ${siteConfig.title}`;
  } else {
    pageTitle = `${siteConfig.title} - ${siteConfig.subtitle}`;
  }
  const HeaderExtensionComponent = await loadHookComponent("HeaderExtension");
  const FooterExtensionComponent = await loadHookComponent("FooterExtension");
  const favicon = siteConfig.favicon;
  const customStyleExists = hasCustomStyle();
  return renderTemplate(_a || (_a = __template(["<html", ' class="overflow-y-scroll"> <head><meta charset="UTF-8"><title>', '</title><meta name="description"', '><meta name="author"', '><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no"><meta name="generator"', '><script>\n            const theme = localStorage.getItem("theme");\n            document.documentElement.setAttribute(\n                "data-theme",\n                theme || "light",\n            );\n        <\/script><link rel="icon" type="image/png"', '><link rel="apple-touch-icon-precomposed"', '><link href="/fonts/SourceHanSerifCN-Bold/font.css" rel="stylesheet"><link href="/fonts/OPlusSans3-Regular/font.css" rel="stylesheet">', "", "", '</head> <body> <div class="bg-base-300/60"> ', " ", ' <main id="pjax-container"', "> ", " </main> ", " </div> ", " ", " ", " ", " ", " </body></html>"])), addAttribute(siteLang, "lang"), pageTitle, addAttribute(description, "content"), addAttribute(siteConfig.author.username, "content"), addAttribute(Astro2.generator, "content"), addAttribute(favicon, "href"), addAttribute(favicon, "href"), customStyleExists && renderTemplate`<link href="/assets/style.css" rel="stylesheet">`, HeaderExtensionComponent && renderTemplate`${renderComponent($$result, "HeaderExtensionComponent", HeaderExtensionComponent, {})}`, renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["hero"]), addAttribute([
    "pb-12 sm:pt-8 pt-4",
    { "mt-14": false }
  ], "class:list"), renderSlot($$result, $$slots["main"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "BackToTop", $$BackToTop, {}), renderComponent($$result, "PageFind", $$PageFind, {}), renderComponent($$result, "Toaster", Toaster, { "position": "top-center", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "solid-toast", "client:component-export": "Toaster" }), renderComponent($$result, "InitApp", $$InitApp, {}), FooterExtensionComponent && renderTemplate`${renderComponent($$result, "FooterExtensionComponent", FooterExtensionComponent, {})}`);
}, "D:/soak/src/layouts/DefaultLayout.astro", void 0);

const $$Astro$4 = createAstro("https://blog.loli.life/");
const $$HomeHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HomeHero;
  const { ctx } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-hero-box${addAttribute(`height:${homeConfig.top_image_height};background-image:url(${ctx?.thumbnail?.src || homeConfig.top_image})`, "style")} class="hero bg-gray-300 mb-4 flex bg-center relative text-2xl leading-8 flex-col justify-center items-center object-cover bg-cover"> <div data-hero-box-content class="max-w-screen-md z-10 text-center mt-10 px-10 py-6 backdrop-blur-lg rounded-lg text-white border border-base-100/20 shadow-xl"> <div class="font-serif sm:text-4xl text-2xl">${unescapeHTML(ctx?.title || homeConfig.title)}</div> ${renderTemplate`<div class="mt-3 text-sm sm:mt-6 sm:text-lg"> <span>${unescapeHTML(homeConfig.subtitle)}</span> </div>`} </div> </div>`;
}, "D:/soak/src/components/Hero/HomeHero.astro", void 0);

const $$Astro$3 = createAstro("https://blog.loli.life/");
const $$CategoryHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CategoryHero;
  const { categoryName, categoryTotal, categoryWords } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-hero-box${addAttribute(`height:${homeConfig.top_image_height};background-image:url(${categoryName && (findCategoryImageByName(navbarConfig.menu, categoryName) || homeConfig.top_image)})`, "style")} class="hero bg-gray-300 mb-4 flex bg-center relative text-2xl leading-8 flex-col justify-center items-center object-cover bg-cover"> <div data-hero-box-content class="max-w-screen-md z-10 text-center mt-10 px-10 py-6 backdrop-blur-lg rounded-lg text-white border border-base-100/20 shadow-xl"> <div class="font-serif sm:text-4xl text-2xl"> ${categoryName || "\u5206\u7C7B\u672A\u547D\u540D"} </div> <div class="mt-3 text-sm sm:mt-6 sm:text-base"> <span> ${" "}
该分类下共计 ${categoryTotal} 篇文章，共计${" "} ${categoryWords} 字
</span> </div> </div> </div>`;
}, "D:/soak/src/components/Hero/CategoryHero.astro", void 0);

const $$Astro$2 = createAstro("https://blog.loli.life/");
const $$PostHero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PostHero;
  const { ctx, count } = Astro2.props;
  const { slug } = Astro2.params;
  const ArticleContentViewComponent = await loadHookComponent("ArticleContentView");
  return renderTemplate`${maybeRenderHead()}<div data-hero-box${addAttribute(`height:${homeConfig.top_image_height};background-image:url(${ctx?.thumbnail?.src || homeConfig.top_image})`, "style")} class="hero bg-gray-300 mb-4 flex bg-center relative text-2xl leading-8 flex-col justify-center items-center object-cover bg-cover"> <div data-hero-box-content class="max-w-screen-md z-10 text-center mt-10 px-10 py-6 backdrop-blur-lg rounded-lg text-white border border-base-100/20 shadow-xl"> <div class="font-serif sm:text-4xl text-2xl" data-pagefind-body data-pagefind-weight="10" data-pagefind-meta="title"> ${ctx?.title || "\u6587\u7AE0\u672A\u547D\u540D"} </div> <div class="mt-3 text-sm sm:mt-6 sm:text-base"> <div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"> <div class="flex items-center sm:text-sm text-xs"> <div class="size-4 flex items-center justify-center mr-1.5 rounded-full text-white bg-sky-500"> <div class="transform scale-75"> ${renderComponent($$result, "Icon", $$Icon, { "name": "time" })} </div> </div> <span> ${formatDateToYYYYMMDD(ctx?.created || /* @__PURE__ */ new Date())} </span> </div> <div class="sm:flex items-center sm:text-sm text-xs hidden"> <div class="size-4 flex items-center justify-center mr-1.5 rounded-full text-white bg-red-500"> <div class="transform scale-75"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tag" })} </div> </div> <span> ${ctx && "categories" in ctx && ctx?.categories?.map((categoryName, index) => {
    return renderTemplate`<span> <a${addAttribute(`/category/${findCategorySlugByName(navbarConfig.menu, categoryName)}`, "href")}> ${categoryName} </a> ${index < ctx?.categories?.length - 1 && " / "} </span>`;
  })} </span> </div> <div class="flex items-center sm:text-sm text-xs"> <div class="size-4 flex items-center justify-center mr-1.5 rounded-full text-white bg-green-500"> <div class="transform scale-75"> ${renderComponent($$result, "Icon", $$Icon, { "name": "textCount" })} </div> </div> <span>${`${count?.words}\u5B57`}</span> </div> ${ArticleContentViewComponent && renderTemplate`${renderComponent($$result, "ArticleContentViewComponent", ArticleContentViewComponent, { "key": slug })}`} </div> </div> </div> </div>`;
}, "D:/soak/src/components/Hero/PostHero.astro", void 0);

const $$NotFoundHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div data-hero-box${addAttribute(`height:${homeConfig.top_image_height};background-image:url(${getRandomImage()})`, "style")} class="hero bg-gray-300 mb-4 flex bg-center relative text-2xl leading-8 flex-col justify-center items-center object-cover bg-cover"> <div class="max-w-screen-md z-10 text-center mt-10 px-10 py-6 backdrop-blur-lg rounded-lg text-white border border-base-100/20 shadow-xl"> <div class="font-serif sm:text-4xl text-2xl">页面不存在</div> <div class="mt-3 text-sm sm:mt-6 sm:text-base"> <span>点击站点标题去首页看看吧！</span> </div> </div> </div>`;
}, "D:/soak/src/components/Hero/NotFoundHero.astro", void 0);

const $$Astro$1 = createAstro("https://blog.loli.life/");
const $$FriendsHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FriendsHero;
  const { ctx } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-hero-box${addAttribute(`height:${homeConfig.top_image_height};background-image:url(${getRandomImage()})`, "style")} class="hero bg-gray-300 mb-4 flex bg-center relative text-2xl leading-8 flex-col justify-center items-center object-cover bg-cover"> <div data-hero-box-content class="max-w-screen-md z-10 text-center mt-10 px-10 py-6 backdrop-blur-lg rounded-lg text-white border border-base-100/20 shadow-xl"> <div class="font-serif sm:text-4xl text-2xl">${ctx?.title}</div> <div class="mt-3 text-sm sm:mt-6 sm:text-base"> <span>${ctx?.description}</span> </div> </div> </div>`;
}, "D:/soak/src/components/Hero/FriendsHero.astro", void 0);

const $$Astro = createAstro("https://blog.loli.life/");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { ctx, pageType, count, categoryName, categoryTotal, categoryWords } = Astro2.props;
  return renderTemplate`${pageType === "home" && renderTemplate`${renderComponent($$result, "HomeHero", $$HomeHero, { "ctx": ctx })}`}${pageType === "category" && renderTemplate`${renderComponent($$result, "CategoryHero", $$CategoryHero, { "categoryName": categoryName, "categoryTotal": categoryTotal, "categoryWords": categoryWords })}`}${pageType === "post" && renderTemplate`${renderComponent($$result, "PostHero", $$PostHero, { "ctx": ctx, "count": count })}`}${pageType === "404" && renderTemplate`${renderComponent($$result, "NotFoundHero", $$NotFoundHero, {})}`}${pageType === "friends" && renderTemplate`${renderComponent($$result, "FriendsHero", $$FriendsHero, { "ctx": ctx })}`}`;
}, "D:/soak/src/components/Hero/Hero.astro", void 0);

export { $$DefaultLayout as $, DEFAULT_OUTPUT_FORMAT as D, VALID_SUPPORTED_FORMATS as V, $$Hero as a, getPostTotalWords as b, getEntry as c, siteConfig as d, $$Icon as e, findCategorySlugByName as f, getSortedPosts as g, homeConfig as h, formatDateToYYYYMMDD as i, get_article_summary as j, formatDate as k, loadHookComponent as l, getBlurImage as m, navbarConfig as n, getPostCount as o, getTagCount as p, getWordCount as q, renderEntry as r, sidebarConfig as s, getRecentPosts as t, DEFAULT_HASH_PROPS as u, word_count as w };
