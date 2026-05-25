import { r as sampleProducts } from "./site-content-kdN7BxgY.mjs";
import { D as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as WhatsappCta } from "./whatsapp-cta-D8aqhAXQ.mjs";
import { t as Badge } from "./badge-lZbx36Mz.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
import { t as Route } from "./products._slug-BVTyGRrQ.mjs";
import { t as LeadCaptureForm } from "./lead-capture-form-CJKMR9FQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-C6STJvFc.js
var import_jsx_runtime = require_jsx_runtime();
function ProductDetailPage() {
	const { slug } = Route.useParams();
	const product = sampleProducts.find((item) => item.slug === slug) ?? sampleProducts[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container grid gap-8 lg:grid-cols-[1fr_0.8fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "yellow",
					children: product.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 text-4xl font-extrabold md:text-6xl",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg leading-8 text-primary-foreground/80",
					children: "Check pack sizes, stock status, suitable crops, and application guidance before you call, WhatsApp, or visit Agrocops Chelakkara."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
					label: "WhatsApp product inquiry",
					context: "product",
					title: product.name,
					cropType: product.featuredCrop,
					variant: "accent",
					className: "mt-8"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "bg-white/95 p-5 text-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-bold",
							children: "Stock status"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-muted-foreground",
							children: product.stockStatus
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-bold",
							children: "Pack sizes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-muted-foreground",
							children: product.packSizes
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-bold",
							children: "Brand"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-muted-foreground",
							children: product.brand
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-bold",
							children: "Price range"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-muted-foreground",
							children: product.priceRange
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-bold",
							children: "Featured crop"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-muted-foreground",
							children: product.featuredCrop
						})] })
					]
				})
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container grid gap-8 lg:grid-cols-[1fr_0.7fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [
					"Benefits",
					"Application",
					"Suitable Crops",
					"FAQs"
				].map((title) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-6 text-muted-foreground",
						children: "Ask Agrocops for crop-stage guidance, safe usage, and suitable alternatives before purchase."
					})]
				}, title))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadCaptureForm, {
				leadType: "product_inquiry",
				inquirySource: "product_detail"
			})]
		})
	})] });
}
//#endregion
export { ProductDetailPage as component };
