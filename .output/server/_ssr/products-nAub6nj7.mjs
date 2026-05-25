import { r as __toESM } from "../_runtime.mjs";
import { n as pageIntro, r as sampleProducts, t as officialProductCategories } from "./site-content-kdN7BxgY.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { O as require_jsx_runtime, i as useRouterState, s as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as buttonClassName } from "./button-DrsB15xH.mjs";
import { _ as MapPin, m as Phone, o as Sparkles } from "../_libs/lucide-react.mjs";
import { i as WhatsappCta, o as siteConfig } from "./whatsapp-cta-qvALClaP.mjs";
import { t as Badge } from "./badge-lZbx36Mz.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
import { s as fetchPublishedProducts, t as emptyPublicContent } from "./public-content-repository-ptidobj4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-nAub6nj7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categoryImages = {
	"organic-fertilizers": "/products/organic-fertilizers.webp",
	"organic-pesticides": "/products/organic-pesticides.webp",
	"waste-treatment-agents": "/products/inoculum-mix.webp",
	"grow-bags": "/products/grow-bags.webp",
	"nursery-bags": "/products/grow-bags.webp",
	sprayers: "/products/sprayers.webp",
	"garden-tools": "/products/garden-tools.webp",
	"vegetable-seeds": "/products/vegetable-seeds.webp",
	"flower-seeds": "/products/flower-seeds.webp",
	"garden-pots-containers": "/products/garden-pots.webp"
};
var productImages = {
	"organic-soil-booster": "/products/organic-fertilizers.webp",
	"organic-pest-care": "/products/organic-pesticides.webp",
	"kitchen-garden-seed-kit": "/products/vegetable-seeds.webp"
};
function ProductsPage() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [publishedProducts, setPublishedProducts] = (0, import_react.useState)(emptyPublicContent());
	const [loadingProducts, setLoadingProducts] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		fetchPublishedProducts().then((result) => {
			if (!mounted) return;
			setPublishedProducts(result);
			setLoadingProducts(false);
		});
		return () => {
			mounted = false;
		};
	}, []);
	if (pathname !== "/products") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	const featuredProducts = publishedProducts.data.length > 0 ? publishedProducts.data : publishedProducts.configured ? [] : sampleProducts.map((product) => ({
		slug: product.slug,
		name: product.name,
		description: `${product.category} for ${product.featuredCrop}.`,
		category: product.category,
		stock_status: product.stockStatus,
		pack_sizes: product.packSizes.split(",").map((item) => item.trim()),
		brand: product.brand,
		price_range: product.priceRange,
		featured_crop: product.featuredCrop,
		images: [productImages[product.slug] ?? "/products/organic-fertilizers.webp"]
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden bg-[linear-gradient(135deg,#fffdf7_0%,#edf5e8_52%,#ffffff_100%)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "premium-container grid gap-10 py-16 md:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.8fr)] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "premium-eyebrow",
								children: pageIntro.products.eyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "premium-heading mt-4 max-w-4xl text-primary",
								children: pageIntro.products.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "premium-copy mt-5 max-w-2xl",
								children: pageIntro.products.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
										label: "WhatsApp Product Help",
										context: "product",
										title: "Products page"
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
										}), "Visit Store"]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-4",
						children: officialProductCategories.slice(0, 4).map((category, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: `image-zoom overflow-hidden border-white/70 bg-white/80 shadow-soft ${index === 1 ? "translate-y-6" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/3] overflow-hidden bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									className: "h-full w-full object-cover",
									src: categoryImages[category.slug] ?? category.categoryImage,
									alt: `${category.title} at Agrocops Chelakkara`,
									loading: index < 2 ? "eager" : "lazy"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-extrabold text-primary",
									children: category.title
								})
							})]
						}, category.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-14 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "premium-container",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "premium-eyebrow",
							children: "Product Universe"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-4xl font-extrabold tracking-tight text-primary md:text-5xl",
							children: "Official Agrocops categories, made easy to choose."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3",
						children: officialProductCategories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "hover-lift image-zoom overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[16/10] overflow-hidden bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									className: "h-full w-full object-cover",
									src: categoryImages[category.slug] ?? category.categoryImage,
									alt: `${category.title} category at Agrocops Chelakkara`,
									loading: "lazy"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "green",
										children: category.relatedCropRecommendations[0]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 text-2xl font-extrabold text-primary",
										children: category.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-base leading-7 text-muted-foreground",
										children: category.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 grid gap-4 text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-bold text-foreground",
												children: "Benefits"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-2 grid gap-1 text-muted-foreground",
												children: category.benefits.map((benefit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
														className: "mt-0.5 size-4 shrink-0 text-accent",
														"aria-hidden": "true"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: benefit })]
												}, benefit))
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
				className: "bg-muted/45 py-14 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "premium-container",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "premium-eyebrow",
								children: "Featured Products"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-4xl font-extrabold tracking-tight text-primary md:text-5xl",
								children: "Ask before you buy. Leave with the right input."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-4 md:grid-cols-3",
							children: featuredProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "hover-lift image-zoom overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[4/3] overflow-hidden bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										className: "h-full w-full object-cover",
										src: product.images?.[0] ?? productImages[product.slug] ?? "/products/organic-fertilizers.webp",
										alt: `${product.name} product inquiry at Agrocops Chelakkara`,
										loading: "lazy"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: "green",
											children: product.category ?? "Agrocops product"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-4 text-2xl font-extrabold text-primary",
											children: product.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
											className: "mt-4 grid gap-2 text-sm text-muted-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "font-bold text-foreground",
													children: "Stock"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: formatStock(product.stock_status) })] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "font-bold text-foreground",
													children: "Pack sizes"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: formatList(product.pack_sizes) })] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "font-bold text-foreground",
													children: "Brand"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: product.brand ?? "Agrocops" })] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "font-bold text-foreground",
													children: "Featured crop"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: product.featured_crop ?? "Ask for guidance" })] })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
											label: "Product inquiry",
											context: "product",
											title: product.name,
											cropType: product.featured_crop ?? void 0,
											variant: "outline",
											className: "mt-5 w-full"
										})
									]
								})]
							}, product.slug))
						}),
						!loadingProducts && publishedProducts.configured && featuredProducts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "mt-8 border-dashed p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-extrabold text-primary",
									children: "No published products yet."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-base leading-7 text-muted-foreground",
									children: "Add and publish products from the admin dashboard to populate this section. Visitors can still WhatsApp Agrocops for current stock."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
									label: "Ask current availability",
									context: "product",
									title: "Products empty state",
									className: "mt-5"
								})
							]
						}) : null,
						publishedProducts.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 rounded-md bg-red-50 p-4 text-sm font-semibold text-red-700",
							children: ["Unable to load live products: ", publishedProducts.error]
						}) : null
					]
				})
			})
		]
	});
}
function formatStock(status) {
	return status ? {
		in_stock: "In stock",
		limited: "Limited",
		out_of_stock: "Out of stock",
		on_request: "On request"
	}[status] ?? status : "On request";
}
function formatList(value) {
	if (Array.isArray(value)) return value.length > 0 ? value.join(", ") : "Ask at store";
	return value || "Ask at store";
}
//#endregion
export { ProductsPage as component };
