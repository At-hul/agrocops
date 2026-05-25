import { O as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as buttonClassName } from "./button-DrsB15xH.mjs";
import { _ as MapPin, a as Sprout, m as Phone } from "../_libs/lucide-react.mjs";
import { i as WhatsappCta, o as siteConfig } from "./whatsapp-cta-qvALClaP.mjs";
import { t as Badge } from "./badge-lZbx36Mz.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-page-ChFY9En3.js
var import_jsx_runtime = require_jsx_runtime();
function ContentPage({ eyebrow, title, description, sections, ctaContext = "general" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(248,179,52,0.16),transparent_28%),linear-gradient(135deg,#fffdf7_0%,#edf5e8_100%)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "premium-container grid gap-10 py-16 md:py-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.65fr)] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "premium-eyebrow",
							children: eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "premium-heading mt-4 max-w-4xl text-primary",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "premium-copy mt-5 max-w-2xl",
							children: description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
									label: "WhatsApp Us",
									context: ctaContext,
									title,
									variant: "primary"
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
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "surface-soft hover-lift p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-14 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, {
								className: "size-7",
								"aria-hidden": "true"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-extrabold uppercase tracking-[0.16em] text-primary",
							children: "Agrocops Chelakkara"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-6 text-muted-foreground",
							children: "Local outlet support backed by the wider Agrocops knowledge ecosystem."
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-3 text-sm font-semibold text-foreground sm:grid-cols-2 lg:grid-cols-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-md bg-background/80 p-4",
								children: "Products with guidance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-md bg-background/80 p-4",
								children: "WhatsApp-first help"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-md bg-background/80 p-4",
								children: "Store visit support"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-md bg-background/80 p-4",
								children: "Community updates"
							})
						]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "premium-container",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
					children: sections.map((section, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "hover-lift surface-soft p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4",
								children: [section.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "green",
									children: section.badge
								}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-extrabold text-accent",
									children: String(index + 1).padStart(2, "0")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 text-2xl font-extrabold tracking-tight text-primary",
								children: section.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base leading-7 text-muted-foreground",
								children: section.description
							})
						]
					}, section.title))
				})
			})
		})]
	});
}
//#endregion
export { ContentPage as t };
