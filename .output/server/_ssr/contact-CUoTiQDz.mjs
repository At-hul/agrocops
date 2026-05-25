import { n as pageIntro } from "./site-content-kdN7BxgY.mjs";
import { O as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as buttonClassName } from "./button-DrsB15xH.mjs";
import { _ as MapPin, h as MessageCircle, m as Phone } from "../_libs/lucide-react.mjs";
import { i as WhatsappCta, o as siteConfig } from "./whatsapp-cta-qvALClaP.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
import { t as PublicConversionForm } from "./public-conversion-forms-Bx_5eXti.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CUoTiQDz.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden bg-[linear-gradient(135deg,#fffdf7_0%,#edf5e8_58%,#ffffff_100%)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "premium-container grid gap-10 py-16 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "premium-eyebrow",
						children: pageIntro.contact.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "premium-heading mt-4 text-primary",
						children: pageIntro.contact.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "premium-copy mt-5 max-w-2xl",
						children: pageIntro.contact.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: buttonClassName({
									variant: "primary",
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
								variant: "outline"
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-12 place-items-center rounded-md bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								className: "size-6",
								"aria-hidden": "true"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-extrabold uppercase tracking-[0.16em] text-primary",
							children: "Visit or message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Open every day"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "premium-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "premium-eyebrow",
						children: "Map Preview"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl font-extrabold tracking-tight text-primary",
						children: "Find Agrocops Chelakkara"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg leading-8 text-muted-foreground",
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
					className: "focus-ring hover-lift block overflow-hidden rounded-lg border bg-muted shadow-soft",
					href: siteConfig.directionsUrl,
					target: "_blank",
					rel: "noreferrer",
					"data-analytics-event": "directions_click",
					"aria-label": "Open Agrocops Chelakkara location in Google Maps",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid min-h-80 place-items-center bg-[radial-gradient(circle_at_50%_20%,rgba(248,179,52,0.18),transparent_30%),linear-gradient(135deg,hsl(var(--muted)),hsl(var(--background)))] p-8 text-center",
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
			className: "bg-muted/45 py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "premium-container max-w-xl",
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
