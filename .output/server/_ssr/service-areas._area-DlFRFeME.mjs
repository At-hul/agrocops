import { i as serviceAreaPages } from "./site-content-kdN7BxgY.mjs";
import { D as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as buttonClassName } from "./button-DrsB15xH.mjs";
import { y as MapPin } from "../_libs/lucide-react.mjs";
import { a as siteConfig, r as WhatsappCta } from "./whatsapp-cta-D8aqhAXQ.mjs";
import { t as Badge } from "./badge-lZbx36Mz.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
import { t as Route } from "./service-areas._area-mWrlUINP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service-areas._area-DlFRFeME.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceAreaPage() {
	const { area: slug } = Route.useParams();
	const area = serviceAreaPages.find((item) => item.slug === slug) ?? serviceAreaPages[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container max-w-4xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "yellow",
					children: "Service Area"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 text-4xl font-extrabold md:text-6xl",
					children: area.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg leading-8 text-primary-foreground/80",
					children: area.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
					label: `Ask Agrocops from ${area.name}`,
					context: "service-area",
					serviceArea: area.name,
					title: area.title,
					variant: "accent",
					className: "mt-8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: buttonClassName({
						variant: "outline",
						size: "lg",
						className: "ml-0 mt-3 border-white/40 bg-white/10 text-white hover:bg-white/18 sm:ml-3"
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
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container grid gap-4 md:grid-cols-3",
			children: [
				"Popular products",
				"Seasonal advice",
				"Directions and visit intent"
			].map((title) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm leading-6 text-muted-foreground",
					children: [
						"Get product availability, seasonal crop guidance, WhatsApp support, and directions to Agrocops Chelakkara from ",
						area.name,
						"."
					]
				})]
			}, title))
		})
	})] });
}
//#endregion
export { ServiceAreaPage as component };
