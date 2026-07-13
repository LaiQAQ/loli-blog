import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as addAttribute, F as Fragment } from './astro/server_DjYQvG4n.mjs';
import 'piccolore';
import { e as $$Icon, k as formatDate, h as homeConfig, w as word_count, j as get_article_summary, l as loadHookComponent, m as getBlurImage } from './Hero_DT5GIl8s.mjs';
import { createComponent as createComponent$1, ssr, ssrHydrationKey } from 'solid-js/web';
import { createSignal, Show } from 'solid-js';

const $$Astro$7 = createAstro("https://blog.loli.life/");
const $$CardMetaData$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CardMetaData$1;
  const { created, categories, count } = Astro2.props;
  const categoriesText = categories.join(" / ");
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-between w-full gap-x-4 gap-y-2"> <div class="flex items-center sm:text-sm text-xs"> <div class="size-4 flex items-center justify-center me-1.5 rounded-full bg-sky-500 text-white"> <div class="transform scale-75"> ${renderComponent($$result, "Icon", $$Icon, { "name": "time" })} </div> </div> <span>${formatDate(created, homeConfig.dateStyle)}</span> </div> <div class="flex items-center gap-x-4"> <div class="flex items-center sm:text-sm text-xs"> <div class="size-4 flex items-center justify-center me-1.5 rounded-full bg-red-500 text-white"> <div class="transform scale-75"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tag" })} </div> </div> <span>${categoriesText}</span> </div> <div class="items-center sm:text-sm text-xs hidden sm:flex"> <div class="size-4 flex items-center justify-center me-1.5 rounded-full bg-green-500 text-white"> <div class="transform scale-75"> ${renderComponent($$result, "Icon", $$Icon, { "name": "textCount" })} </div> </div> <span>${`${count.words}\u5B57`}</span> </div> </div> </div>`;
}, "D:/soak/src/components/HomeIndex/ArticleCard/SimpleList/CardMetaData.astro", void 0);

const $$Astro$6 = createAstro("https://blog.loli.life/");
const $$SimpleListCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SimpleListCard;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/posts/${post.id}`, "href")} class="card card-border bg-base-100 w-full hover:shadow-lg
    transition duration-300 cursor-pointer lg:w-220"> <div class="card-body gap-3 p-4 sm:gap-4 sm:p-6 lg:p-8"> <div class="flex justify-between items-center"> ${renderComponent($$result, "CardMetaData", $$CardMetaData$1, { "created": post.data.created, "tags": post.data.tags, "categories": post.data.categories, "count": word_count(post.body) })} </div> <h2 class="card-title tracking-wider font-serif line-clamp-2 sm:line-clamp-1 text-lg sm:text-2xl"> ${post.data.title} </h2> <p class="leading-6 tracking-wider min-h-12 line-clamp-2">${post.data.description || get_article_summary(post.body)}</p> </div> </a>`;
}, "D:/soak/src/components/HomeIndex/ArticleCard/SimpleList/SimpleListCard.astro", void 0);

