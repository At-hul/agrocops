import { n as pageIntro } from "./site-content-kdN7BxgY.mjs";
import { D as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as buttonClassName } from "./button-DrsB15xH.mjs";
import { h as Phone, y as MapPin } from "../_libs/lucide-react.mjs";
import { a as siteConfig, r as WhatsappCta } from "./whatsapp-cta-D8aqhAXQ.mjs";
import { t as Badge } from "./badge-lZbx36Mz.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
import { t as PublicConversionForm } from "./public-conversion-forms-DwZk2gsj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C8NDSTfx.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding bg-primary text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "yellow",
						children: pageIntro.contact.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 text-4xl font-extrabold leading-tight md:text-6xl",
						children: pageIntro.contact.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg leading-8 text-primary-foreground/80",
						children: pageIntro.contact.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: buttonClassName({
									variant: "accent",
									size: "lg"
								}),
								href: siteConfig.phoneHref,
								"data-analytics-event": "call_click",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-5",
									"aria-hidden": "true"
								}), "Call Agrocops Chelakkara"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
								label: "WhatsApp Us",
								context: "general",
								title: "Contact page hero",
								variant: "outline",
								className: "border-white/40 bg-white/10 text-white hover:bg-white/18"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: buttonClassName({
									variant: "outline",
									size: "lg",
									className: "border-white/40 bg-white/10 text-white hover:bg-white/18"
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
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "border-white/16 bg-white/95 p-5 text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold uppercase text-muted-foreground",
								children: "Phone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-lg font-extrabold",
								children: siteConfig.phone
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold uppercase text-muted-foreground",
								children: "Address"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-semibold leading-7",
								children: siteConfig.address
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold uppercase text-muted-foreground",
								children: "Business hours"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-semibold",
								children: siteConfig.hours
							})] })
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "green",
						children: "Map Preview"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-bold",
						children: "Find Agrocops Chelakkara"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base leading-7 text-muted-foreground",
						children: "Use directions to visit the outlet near the BSNL Telephone Exchange in Venganellur, Chelakkara."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: buttonClassName({
							variant: "primary",
							size: "lg",
							className: "mt-6"
						}),
						href: siteConfig.directionsUrl,
						target: "_blank",
						rel: "noreferrer",
						"data-analytics-event": "directions_click",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							className: "size-5",
							"aria-hidden": "true"
						}), "Open Google Maps"]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "focus-ring block overflow-hidden rounded-lg border bg-muted shadow-sm",
					href: siteConfig.directionsUrl,
					target: "_blank",
					rel: "noreferrer",
					"data-analytics-event": "directions_click",
					"aria-label": "Open Agrocops Chelakkara location in Google Maps",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid min-h-72 place-items-center bg-[linear-gradient(135deg,hsl(var(--muted)),hsl(var(--background)))] p-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "size-10 text-accent",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xl font-extrabold text-primary",
								children: "Agrocops Chelakkara"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-lg text-sm leading-6 text-muted-foreground",
								children: siteConfig.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm font-bold text-primary underline underline-offset-4",
								children: "Tap to open directions"
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding bg-muted/55",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container max-w-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicConversionForm, {
					kind: "newsletter",
					source: "contact_newsletter"
				})
			})
		})
	] });
}
//#endregion
export { ContactPage as component };
