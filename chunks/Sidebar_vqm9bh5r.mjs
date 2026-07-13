import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, b as createAstro, r as renderComponent } from './astro/server_DjYQvG4n.mjs';
import 'piccolore';
import 'clsx';
import { d as siteConfig, s as sidebarConfig, o as getPostCount, p as getTagCount, q as getWordCount, t as getRecentPosts, e as $$Icon, i as formatDateToYYYYMMDD } from './Hero_wAAbjtv3.mjs';

const $$PersonalData = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="card bg-base-100 w-full overflow-hidden items-center"> <div class="relative flex w-full h-32 justify-center bg-cover"> <img${addAttribute(sidebarConfig.profile_background, "src")} class="h-32 w-full object-cover bg-center bg-cover rounded-t-box dark:brightness-90" alt="背景"> <div class="absolute -bottom-8 flex h-16 w-16 items-center justify-center rounded-full border-[4px] border-base-100"> <img class="size-full rounded-full"${addAttribute(siteConfig.author.avatar, "src")}${addAttribute(siteConfig.author.username, "alt")}> </div> </div> <div class="mt-12 mb-4 flex flex-col items-center"> <h4 class="text-xl font-serif font-bold mb-2">${siteConfig.author.username}</h4> <p class="text-sm"> ${siteConfig.author.bio} </p> </div> <div class="py-4 flex w-full justify-evenly"> <div class="flex flex-col items-center justify-center"> <p class="text-xl font-bold font-serif">${getPostCount()}</p> <p class="text-xs text-base-content/60">文章</p> </div> <div class="flex flex-col items-center justify-center"> <p class="text-xl font-bold font-serif">${getTagCount()}</p> <p class="text-xs text-base-content/60">标签</p> </div> <div class="flex flex-col items-center justify-center"> <p class="text-xl font-bold font-serif">${getWordCount()}</p> <p class="text-xs text-base-content/60">文字</p> </div> </div> </section>`;
}, "D:/soak/src/components/Sidebar/PersonalData.astro", void 0);

const $$Astro = createAstro("https://blog.loli.life/");
const $$RecentArticle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RecentArticle;
  const posts = await getRecentPosts();
  const postId = Astro2.url.pathname.replace("/posts/", "").replace("/", "");
  return renderTemplate`${maybeRenderHead()}<section class="card rounded-box mt-4 sticky top-16 bg-base-100"> <div class="px-4 py-2 my-2 flex items-center"> <div class="size-5 flex items-center justify-center mr-1.5 rounded-full text-white bg-green-500"> ${renderComponent($$result, "Icon", $$Icon, { "name": "eye-2-line" })} </div> <span>最近文章</span> </div> ${sidebarConfig.recent_article_style === "card"} ${renderTemplate`<ul class="timeline timeline-vertical timeline-compact px-4 pb-6"> ${posts.map(
    (post, idx) => {
      return renderTemplate`<li> ${idx !== 0 && renderTemplate`<hr>`} <div class="timeline-middle"> ${postId === post.id ? renderTemplate`<div class="inline-grid *:[grid-area:1/1]"> <div class="status status-error animate-ping"></div> <div class="status status-error"></div> </div>` : renderTemplate`<div aria-label="status" class="status status-primary"></div>`} </div> <div class="timeline-end rounded-box py-2 px-4 w-full hover:bg-base-300 transition"> <a${addAttribute(`/posts/${post.id}`, "href")} class="block group"> <div class="flex flex-col"> <div class="text-sm line-clamp-1">${post.data.title}</div> <div class="text-xs text-gray-500">${formatDateToYYYYMMDD(post.data.created)}</div> </div> </a> </div> ${idx !== posts.length - 1 && renderTemplate`<hr>`} </li>`;
    }
  )} </ul>`} </section>`;
}, "D:/soak/src/components/Sidebar/RecentArticle.astro", void 0);

const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sidebar relative w-72 shrink-0"> ${renderComponent($$result, "PersonalData", $$PersonalData, {})} ${renderComponent($$result, "RecentArticle", $$RecentArticle, {})} </div>`;
}, "D:/soak/src/components/Sidebar/Sidebar.astro", void 0);

export { $$Sidebar as $ };
