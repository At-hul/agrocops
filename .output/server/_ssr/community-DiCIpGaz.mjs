import { n as pageIntro } from "./site-content-kdN7BxgY.mjs";
import { D as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ContentPage } from "./content-page-CqvHIfde.mjs";
import { t as PublicConversionForm } from "./public-conversion-forms-DwZk2gsj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/community-DiCIpGaz.js
var import_jsx_runtime = require_jsx_runtime();
function CommunityPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentPage, {
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
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-muted/55",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container grid gap-6 lg:grid-cols-3",
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
	})] });
}
//#endregion
export { CommunityPage as component };
