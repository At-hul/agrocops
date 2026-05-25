import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { O as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as buttonClassName } from "./button-DrsB15xH.mjs";
import { C as Clock, E as BookOpen, _ as MapPin, l as Share2, m as Phone } from "../_libs/lucide-react.mjs";
import { i as WhatsappCta, o as siteConfig } from "./whatsapp-cta-qvALClaP.mjs";
import { t as Badge } from "./badge-lZbx36Mz.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
import { n as fetchPublishedArticleBySlug } from "./public-content-repository-ptidobj4.mjs";
import { n as articles, t as Route } from "./knowledge-center._slug--pfnvoQo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/knowledge-center._slug-BnZHMWlL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ArticlePage() {
	const { slug } = Route.useParams();
	const staticArticle = articles.find((item) => item.slug === slug);
	const [liveArticle, setLiveArticle] = (0, import_react.useState)(null);
	const [isConfigured, setIsConfigured] = (0, import_react.useState)(false);
	const [loadingArticle, setLoadingArticle] = (0, import_react.useState)(true);
	const [loadError, setLoadError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		setLoadingArticle(true);
		fetchPublishedArticleBySlug(slug).then((result) => {
			if (!mounted) return;
			setLiveArticle(result.data);
			setIsConfigured(result.configured);
			setLoadError(result.error);
			setLoadingArticle(false);
		});
		return () => {
			mounted = false;
		};
	}, [slug]);
	const article = liveArticle ?? (!isConfigured && staticArticle ? {
		...staticArticle,
		excerpt: staticArticle.description,
		content: "Keep drainage clear, inspect crops regularly, and use advisory-backed products before issues spread.\n\nFor urgent crop symptoms, send a WhatsApp message with crop name, location, visible symptoms, and recent product use.",
		reading_time: staticArticle.readTime
	} : null);
	if (loadingArticle && isConfigured) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[linear-gradient(135deg,#fffdf7_0%,#edf5e8_100%)] py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "premium-container max-w-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-bold text-muted-foreground",
				children: "Loading article..."
			})
		})
	});
	if (!article) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[linear-gradient(135deg,#fffdf7_0%,#edf5e8_100%)] py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "premium-container max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "text-sm font-bold text-muted-foreground",
					"aria-label": "Breadcrumb",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hover:text-primary",
							href: "/",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-2",
							"aria-hidden": "true",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hover:text-primary",
							href: "/knowledge-center",
							children: "Knowledge Center"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "premium-heading mt-6 text-primary",
					children: "Article not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "premium-copy mt-5",
					children: "This article is not available yet. Visit the Knowledge Center or WhatsApp Agrocops Chelakkara for crop guidance."
				}),
				loadError ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 rounded-md bg-red-50 p-4 text-sm font-semibold text-red-700",
					children: ["Unable to load article: ", loadError]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
						label: "Ask on WhatsApp",
						context: "article",
						title: "Unknown article"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: buttonClassName({
							variant: "outline",
							size: "lg"
						}),
						href: "/knowledge-center",
						children: "View Knowledge Center"
					})]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-[linear-gradient(135deg,#fffdf7_0%,#edf5e8_100%)] py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "premium-container grid gap-10 lg:grid-cols-[minmax(0,760px)_minmax(280px,360px)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mb-6 text-sm font-bold text-muted-foreground",
						"aria-label": "Breadcrumb",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hover:text-primary",
								href: "/",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2",
								"aria-hidden": "true",
								children: "/"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hover:text-primary",
								href: "/knowledge-center",
								children: "Knowledge Center"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2",
								"aria-hidden": "true",
								children: "/"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: article.title
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "green",
							children: article.reading_time ?? "5 min read"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "yellow",
							children: article.category ?? "Farming guide"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "premium-heading mt-5 text-primary",
						children: article.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "premium-copy mt-5",
						children: article.excerpt ?? "Practical farming guidance from Agrocops Chelakkara."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
								label: "Ask about this article",
								context: "article",
								title: article.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: buttonClassName({
									variant: "outline",
									size: "lg"
								}),
								href: siteConfig.phoneHref,
								"data-analytics-event": "call_click",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-5",
									"aria-hidden": "true"
								}), "Call Now"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: buttonClassName({
									variant: "outline",
									size: "lg"
								}),
								href: siteConfig.directionsUrl,
								target: "_blank",
								rel: "noreferrer",
								"data-analytics-event": "directions_click",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "size-5",
									"aria-hidden": "true"
								}), "Get Directions"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-5 text-base leading-8 text-muted-foreground",
						children: (article.content ?? "").split("\n\n").filter(Boolean).map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "grid content-start gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "surface-soft p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
									className: "size-5 text-accent",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-extrabold text-primary",
									children: "Table of contents"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 grid gap-3 text-sm font-semibold text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Drainage checks" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fungal prevention" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Recommended products" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Related crop guides" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "surface-soft p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
									className: "size-5 text-accent",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm font-extrabold uppercase tracking-[0.16em] text-primary",
									children: "Fast help"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-6 text-muted-foreground",
									children: "Send crop name, visible symptoms, location, and recent product use on WhatsApp for clearer guidance."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: buttonClassName({
								variant: "outline",
								size: "lg",
								className: "w-full"
							}),
							href: `https://wa.me/?text=${encodeURIComponent(`${article.title} - ${siteConfig.siteUrl}/knowledge-center/${article.slug}`)}`,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "Share this article",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {
								className: "size-5",
								"aria-hidden": "true"
							}), "Share Article"]
						})
					]
				})]
			})
		})
	});
}
//#endregion
export { ArticlePage as component };