const $$Astro$5 = createAstro("https://blog.loli.life/");
const $$CardMetaData = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CardMetaData;
  const { post } = Astro2.props;
  const categoriesText = post.data.categories.join(" / ");
  const ArticleListViewComponent = await loadHookComponent("ArticleListView");
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-between w-full gap-x-4 gap-y-2 text-white"> <div class="flex items-center sm:text-sm text-xs"> <div class="size-4 flex items-center justify-center mr-1.5 rounded-full bg-sky-500"> <div class="transform scale-75"> ${renderComponent($$result, "Icon", $$Icon, { "name": "time" })} </div> </div> <span>${formatDate(post.data.created, homeConfig.dateStyle)}</span> </div> <div class="flex items-center gap-x-4"> <div class="flex items-center sm:text-sm text-xs"> <div class="size-4 flex items-center justify-center mr-1.5 rounded-full bg-red-500"> <div class="transform scale-75"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tag" })} </div> </div> <span>${categoriesText}</span> </div> <div class="items-center sm:text-sm text-xs hidden sm:flex"> <div class="size-4 flex items-center justify-center mr-1.5 rounded-full bg-green-500"> <div class="transform scale-75"> ${renderComponent($$result, "Icon", $$Icon, { "name": "textCount" })} </div> </div> <span>${`${word_count(post.body || "").words}\u5B57`}</span> ${ArticleListViewComponent && renderTemplate`${renderComponent($$result, "ArticleListViewComponent", ArticleListViewComponent, { "key": post.id })}`} </div> </div> </div>`;
}, "D:/soak/src/components/HomeIndex/ArticleCard/BlurList/CardMetaData.astro", void 0);

const $$Astro$4 = createAstro("https://blog.loli.life/");
const $$BlurListCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BlurListCard;
  const { post, idx } = Astro2.props;
  const img = getBlurImage(post.data.thumbnail?.src);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/posts/${post.id}`, "href")} class="card card-border bg-base-100 w-full lg:w-220 outline-base-content/5 hover:outline-base-content/8 hover:shadow-lg
    transition duration-300 outline -outline-offset-1 cursor-pointer overflow-hidden group"> <div${addAttribute(["card-body p-0 relative flex-row", idx % 2 ? "flex-row-reverse" : ""], "class:list")}> <figure class="object-cover absolute bg-center bg-cover w-full brightness-50 md:blur-lg md:brightness-75 md:scale-150 inset-0"${addAttribute(`background-image: url(${img});`, "style")}></figure> <div${addAttribute(idx % 2 ? "clip-path: polygon(6% 0,100% 0,100% 100%,0 100%)" : "clip-path: polygon(0 0,100% 0,94% 100%,0 100%)", "style")} class="md:block hidden z-10 w-4/12 overflow-hidden flex-shrink-0"> <img class="aspect-[16/9] object-cover bg-center bg-cover w-full h-full group-hover:scale-105 group-hover:rotate-1"${addAttribute(img, "src")} style="transition: all .3s cubic-bezier(0,0,.2,1);"${addAttribute(post.data.title, "alt")}> </div> <div class="z-10 text-white px-4 py-6 md:px-8 md:py-12 w-full"> <div class="flex justify-between items-center"> ${renderComponent($$result, "CardMetaData", $$CardMetaData, { "post": post })} </div> <h2 class="card-title tracking-wider font-serif line-clamp-2 sm:line-clamp-1 text-lg sm:text-2xl my-2 sm:my-4"> ${post.data.title} </h2> <p class="leading-6 tracking-wider min-h-12 line-clamp-2 text-xs sm:text-base"> ${post.data.description || get_article_summary(post.body)} </p> </div> </div> </a>`;
}, "D:/soak/src/components/HomeIndex/ArticleCard/BlurList/BlurListCard.astro", void 0);

const $$Astro$3 = createAstro("https://blog.loli.life/");
const $$CardList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardList;
  const { post } = Astro2.props;
  const img = getBlurImage(post.data.thumbnail?.src);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/posts/${post.id}`, "href")} class="card bg-base-100 w-full shadow-sm group hover:shadow-lg transition duration-300"> <figure class="h-48 overflow-hidden"> <img class="object-cover bg-center bg-cover w-full h-full dark:brightness-90"${addAttribute(img, "src")}${addAttribute(post.data.title, "alt")}> </figure> <div class="card-body"> <div class="flex items-center sm:text-sm text-xs"> <div class="size-4 flex items-center justify-center me-1.5 rounded-full bg-red-500 text-white"> <div class="transform scale-75"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tag" })} </div> </div> <span>${post.data.categories.join(" / ")}</span> </div> <h2 class="max-h-15 h-15 card-title text-xl font-serif line-clamp-2"> ${post.data.title} </h2> <div class="flex justify-between items-center"> <div class="flex items-center sm:text-sm text-xs"> <div class="size-4 flex items-center justify-center me-1.5 rounded-full bg-sky-500 text-white"> <div class="transform scale-75"> ${renderComponent($$result, "Icon", $$Icon, { "name": "time" })} </div> </div> <span>${formatDate(post.data.created, homeConfig.dateStyle)}</span> </div> <div class="flex items-center sm:text-sm text-xs"> <div class="size-4 flex items-center justify-center me-1.5 rounded-full bg-green-500 text-white"> <div class="transform scale-75"> ${renderComponent($$result, "Icon", $$Icon, { "name": "textCount" })} </div> </div> <span>${`${word_count(post.body).words}\u5B57`}</span> </div> </div> </div> </a>`;
}, "D:/soak/src/components/HomeIndex/ArticleCard/CardList/CardList.astro", void 0);

