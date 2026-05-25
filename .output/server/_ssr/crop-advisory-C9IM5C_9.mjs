import { r as __toESM } from "../_runtime.mjs";
import { n as pageIntro } from "./site-content-kdN7BxgY.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { O as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as WhatsappCta } from "./whatsapp-cta-qvALClaP.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
import { t as ContentPage } from "./content-page-ChFY9En3.mjs";
import { i as fetchPublishedCropGuides, t as emptyPublicContent } from "./public-content-repository-ptidobj4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/crop-advisory-C9IM5C_9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CropAdvisoryPage() {
	const [guides, setGuides] = (0, import_react.useState)(emptyPublicContent());
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		fetchPublishedCropGuides().then((result) => {
			if (!mounted) return;
			setGuides(result);
			setLoading(false);
		});
		return () => {
			mounted = false;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentPage, {
		...pageIntro.advisory,
		ctaContext: "crop-guide",
		sections: [
			{
				title: "Coconut",
				description: "Root care, nutrition, pest checks, and seasonal recommendations.",
				badge: "Crop guide"
			},
			{
				title: "Banana",
				description: "Stage-wise nutrition, sucker management, disease prevention, and seasonal planning.",
				badge: "Crop guide"
			},
			{
				title: "Vegetables",
				description: "Kitchen garden and farm vegetable care with organic pesticide guidance.",
				badge: "Crop guide"
			},
			{
				title: "Pepper",
				description: "Support for vine health, fungal issues, nutrition, and monsoon care.",
				badge: "Crop guide"
			},
			{
				title: "Arecanut",
				description: "Support for nutrition, seasonal stress, common pest issues, and product selection.",
				badge: "Crop guide"
			},
			{
				title: "Urgent Crop Help",
				description: "Use WhatsApp when symptoms are spreading quickly or crop damage needs fast guidance.",
				badge: "WhatsApp"
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
						children: "Published Crop Guides"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl font-extrabold tracking-tight text-primary md:text-5xl",
						children: "Live crop guidance from the admin dashboard."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
					children: guides.data.map((guide) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "hover-lift p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-extrabold uppercase tracking-[0.14em] text-accent",
								children: guide.season ?? "Crop guide"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-2xl font-extrabold text-primary",
								children: guide.crop_name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base leading-7 text-muted-foreground",
								children: guide.problem ?? "Seasonal care guidance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-6 text-muted-foreground",
								children: guide.treatment ?? guide.symptoms ?? "WhatsApp Agrocops for a recommendation."
							})
						]
					}, guide.slug))
				}),
				!loading && guides.configured && guides.data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "mt-8 border-dashed p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-extrabold text-primary",
							children: "No published crop guides yet."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-base leading-7 text-muted-foreground",
							children: "Publish crop guides from the admin dashboard to show live advisory content here."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
							label: "Ask crop guidance",
							context: "crop-guide",
							title: "Crop guide empty state",
							className: "mt-5"
						})
					]
				}) : null,
				guides.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 rounded-md bg-red-50 p-4 text-sm font-semibold text-red-700",
					children: ["Unable to load crop guides: ", guides.error]
				}) : null
			]
		})
	})] });
}
//#endregion
export { CropAdvisoryPage as component };
