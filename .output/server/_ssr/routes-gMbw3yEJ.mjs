import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { O as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as buttonClassName } from "./button-DrsB15xH.mjs";
import { E as BookOpen, _ as MapPin, a as Sprout, c as ShieldCheck, h as MessageCircle, m as Phone, o as Sparkles, r as Store, t as Users, w as CircleCheck, x as Leaf } from "../_libs/lucide-react.mjs";
import { a as createWhatsAppUrl, i as WhatsappCta, o as siteConfig } from "./whatsapp-cta-qvALClaP.mjs";
import { t as Badge } from "./badge-lZbx36Mz.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
import { c as fetchPublishedSuccessStories, s as fetchPublishedProducts, t as emptyPublicContent } from "./public-content-repository-ptidobj4.mjs";
import { t as LeadCaptureForm } from "./lead-capture-form-DV4RjXLM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-gMbw3yEJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var growerIntents = [
	{
		title: "Vegetables",
		image: "/products/vegetable-seeds.webp",
		copy: "Seeds, nutrition, organic pest care"
	},
	{
		title: "Flowers",
		image: "/products/flower-seeds.webp",
		copy: "Flower seeds, pots, seasonal care"
	},
	{
		title: "Home Garden",
		image: "/products/garden-pots.webp",
		copy: "Pots, tools, potting support"
	},
	{
		title: "Terrace Garden",
		image: "/products/grow-bags.webp",
		copy: "Grow bags, soil mix, starter inputs"
	},
	{
		title: "Organic Farming",
		image: "/products/organic-fertilizers.webp",
		copy: "Organic inputs and crop guidance"
	}
];
var solutionCategories = [
	{
		title: "Organic Fertilizers",
		image: "/products/organic-fertilizers.webp",
		crop: "Coconut"
	},
	{
		title: "Organic Pesticides",
		image: "/products/organic-pesticides.webp",
		crop: "Vegetables"
	},
	{
		title: "Vegetable Seeds",
		image: "/products/vegetable-seeds.webp",
		crop: "Kitchen Garden"
	},
	{
		title: "Flower Seeds",
		image: "/products/flower-seeds.webp",
		crop: "Flower Garden"
	},
	{
		title: "Grow Bags",
		image: "/products/grow-bags.webp",
		crop: "Terrace Garden"
	},
	{
		title: "Garden Pots",
		image: "/products/garden-pots.webp",
		crop: "Home Garden"
	},
	{
		title: "Sprayers",
		image: "/products/sprayers.webp",
		crop: "Crop Care"
	},
	{
		title: "Garden Tools",
		image: "/products/garden-tools.webp",
		crop: "Daily Garden Work"
	},
	{
		title: "Composting Products",
		image: "/products/inoculum-mix.webp",
		crop: "Waste Treatment"
	}
];
var featuredProducts = [
	{
		name: "Fish Amino Acid",
		category: "Plant Growth Promoter",
		image: "/products/organic-pesticides.webp"
	},
	{
		name: "Agrocops Vigor",
		category: "Organic Input",
		image: "/products/organic-pesticides.webp"
	},
	{
		name: "Agrocops Shield",
		category: "Organic Crop Care",
		image: "/products/organic-pesticides.webp"
	},
	{
		name: "Bone Meal",
		category: "Organic Fertilizer",
		image: "/products/organic-fertilizers.webp"
	},
	{
		name: "Potting Mix",
		category: "Home Garden",
		image: "/products/organic-fertilizers.webp"
	},
	{
		name: "Inoculum Mix",
		category: "Composting Product",
		image: "/products/inoculum-mix.webp"
	}
];
var advantages = [
	{
		label: "Genuine Products",
		icon: CircleCheck
	},
	{
		label: "Expert Guidance",
		icon: ShieldCheck
	},
	{
		label: "Agrocops Network",
		icon: Sparkles
	},
	{
		label: "Community Support",
		icon: Users
	},
	{
		label: "Organic Solutions",
		icon: Leaf
	}
];
var networkPillars = [
	{
		title: "Economics",
		copy: "Better input decisions for practical farm value.",
		icon: Store
	},
	{
		title: "Education",
		copy: "Clear guidance for farmers and home gardeners.",
		icon: BookOpen
	},
	{
		title: "Extension",
		copy: "Local WhatsApp support and store-level follow-up.",
		icon: Sprout
	}
];
var successStories = [
	{
		name: "Farmer Recognition",
		location: "Chelakkara",
		quote: "Local growers get product support, seasonal reminders, and community visibility."
	},
	{
		name: "Kitchen Garden Support",
		location: "Venganellur",
		quote: "Home gardeners can start with seeds, grow bags, nutrition, and WhatsApp advice."
	},
	{
		name: "Crop Help Pathway",
		location: "Thrissur",
		quote: "Farmers can share symptoms and visit the outlet with more confidence."
	}
];
function HomePage() {
	const [liveProducts, setLiveProducts] = (0, import_react.useState)(emptyPublicContent());
	const [liveStories, setLiveStories] = (0, import_react.useState)(emptyPublicContent());
	(0, import_react.useEffect)(() => {
		let mounted = true;
		Promise.all([fetchPublishedProducts(), fetchPublishedSuccessStories()]).then(([products, stories]) => {
			if (!mounted) return;
			setLiveProducts(products);
			setLiveStories(stories);
		});
		return () => {
			mounted = false;
		};
	}, []);
	const homepageProducts = liveProducts.data.length > 0 ? liveProducts.data.slice(0, 6).map((product) => ({
		name: product.name,
		category: product.category ?? "Agrocops product",
		image: product.images?.[0] ?? "/products/organic-fertilizers.webp"
	})) : featuredProducts;
	const homepageStories = liveStories.data.length > 0 ? liveStories.data.slice(0, 3).map((story) => ({
		name: story.farmer_name,
		location: story.village ?? "Local grower",
		quote: story.story
	})) : successStories;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrowerExplorerSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolutionsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProductsSection, { products: homepageProducts }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdvantageSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeasonalFocusSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunitySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoriesSection, { stories: homepageStories }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationSection, {})
	] });
}
function HeroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-[calc(100vh-4.75rem)] overflow-hidden bg-[radial-gradient(circle_at_80%_10%,rgba(216,139,0,0.16),transparent_28%),linear-gradient(135deg,hsl(var(--background)),hsl(var(--muted)))]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-primary/10 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "premium-container grid min-h-[calc(100vh-4.75rem)] items-center gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal-soft max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-3 rounded-full border bg-white/80 px-4 py-2 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "size-9 object-contain",
							src: siteConfig.logoPath,
							alt: "Agrocops Official Logo",
							width: "36",
							height: "36"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-black uppercase tracking-[0.18em] text-primary",
							children: "An Agrocops Franchise Outlet"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-8 text-6xl font-black leading-[0.9] tracking-normal text-primary sm:text-7xl lg:text-8xl",
						children: ["Grow Better.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-foreground",
							children: "Harvest Smarter."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-7 max-w-2xl text-xl font-bold leading-9 text-muted-foreground md:text-2xl",
						children: ["Organic Inputs. Quality Seeds. Expert Guidance.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-foreground",
							children: "For Farmers & Home Gardeners."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-col gap-3 sm:flex-row",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
								label: "WhatsApp Us",
								context: "general",
								title: "Homepage hero",
								variant: "primary",
								className: "rounded-full px-7"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: buttonClassName({
									variant: "outline",
									size: "lg",
									className: "rounded-full bg-white/70 px-7"
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
									variant: "accent",
									size: "lg",
									className: "rounded-full px-7"
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal-soft relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group overflow-hidden rounded-[2rem] border bg-white shadow-[0_34px_100px_rgba(19,53,31,0.16)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "image-zoom aspect-[4/3] w-full object-cover",
						src: "/products/organic-fertilizers.webp",
						alt: "Agrocops organic fertilizer product packs",
						width: "900",
						height: "675",
						fetchPriority: "high"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 p-5 sm:grid-cols-3",
						children: [
							["Open", siteConfig.hours],
							["Location", "Venganellur, Chelakkara"],
							["Support", "WhatsApp crop advice"]
						].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-muted p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-black uppercase tracking-[0.16em] text-muted-foreground",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm font-black text-foreground",
								children: value
							})]
						}, label))
					})]
				})]
			})]
		})]
	});
}
function GrowerExplorerSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "premium-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
				eyebrow: "What do you grow?",
				title: "Start with your garden, crop, or field.",
				copy: "Choose a growing need and ask Agrocops Chelakkara for the right inputs."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-5",
				children: growerIntents.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "group hover-lift focus-ring overflow-hidden rounded-3xl border bg-card",
					href: createWhatsAppUrl({
						context: "crop-guide",
						title: `I grow ${item.title}`,
						cropType: item.title
					}),
					target: "_blank",
					rel: "noreferrer",
					"data-analytics-event": "whatsapp_click",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "image-zoom aspect-[4/3] w-full object-cover",
						src: item.image,
						alt: `${item.title} support from Agrocops Chelakkara`,
						width: "360",
						height: "270",
						loading: "lazy",
						decoding: "async"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-black",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-semibold text-muted-foreground",
							children: item.copy
						})]
					})]
				}, item.title))
			})]
		})
	});
}
function SolutionsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-muted/55",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "premium-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
				eyebrow: "Recommended solutions",
				title: "Official Agrocops categories, ready for local guidance.",
				copy: "Visual product categories with quick WhatsApp inquiry for availability, pack size, and crop fit."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: solutionCategories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "group hover-lift overflow-hidden rounded-3xl p-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "image-zoom aspect-[16/10] w-full object-cover",
						src: item.image,
						alt: `${item.title} available through Agrocops Chelakkara`,
						width: "560",
						height: "350",
						loading: "lazy",
						decoding: "async"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "green",
								children: item.crop
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-2xl font-black",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
								label: "Ask availability",
								context: "product",
								title: item.title,
								cropType: item.crop,
								variant: "outline",
								className: "mt-5 w-full rounded-full"
							})
						]
					})]
				}, item.title))
			})]
		})
	});
}
function FeaturedProductsSection({ products }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "premium-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-5 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
					eyebrow: "Featured products",
					title: "Premium inputs for farms and gardens.",
					copy: "Swipe through popular Agrocops products and ask the outlet for current availability."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
					label: "Ask for product list",
					context: "product",
					title: "Featured product carousel",
					variant: "primary",
					className: "rounded-full"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]",
				children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "group hover-lift min-w-[280px] snap-start overflow-hidden rounded-3xl p-0 sm:min-w-[360px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "image-zoom aspect-[4/3] w-full object-cover",
						src: product.image,
						alt: `${product.name} product at Agrocops Chelakkara`,
						width: "480",
						height: "360",
						loading: "lazy",
						decoding: "async"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "premium-eyebrow",
								children: product.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-2xl font-black",
								children: product.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
								label: "Product inquiry",
								context: "product",
								title: product.name,
								variant: "outline",
								className: "mt-5 w-full rounded-full"
							})
						]
					})]
				}, product.name))
			})]
		})
	});
}
function AdvantageSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "premium-container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-black uppercase tracking-[0.18em] text-accent",
					children: "Agrocops advantage"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-4xl font-black leading-tight md:text-6xl",
					children: "Simple reasons farmers choose us."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
					children: advantages.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-white/14 bg-white/10 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
							className: "size-7 text-accent",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-lg font-black",
							children: item.label
						})]
					}, item.label))
				})]
			})
		})
	});
}
function SeasonalFocusSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "premium-container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 rounded-[2rem] border bg-card p-6 shadow-[0_28px_90px_rgba(19,53,31,0.10)] md:grid-cols-[1fr_0.9fr] md:p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "premium-eyebrow",
						children: "Seasonal focus"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl font-black leading-tight md:text-5xl",
						children: "Monsoon-ready crop care."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 premium-copy",
						children: "Ask about drainage, fungal prevention, organic crop protection, soil conditioning, and emergency guidance."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
						label: "Need crop advice?",
						context: "emergency",
						title: "Seasonal monsoon crop care",
						variant: "accent",
						className: "mt-7 rounded-full"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3",
					children: [
						"Organic pesticides",
						"Sprayers",
						"Composting support"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-2xl bg-muted p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "size-5 text-secondary",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-black",
							children: item
						})]
					}, item))
				})]
			})
		})
	});
}
function NetworkSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-muted/55",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "premium-container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "group overflow-hidden rounded-[2rem] border bg-card shadow-[0_28px_90px_rgba(19,53,31,0.10)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "image-zoom aspect-[4/3] w-full object-cover",
					src: "/products/agrocops-network.webp",
					alt: "Agrocops network visual with agriculture ecosystem",
					width: "720",
					height: "540",
					loading: "lazy",
					decoding: "async"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "premium-eyebrow",
					children: "Agrocops Network"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-4xl font-black leading-tight md:text-6xl",
					children: "Economics. Education. Extension."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 premium-copy",
					children: "A local outlet experience backed by the wider Agrocops knowledge ecosystem and shaped for Chelakkara growers."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4",
					children: networkPillars.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 rounded-2xl bg-white p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary/12 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(pillar.icon, {
								className: "size-6",
								"aria-hidden": "true"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-black",
							children: pillar.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-semibold leading-6 text-muted-foreground",
							children: pillar.copy
						})] })]
					}, pillar.title))
				})
			] })]
		})
	});
}
function CommunitySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "premium-container grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-black uppercase tracking-[0.18em] text-accent",
					children: "Farmer community"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-4xl font-black leading-tight md:text-6xl",
					children: "Join local farming updates on WhatsApp."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/78",
					children: "Seasonal reminders, event updates, crop-care prompts, and product availability from Agrocops Chelakkara."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "bg-white p-6 text-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
						className: "size-9 text-secondary",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-2xl font-black",
						children: "WhatsApp Farming Community"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base leading-7 text-muted-foreground",
						children: "Built for farmers, terrace gardeners, families, and plant lovers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
						label: "Join Community",
						context: "community",
						title: "Homepage community panel",
						variant: "primary",
						className: "mt-6 w-full rounded-full"
					})
				]
			})]
		})
	});
}
function StoriesSection({ stories }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "premium-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIntro, {
				eyebrow: "Success stories",
				title: "Local growing wins deserve recognition.",
				copy: "Short, visual stories can become website features, community highlights, and event moments."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-3",
				children: stories.map((story) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "hover-lift rounded-3xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-14 items-center justify-center rounded-full bg-secondary/12 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
								className: "size-7",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-2xl font-black",
							children: story.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-bold text-accent",
							children: story.location
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-base leading-7 text-muted-foreground",
							children: [
								"\"",
								story.quote,
								"\""
							]
						})
					]
				}, story.name))
			})]
		})
	});
}
function LocationSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-muted/55",
		id: "contact",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "premium-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "premium-eyebrow",
					children: "Visit Agrocops Chelakkara"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-4xl font-black leading-tight md:text-6xl",
					children: "Call, WhatsApp, or visit the store."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4",
					children: [
						[
							"Phone",
							siteConfig.phone,
							Phone
						],
						[
							"Address",
							siteConfig.address,
							MapPin
						],
						[
							"Hours",
							siteConfig.hours,
							Store
						]
					].map(([label, value, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 rounded-2xl bg-white p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "mt-1 size-5 shrink-0 text-secondary",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-black uppercase tracking-[0.16em] text-muted-foreground",
							children: String(label)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-black leading-7",
							children: String(value)
						})] })]
					}, String(label)))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
						label: "WhatsApp Us",
						context: "general",
						title: "Homepage location",
						variant: "primary",
						className: "rounded-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: buttonClassName({
							variant: "accent",
							size: "lg",
							className: "rounded-full"
						}),
						href: siteConfig.directionsUrl,
						target: "_blank",
						rel: "noreferrer",
						"data-analytics-event": "directions_click",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							className: "size-5",
							"aria-hidden": "true"
						}), "Get Directions"]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "group focus-ring overflow-hidden rounded-[2rem] border bg-card shadow-[0_28px_90px_rgba(19,53,31,0.10)]",
					href: siteConfig.directionsUrl,
					target: "_blank",
					rel: "noreferrer",
					"data-analytics-event": "directions_click",
					"aria-label": "Open Agrocops Chelakkara location in Google Maps",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid min-h-80 place-items-center bg-[radial-gradient(circle_at_center,rgba(216,139,0,0.18),transparent_34%),linear-gradient(135deg,hsl(var(--background)),hsl(var(--muted)))] p-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "size-12 text-accent transition-transform duration-300 group-hover:-translate-y-1",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-3xl font-black text-primary",
								children: "Agrocops Chelakkara"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-lg text-base leading-7 text-muted-foreground",
								children: "Opposite BSNL Telephone Exchange, Venganellur P.O., Chelakkara"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 font-black text-primary underline underline-offset-4",
								children: "Open Google Maps"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadCaptureForm, {
					leadType: "general",
					inquirySource: "homepage_location"
				})]
			})]
		})
	});
}
function SectionIntro({ eyebrow, title, copy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "premium-eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 premium-heading",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 premium-copy",
				children: copy
			})
		]
	});
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