const $$Astro$2 = createAstro("https://blog.loli.life/");
const $$ArticleList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArticleList;
  const articleStyle = homeConfig.article_list_style;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${articleStyle === "simple"}${renderTemplate`<div data-article-list class="w-full flex items-center flex-col gap-4 sm:gap-8">${posts.map((post, idx) => renderTemplate`${renderComponent($$result2, "BlurListCard", $$BlurListCard, { "post": post, "idx": idx })}`)}</div>`}${articleStyle === "card"}` })}`;
}, "D:/soak/src/components/HomeIndex/ArticleList.astro", void 0);

const $$Astro$1 = createAstro("https://blog.loli.life/");
const $$SimpleButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SimpleButton;
  const { total, currentPage, size, prev, next, baseUrl = "/" } = Astro2.props;
  const totalPages = Math.ceil(total / size);
  function generatePageLinks(currentPage2, totalPages2) {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage2 - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages2, startPage + maxVisiblePages - 1);
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }
  const pageLinks = generatePageLinks(currentPage, totalPages);
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center"> <nav aria-label="Pagination"> <div class="inline-flex items-center space-x-2 rounded-box text-sm"> <a${addAttribute(prev || "#", "href")} class="join-item btn"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-5", "name": "arrow-left-s-line" })} </a> ${pageLinks.map((page) => renderTemplate`<a${addAttribute(page === 1 ? baseUrl.slice(0, -1) || "/" : `${baseUrl}${page}`, "href")}${addAttribute(["join-item btn", page === currentPage ? "btn-active" : ""], "class:list")}> ${page} </a>`)} ${totalPages > pageLinks[pageLinks.length - 1] && renderTemplate`<span>···</span>`} <a${addAttribute(next || "#", "href")} class="join-item btn"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-5", "name": "arrow-right-s-line" })} </a> </div> </nav> </div>`;
}, "D:/soak/src/components/HomeIndex/Pagination/SimpleButton.astro", void 0);

var _tmpl$ = ["<button", ' class="btn btn-wide bg-base-100 font-serif">', "</button>"], _tmpl$2 = ["<button", ' class="btn btn-wide font-serif">已加载全部文章</button>'];
const LoadMore = (props) => {
  const [loading, setLoading] = createSignal(false);
  const [localCurrentPage, setLocalCurrentPage] = createSignal(props.currentPage);
  const [disable, setDisable] = createSignal(!props.next);
  return createComponent$1(Show, {
    get when() {
      return !disable();
    },
    get fallback() {
      return ssr(_tmpl$2, ssrHydrationKey());
    },
    get children() {
      return ssr(_tmpl$, ssrHydrationKey(), loading() ? "加载中..." : "加载更多文章");
    }
  });
};

const $$Astro = createAstro("https://blog.loli.life/");
const $$PaginationArea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PaginationArea;
  const { page, baseUrl = "/" } = Astro2.props;
  return renderTemplate`${homeConfig.article_list_load_type === "pagination"}${renderTemplate`${renderComponent($$result, "LoadMoreBtn", LoadMore, { "total": page.total, "size": page.size, "currentPage": page.currentPage, "prev": page.url.prev, "next": page.url.next, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "D:/soak/src/components/HomeIndex/Pagination/LoadMore.tsx", "client:component-export": "default" })}`}`;
}, "D:/soak/src/components/HomeIndex/Pagination/PaginationArea.astro", void 0);

export { $$ArticleList as $, $$PaginationArea as a };
