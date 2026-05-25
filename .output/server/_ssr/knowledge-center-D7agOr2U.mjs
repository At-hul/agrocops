import { r as __toESM } from "../_runtime.mjs";
import { n as pageIntro } from "./site-content-kdN7BxgY.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { O as require_jsx_runtime, i as useRouterState, s as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as WhatsappCta } from "./whatsapp-cta-qvALClaP.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
import { t as ContentPage } from "./content-page-ChFY9En3.mjs";
import { r as fetchPublishedArticles, t as emptyPublicContent } from "./public-content-repository-ptidobj4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/knowledge-center-D7agOr2U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function KnowledgeCenterPage() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [articles, setArticles] = (0, import_react.useState)(emptyPublicContent());
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		fetchPublishedArticles().then((result) => {
			if (!mounted) return;
			setArticles(result);
			setLoading(false);
		});
		return () => {
			mounted = false;
		};
	}, []);
	if (pathname !== "/knowledge-center") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentPage, {
		...pageIntro.knowledge,
		ctaContext: "article",
		sections: [
			{
				title: "Organic Farming Kerala",
				description: "Educational content targeting practical organic farming search intent."
			},
			{
				title: "Terrace Gardening Kerala",
				description: "Beginner-friendly guides for grow bags, seeds, nutrition, and seasonal care."
			},
			{
				title: "Monsoon Farming",
				description: "Drainage, disease prevention, fungus care, soil health, and urgent advisory links."
			},
			{
				title: "Malayalam Content",
				description: "Malayalam-friendly article planning helps local growers understand seasonal care and product use clearly."
			},
			{
				title: "Related Content Flow",
				description: "Articles link to crop guides, products, community join, and service area pages."
			},
			{
				title: "Share & Conversion",
				description: "Article CTAs support WhatsApp questions, community funnel, and lead tracking."
			}
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-muted/45 py-14 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "premium-container",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "premium-eyebrow",
						children: "Published Articles"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl font-extrabold tracking-tight text-primary md:text-5xl",
						children: "Practical guides ready for growers."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
					children: articles.data.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "hover-lift p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-extrabold uppercase tracking-[0.14em] text-accent",
								children: article.category ?? "Farming guide"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-2xl font-extrabold text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "hover:underline",
									href: `/knowledge-center/${article.slug}`,
									children: article.title
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base leading-7 text-muted-foreground",
								children: article.excerpt ?? "Read practical guidance from Agrocops Chelakkara."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "mt-5 inline-flex text-sm font-extrabold text-primary underline underline-offset-4",
								href: `/knowledge-center/${article.slug}`,
								children: "Read article"
							})
						]
					}, article.slug))
				}),
				!loading && articles.configured && articles.data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "mt-8 border-dashed p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-extrabold text-primary",
							children: "No published articles yet."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-base leading-7 text-muted-foreground",
							children: "Publish articles from the admin dashboard to populate the Knowledge Center. Visitors can still ask Agrocops on WhatsApp."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
							label: "Ask for guidance",
							context: "article",
							title: "Knowledge Center empty state",
							className: "mt-5"
						})
					]
				}) : null,
				articles.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 rounded-md bg-red-50 p-4 text-sm font-semibold text-red-700",
					children: ["Unable to load articles: ", articles.error]
				}) : null
			]
		})
	})] });
}
//#endregion
export { KnowledgeCenterPage as component };
