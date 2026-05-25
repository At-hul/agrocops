import { r as __toESM } from "../_runtime.mjs";
import { r as sampleProducts } from "./site-content-kdN7BxgY.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { O as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as buttonClassName } from "./button-DrsB15xH.mjs";
import { _ as MapPin, m as Phone, w as CircleCheck } from "../_libs/lucide-react.mjs";
import { i as WhatsappCta, o as siteConfig } from "./whatsapp-cta-qvALClaP.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
import { o as fetchPublishedProductBySlug } from "./public-content-repository-ptidobj4.mjs";
import { t as Route } from "./products._slug-Belja4f2.mjs";
import { t as LeadCaptureForm } from "./lead-capture-form-DV4RjXLM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-C44VD1Qw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var productImages = {
	"organic-soil-booster": "/products/organic-fertilizers.webp",
	"organic-pest-care": "/products/organic-pesticides.webp",
	"kitchen-garden-seed-kit": "/products/vegetable-seeds.webp"
};
function ProductDetailPage() {
	const { slug } = Route.useParams();
	const staticProduct = sampleProducts.find((item) => item.slug === slug);
	const [liveProduct, setLiveProduct] = (0, import_react.useState)(null);
	const [loadingProduct, setLoadingProduct] = (0, import_react.useState)(true);
	const [isConfigured, setIsConfigured] = (0, import_react.useState)(false);
	const [loadError, setLoadError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		setLoadingProduct(true);
		fetchPublishedProductBySlug(slug).then((result) => {
			if (!mounted) return;
			setLiveProduct(result.data);
			setIsConfigured(result.configured);
			setLoadError(result.error);
			setLoadingProduct(false);
		});
		return () => {
			mounted = false;
		};
	}, [slug]);
	const product = liveProduct ?? (!isConfigured && staticProduct ? {
		slug: staticProduct.slug,
		name: staticProduct.name,
		description: `Ask for ${staticProduct.name} availability, pack sizes, crop suitability, and usage guidance at Agrocops Chelakkara.`,
		category: staticProduct.category,
		stock_status: staticProduct.stockStatus,
		pack_sizes: staticProduct.packSizes.split(",").map((item) => item.trim()),
		brand: staticProduct.brand,
		price_range: staticProduct.priceRange,
		featured_crop: staticProduct.featuredCrop
	} : null);
	if (loadingProduct && isConfigured) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[linear-gradient(135deg,#fffdf7_0%,#edf5e8_100%)] py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "premium-container max-w-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-bold text-muted-foreground",
				children: "Loading product..."
			})
		})
	});
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[linear-gradient(135deg,#fffdf7_0%,#edf5e8_100%)] py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "premium-container max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "text-sm font-bold text-muted-foreground",
					"aria-label": "Breadcrumb",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hover:text-primary",
							href: "/",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-2",
							"aria-hidden": "true",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hover:text-primary",
							href: "/products",
							children: "Products"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "premium-heading mt-6 text-primary",
					children: "Product not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "premium-copy mt-5",
					children: "This product page is not available yet. Browse the product catalog or WhatsApp Agrocops Chelakkara for current stock and recommendations."
				}),
				loadError ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 rounded-md bg-red-50 p-4 text-sm font-semibold text-red-700",
					children: ["Unable to load product: ", loadError]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
						label: "Ask on WhatsApp",
						context: "product",
						title: "Unknown product"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: buttonClassName({
							variant: "outline",
							size: "lg"
						}),
						href: "/products",
						children: "View Products"
					})]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden bg-[linear-gradient(135deg,#fffdf7_0%,#edf5e8_60%,#ffffff_100%)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "premium-container grid gap-10 py-16 md:py-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,0.75fr)] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mb-6 text-sm font-bold text-muted-foreground",
						"aria-label": "Breadcrumb",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hover:text-primary",
								href: "/",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2",
								"aria-hidden": "true",
								children: "/"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "hover:text-primary",
								href: "/products",
								children: "Products"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2",
								"aria-hidden": "true",
								children: "/"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: product.name
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "premium-eyebrow",
						children: product.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "premium-heading mt-4 text-primary",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "premium-copy mt-5 max-w-2xl",
						children: product.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
								label: "WhatsApp product inquiry",
								context: "product",
								title: product.name,
								cropType: product.featured_crop ?? void 0
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
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "hover-lift image-zoom overflow-hidden border-white/70 bg-white shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] overflow-hidden bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "h-full w-full object-cover",
							src: product.images?.[0] ?? productImages[product.slug] ?? "/products/organic-fertilizers.webp",
							alt: `${product.name} at Agrocops Chelakkara`,
							loading: "eager"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid gap-4 p-6 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-bold text-foreground",
								children: "Stock status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-muted-foreground",
								children: formatStock(product.stock_status)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-bold text-foreground",
								children: "Pack sizes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-muted-foreground",
								children: formatList(product.pack_sizes)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-bold text-foreground",
								children: "Brand"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-muted-foreground",
								children: product.brand ?? "Agrocops"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-bold text-foreground",
								children: "Price range"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-muted-foreground",
								children: product.price_range ?? "On request"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-bold text-foreground",
								children: "Featured crop"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-muted-foreground",
								children: product.featured_crop ?? "Ask for guidance"
							})] })
						]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "premium-container grid gap-8 lg:grid-cols-[1fr_0.72fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-2",
					children: [
						{
							title: "Benefits",
							copy: formatList(product.benefits)
						},
						{
							title: "Application",
							copy: product.application ?? "Ask Agrocops for crop-stage guidance, dosage, and timing before use."
						},
						{
							title: "Suitable Crops",
							copy: formatList(product.suitable_crops)
						},
						{
							title: "FAQs",
							copy: "Ask Agrocops for crop-stage guidance, safe usage, and suitable alternatives before purchase."
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "surface-soft p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "size-6 text-accent",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-2xl font-extrabold text-primary",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base leading-7 text-muted-foreground",
								children: item.copy
							})
						]
					}, item.title))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadCaptureForm, {
					leadType: "product_inquiry",
					inquirySource: "product_detail"
				})]
			})
		})]
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
export { ProductDetailPage as component };
