import { n as pageIntro, r as sampleProducts, t as officialProductCategories } from "./site-content-kdN7BxgY.mjs";
import { D as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as WhatsappCta } from "./whatsapp-cta-D8aqhAXQ.mjs";
import { t as Badge } from "./badge-lZbx36Mz.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
import { t as SectionHeading } from "./section-heading-BJigGknc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-CdA5sVFa.js
var import_jsx_runtime = require_jsx_runtime();
function ProductsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding bg-primary text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container max-w-4xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "yellow",
						children: pageIntro.products.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 text-4xl font-extrabold md:text-6xl",
						children: pageIntro.products.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg leading-8 text-primary-foreground/80",
						children: pageIntro.products.description
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Official categories",
					title: "Initial Agrocops catalog structure",
					description: "Each category supports images, benefits, featured product examples, WhatsApp inquiry, and related crop recommendations."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3",
					children: officialProductCategories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/10] bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "h-full w-full object-cover",
								src: category.categoryImage,
								alt: `${category.title} category at Agrocops Chelakkara`
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "green",
									children: category.relatedCropRecommendations[0]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 text-xl font-bold",
									children: category.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-6 text-muted-foreground",
									children: category.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 grid gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold text-foreground",
											children: "Benefits"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-2 grid gap-1 text-sm text-muted-foreground",
											children: category.benefits.map((benefit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: benefit }, benefit))
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold text-foreground",
											children: "Featured products"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted-foreground",
											children: category.featuredProducts.join(", ")
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold text-foreground",
											children: "Related crops"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted-foreground",
											children: category.relatedCropRecommendations.join(", ")
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
									label: "Ask about this category",
									context: "product",
									title: category.title,
									cropType: category.relatedCropRecommendations[0],
									variant: "outline",
									className: "mt-5 w-full"
								})
							]
						})]
					}, category.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding bg-muted/55",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Lead-first products",
					title: "Featured product examples",
					description: "Product records support stock status, pack sizes, brand, price range, and featured crop."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-3",
					children: sampleProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "green",
								children: product.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-xl font-bold",
								children: product.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-4 grid gap-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-bold text-foreground",
										children: "Stock"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: product.stockStatus })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-bold text-foreground",
										children: "Pack sizes"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: product.packSizes })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-bold text-foreground",
										children: "Brand"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: product.brand })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-bold text-foreground",
										children: "Featured crop"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: product.featuredCrop })] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
								label: "Product inquiry",
								context: "product",
								title: product.name,
								cropType: product.featuredCrop,
								variant: "outline",
								className: "mt-5 w-full"
							})
						]
					}, product.slug))
				})]
			})
		})
	] });
}
//#endregion
export { ProductsPage as component };
