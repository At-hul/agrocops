import { i as serviceAreaPages } from "./site-content-kdN7BxgY.mjs";
import { O as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as buttonClassName } from "./button-DrsB15xH.mjs";
import { _ as MapPin, a as Sprout, m as Phone } from "../_libs/lucide-react.mjs";
import { i as WhatsappCta, o as siteConfig } from "./whatsapp-cta-qvALClaP.mjs";
import { t as Badge } from "./badge-lZbx36Mz.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
import { t as Route } from "./service-areas._area-BBLSCahR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service-areas._area-D4ve_0Ea.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceAreaPage() {
	const { area: slug } = Route.useParams();
	const area = serviceAreaPages.find((item) => item.slug === slug) ?? serviceAreaPages[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden bg-[linear-gradient(135deg,#fffdf7_0%,#edf5e8_58%,#ffffff_100%)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "premium-container grid gap-10 py-16 md:py-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.65fr)] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "premium-eyebrow",
						children: "Service Area"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "premium-heading mt-4 text-primary",
						children: area.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "premium-copy mt-5 max-w-2xl",
						children: area.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
								label: `Ask from ${area.name}`,
								context: "service-area",
								serviceArea: area.name,
								title: area.title
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
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "surface-soft hover-lift p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "green",
							children: "Near Chelakkara"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-5 text-3xl font-extrabold tracking-tight text-primary",
							children: ["Local crop support for ", area.name]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base leading-7 text-muted-foreground",
							children: "Message before travelling to check stock, pack sizes, seasonal recommendations, and the best time to visit the outlet."
						})
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "premium-container grid gap-4 md:grid-cols-3",
				children: [
					"Popular products",
					"Seasonal advice",
					"Directions and visit intent"
				].map((title) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "surface-soft p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, {
							className: "size-6 text-accent",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-2xl font-extrabold text-primary",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-base leading-7 text-muted-foreground",
							children: [
								"Get product availability, seasonal crop guidance, WhatsApp support, and directions to Agrocops Chelakkara from ",
								area.name,
								"."
							]
						})
					]
				}, title))
			})
		})]
	});
}
//#endregion
export { ServiceAreaPage as component };
