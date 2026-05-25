import { r as __toESM } from "../_runtime.mjs";
import { n as pageIntro } from "./site-content-kdN7BxgY.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { O as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as WhatsappCta } from "./whatsapp-cta-qvALClaP.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
import { t as ContentPage } from "./content-page-ChFY9En3.mjs";
import { t as PublicConversionForm } from "./public-conversion-forms-Bx_5eXti.mjs";
import { c as fetchPublishedSuccessStories, t as emptyPublicContent } from "./public-content-repository-ptidobj4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/community-DrH3doRk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CommunityPage() {
	const [stories, setStories] = (0, import_react.useState)(emptyPublicContent());
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		fetchPublishedSuccessStories().then((result) => {
			if (!mounted) return;
			setStories(result);
			setLoading(false);
		});
		return () => {
			mounted = false;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentPage, {
			...pageIntro.community,
			ctaContext: "community",
			sections: [
				{
					title: "Sticky CTA Funnel",
					description: "Homepage, articles, products, crop guides, and service pages all route to WhatsApp."
				},
				{
					title: "Farmer Registration",
					description: "Capture name, phone, village, district, crops, farm size, and language preference."
				},
				{
					title: "Success Stories",
					description: "Recognize farmers on website, WhatsApp, social posts, and live events."
				},
				{
					title: "Community Segments",
					description: "Segment by crop type, village, interest, event attendance, and repeat customer status."
				},
				{
					title: "Newsletter & Phone Updates",
					description: "Growers can sign up for seasonal reminders, event notices, and crop-care updates."
				},
				{
					title: "Welcome Flow",
					description: "Post-registration prompts can guide people into the correct WhatsApp community."
				}
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "premium-container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "premium-eyebrow",
							children: "Farmer Recognition"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-4xl font-extrabold tracking-tight text-primary md:text-5xl",
							children: "Published success stories."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
						children: stories.data.map((story) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "hover-lift overflow-hidden",
							children: [story.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "aspect-[16/10] w-full object-cover",
								src: story.image_url,
								alt: `${story.farmer_name} success story from ${story.village ?? "Agrocops Chelakkara"}`,
								loading: "lazy"
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-extrabold uppercase tracking-[0.14em] text-accent",
										children: story.crop ?? "Success story"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-2xl font-extrabold text-primary",
										children: story.farmer_name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm font-semibold text-muted-foreground",
										children: story.village ?? "Local grower"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-base leading-7 text-muted-foreground",
										children: story.story
									})
								]
							})]
						}, `${story.farmer_name}-${story.crop}`))
					}),
					!loading && stories.configured && stories.data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "mt-8 border-dashed p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-extrabold text-primary",
								children: "No published success stories yet."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-base leading-7 text-muted-foreground",
								children: "Publish approved stories from the admin dashboard to recognize farmers and gardeners here."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
								label: "Share a story",
								context: "community",
								title: "Success story empty state",
								className: "mt-5"
							})
						]
					}) : null,
					stories.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 rounded-md bg-red-50 p-4 text-sm font-semibold text-red-700",
						children: ["Unable to load success stories: ", stories.error]
					}) : null
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/45 py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "premium-container grid gap-6 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicConversionForm, {
						kind: "farmer",
						source: "community_farmer_registration"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicConversionForm, {
						kind: "story",
						source: "community_success_story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicConversionForm, {
						kind: "newsletter",
						source: "community_newsletter"
					})
				]
			})
		})
	] });
}
//#endregion
export { CommunityPage as component };
