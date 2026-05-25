import { D as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as WhatsappCta } from "./whatsapp-cta-D8aqhAXQ.mjs";
import { t as Badge } from "./badge-lZbx36Mz.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-page-CqvHIfde.js
var import_jsx_runtime = require_jsx_runtime();
function ContentPage({ eyebrow, title, description, sections, ctaContext = "general" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container max-w-4xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "yellow",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 text-4xl font-extrabold leading-tight md:text-6xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg leading-8 text-primary-foreground/80",
					children: description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
					label: "WhatsApp Agrocops",
					context: ctaContext,
					title,
					variant: "accent",
					className: "mt-8"
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						section.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "green",
							children: section.badge
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-xl font-bold",
							children: section.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-6 text-muted-foreground",
							children: section.description
						})
					]
				}, section.title))
			})
		})
	})] });
}
//#endregion
export { ContentPage as t };
