import { D as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as WhatsappCta } from "./whatsapp-cta-D8aqhAXQ.mjs";
import { t as Badge } from "./badge-lZbx36Mz.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/knowledge-center._slug-CBjUOxjU.js
var import_jsx_runtime = require_jsx_runtime();
function ArticlePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container grid gap-10 lg:grid-cols-[minmax(0,760px)_320px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "green",
					children: "5 min read"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 text-4xl font-extrabold leading-tight md:text-5xl",
					children: "Monsoon crop care checklist for Kerala farms"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg leading-8 text-muted-foreground",
					children: "Heavy rain can quickly expose drainage problems, fungal pressure, weak roots, and nutrition gaps. Use this checklist before visiting the store or asking Agrocops on WhatsApp."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-5 text-base leading-8 text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Keep drainage clear, inspect crops regularly, and use advisory-backed products before issues spread." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "For urgent crop symptoms, send a WhatsApp message with crop name, location, visible symptoms, and recent product use." })]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "grid content-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-bold",
						children: "Table of contents"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 grid gap-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Drainage" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fungal prevention" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Recommended products" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Related crop guides" })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
					label: "Ask about this article",
					context: "article",
					title: "Monsoon crop care checklist",
					variant: "accent",
					className: "w-full"
				})]
			})]
		})
	}) });
}
//#endregion
export { ArticlePage as component };
