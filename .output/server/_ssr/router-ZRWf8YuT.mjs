import "../_runtime.mjs";
import { n as pageIntro, t as officialProductCategories } from "./site-content-kdN7BxgY.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { O as require_jsx_runtime, c as lazyRouteComponent, l as createFileRoute, n as Scripts, o as createRouter, r as HeadContent, s as Outlet, u as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as buttonClassName } from "./button-DrsB15xH.mjs";
import { _ as MapPin, g as Menu, h as MessageCircle, m as Phone } from "../_libs/lucide-react.mjs";
import { a as createWhatsAppUrl, n as InlineEmergencyCropHelpCta, o as siteConfig, r as MobileQuickActions, t as EmergencyCropHelpCta } from "./whatsapp-cta-qvALClaP.mjs";
import { n as seo, t as getCanonicalUrl } from "./metadata-BUTat0y8.mjs";
import { t as Route$12 } from "./knowledge-center._slug--pfnvoQo.mjs";
import { t as Route$13 } from "./products._slug-Belja4f2.mjs";
import { t as Route$14 } from "./service-areas._area-BBLSCahR.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
siteConfig.phoneHref, siteConfig.directionsUrl;
officialProductCategories.map((category) => ({
	title: category.title,
	description: category.description,
	featuredCrop: category.relatedCropRecommendations[0]
}));
var serviceAreas = [
	"Chelakkara",
	"Pazhayannur",
	"Wadakkanchery",
	"Vallathol Nagar",
	"Shoranur"
];
siteConfig.phone, siteConfig.address, siteConfig.hours;
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t bg-primary text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "premium-container grid gap-10 py-14 md:grid-cols-[1.25fr_0.8fr_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "size-20 shrink-0 rounded-2xl bg-white object-contain p-2 shadow-[0_18px_50px_rgba(0,0,0,0.16)]",
						src: siteConfig.logoPath,
						alt: "Agrocops Official Logo",
						width: "80",
						height: "80",
						loading: "lazy",
						decoding: "async"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-black uppercase tracking-[0.08em]",
						children: siteConfig.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-black uppercase tracking-[0.14em] text-accent",
						children: "An Agrocops Franchise Outlet"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-md text-base leading-7 text-primary-foreground/78",
					children: "Product-first agricultural support, seasonal guidance, and farmer community growth for Chelakkara and nearby service areas."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-black uppercase tracking-[0.14em] text-accent",
					children: "Service Areas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-2 text-base text-primary-foreground/78",
					children: serviceAreas.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: area }, area))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-black uppercase tracking-[0.14em] text-accent",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-3 text-base text-primary-foreground/78",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "inline-flex items-center gap-2 hover:text-white",
							href: siteConfig.phoneHref,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "size-4",
								"aria-hidden": "true"
							}), siteConfig.phone]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "inline-flex items-center gap-2 hover:text-white",
							href: createWhatsAppUrl({
								context: "general",
								title: "Footer contact"
							}),
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								className: "size-4",
								"aria-hidden": "true"
							}), "WhatsApp Agrocops"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "mt-1 size-4",
								"aria-hidden": "true"
							}), siteConfig.address]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/12 py-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "premium-container flex flex-col gap-2 text-xs text-primary-foreground/68 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Agrocops Chelakkara. All rights reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SEO-first platform for products, advisory, community, and local trust." })]
			})
		})]
	});
}
var navItems = [
	{
		label: "Products",
		href: "/products"
	},
	{
		label: "Advisory",
		href: "/crop-advisory"
	},
	{
		label: "Knowledge",
		href: "/knowledge-center"
	},
	{
		label: "Community",
		href: "/community"
	},
	{
		label: "Events",
		href: "/events"
	},
	{
		label: "Contact",
		href: "/contact"
	}
];
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main-content",
			className: "focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-4 focus:py-2",
			children: "Skip to main content"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "premium-container flex min-h-[4.75rem] items-center justify-between gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/",
					className: "focus-ring flex min-w-0 shrink-0 items-center gap-2 rounded-xl sm:gap-3",
					"aria-label": "Agrocops Chelakkara home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "size-12 shrink-0 object-contain sm:size-14",
						src: siteConfig.logoPath,
						alt: "Agrocops Official Logo",
						width: "56",
						height: "56",
						decoding: "async"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden whitespace-nowrap text-sm font-black uppercase tracking-[0.08em] text-primary sm:block md:text-lg",
								children: "AGROCOPS CHELAKKARA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block whitespace-nowrap text-sm font-black uppercase tracking-[0.08em] text-primary sm:hidden",
								children: "Chelakkara"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-xs font-bold text-muted-foreground sm:block",
								children: siteConfig.tagline
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Primary",
					children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "focus-ring rounded-full px-3.5 py-2 text-sm font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
						href: item.href,
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: buttonClassName({
								variant: "outline",
								size: "sm",
								className: "hidden rounded-full lg:inline-flex"
							}),
							href: siteConfig.phoneHref,
							"data-analytics-event": "call_click",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Call"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: buttonClassName({
								variant: "outline",
								size: "sm",
								className: "hidden rounded-full xl:inline-flex"
							}),
							href: siteConfig.directionsUrl,
							target: "_blank",
							rel: "noreferrer",
							"data-analytics-event": "directions_click",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Directions"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: buttonClassName({
								variant: "primary",
								size: "sm",
								className: "rounded-full shadow-[0_14px_28px_rgba(11,122,42,0.18)]"
							}),
							href: createWhatsAppUrl({
								context: "community",
								title: "Header CTA"
							}),
							target: "_blank",
							rel: "noreferrer",
							"data-analytics-event": "whatsapp_click",
							"data-whatsapp-context": "header",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								className: "size-4",
								"aria-hidden": "true"
							}), "WhatsApp"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "relative lg:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
								className: buttonClassName({
									variant: "ghost",
									size: "icon",
									className: "list-none [&::-webkit-details-marker]:hidden"
								}),
								"aria-label": "Open navigation",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
									className: "size-5",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "absolute right-0 top-14 grid w-72 gap-1 rounded-2xl border bg-card p-2 shadow-soft",
								"aria-label": "Mobile",
								children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "focus-ring rounded-md px-3 py-3 text-sm font-semibold text-muted-foreground hover:bg-muted hover:text-foreground",
									href: item.href,
									children: item.label
								}, item.href))
							})]
						})
					]
				})
			]
		})]
	});
}
function AppLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background pb-16 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main-content",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineEmergencyCropHelpCta, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmergencyCropHelpCta, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileQuickActions, {})
		]
	});
}
var app_default = "/assets/app-DhvYsTWC.css";
function StructuredData() {
	const localBusiness = {
		"@context": "https://schema.org",
		"@type": ["LocalBusiness", "Store"],
		name: siteConfig.name,
		description: siteConfig.description,
		url: siteConfig.siteUrl,
		telephone: siteConfig.phone,
		email: siteConfig.email,
		address: {
			"@type": "PostalAddress",
			streetAddress: "Opposite BSNL Telephone Exchange, Venganellur P.O.",
			addressLocality: "Chelakkara",
			addressRegion: "Kerala",
			addressCountry: "IN",
			addressDistrict: "Thrissur"
		},
		geo: {
			"@type": "GeoCoordinates",
			address: siteConfig.address
		},
		hasMap: siteConfig.directionsUrl,
		openingHoursSpecification: [{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
				"Sunday"
			],
			opens: "09:00",
			closes: "20:00"
		}],
		areaServed: [
			"Chelakkara",
			"Pazhayannur",
			"Wadakkanchery",
			"Vallathol Nagar",
			"Shoranur"
		],
		openingHours: "Mo-Su 09:00-20:00",
		sameAs: [siteConfig.directionsUrl]
	};
	const organization = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: siteConfig.name,
		url: siteConfig.siteUrl,
		slogan: siteConfig.tagline,
		contactPoint: {
			"@type": "ContactPoint",
			telephone: siteConfig.phone,
			contactType: "customer support",
			areaServed: "IN",
			availableLanguage: ["English", "Malayalam"]
		}
	};
	const product = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: "Agricultural products and farm inputs",
		brand: siteConfig.name,
		category: [
			"Organic Fertilizers",
			"Organic Pesticides",
			"Waste Treatment Agents",
			"Grow Bags",
			"Nursery Bags",
			"Sprayers",
			"Garden Tools",
			"Vegetable Seeds",
			"Flower Seeds",
			"Garden Pots & Containers"
		],
		description: "Organic fertilizers, organic pesticides, waste treatment agents, grow bags, nursery bags, sprayers, garden tools, vegetable seeds, flower seeds, and garden pots available through Agrocops Chelakkara.",
		areaServed: "Thrissur, Kerala"
	};
	const article = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: "Kerala farming knowledge and crop advisory",
		publisher: {
			"@type": "Organization",
			name: siteConfig.name
		},
		about: [
			"Organic farming Kerala",
			"Terrace gardening Kerala",
			"Crop advisory"
		]
	};
	const event = {
		"@context": "https://schema.org",
		"@type": "Event",
		name: "Agrocops farming workshops and advisory days",
		startDate: "2026-06-15T10:00:00+05:30",
		description: "Practical agriculture workshops, crop advisory days, and kitchen garden sessions hosted by Agrocops Chelakkara.",
		eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
		eventStatus: "https://schema.org/EventScheduled",
		location: {
			"@type": "Place",
			name: siteConfig.name,
			address: {
				"@type": "PostalAddress",
				streetAddress: "Opposite BSNL Telephone Exchange, Venganellur P.O.",
				addressLocality: "Chelakkara",
				addressRegion: "Kerala",
				addressCountry: "IN"
			}
		},
		organizer: {
			"@type": "Organization",
			name: siteConfig.name,
			url: siteConfig.siteUrl
		}
	};
	const faq = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "Where is Agrocops Chelakkara located?",
				acceptedAnswer: {
					"@type": "Answer",
					text: siteConfig.address
				}
			},
			{
				"@type": "Question",
				name: "Can I ask for crop guidance on WhatsApp?",
				acceptedAnswer: {
					"@type": "Answer",
					text: `Yes. Contact Agrocops Chelakkara on WhatsApp or call ${siteConfig.phone} for crop guidance and product inquiries.`
				}
			},
			{
				"@type": "Question",
				name: "What are the shop hours?",
				acceptedAnswer: {
					"@type": "Answer",
					text: siteConfig.hours
				}
			}
		]
	};
	const breadcrumb = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: siteConfig.siteUrl
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Products",
				item: `${siteConfig.siteUrl}/products`
			},
			{
				"@type": "ListItem",
				position: 3,
				name: "Contact",
				item: `${siteConfig.siteUrl}/contact`
			}
		]
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify([
			localBusiness,
			organization,
			product,
			article,
			event,
			faq,
			breadcrumb
		]) }
	});
}
var Route$11 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "theme-color",
				content: "#0B7A2A"
			},
			...seo()
		],
		links: [
			{
				rel: "stylesheet",
				href: app_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				sizes: "any"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/icons/favicon-16x16.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/icons/favicon-32x32.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "48x48",
				href: "/icons/favicon-48x48.png"
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/icons/apple-touch-icon.png"
			},
			{
				rel: "manifest",
				href: "/site.webmanifest"
			}
		]
	}),
	component: RootComponent
});
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootDocument, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) });
}
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StructuredData, {}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$10 = () => import("./products-nAub6nj7.mjs");
var Route$10 = createFileRoute("/products")({
	head: () => ({
		meta: seo({
			title: "Agricultural Products Chelakkara | Agrocops Product Catalog",
			description: "Explore organic fertilizers, organic pesticides, waste treatment agents, grow bags, nursery bags, sprayers, seeds, garden tools, pots, and containers at Agrocops Chelakkara.",
			path: "/products"
		}),
		links: [{
			rel: "canonical",
			href: getCanonicalUrl("/products")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./knowledge-center-D7agOr2U.mjs");
var Route$9 = createFileRoute("/knowledge-center")({
	head: () => ({
		meta: seo({
			title: "Organic Farming Kerala Knowledge Center | Agrocops Chelakkara",
			description: "Read practical Kerala farming articles on organic fertilizers, monsoon crop care, terrace gardening, plant nutrition, and seasonal recommendations.",
			path: "/knowledge-center"
		}),
		links: [{
			rel: "canonical",
			href: getCanonicalUrl("/knowledge-center")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./gallery-BdD0OCfI.mjs");
var Route$8 = createFileRoute("/gallery")({
	head: () => ({
		meta: seo({
			title: "Agrocops Chelakkara Gallery | Farms, Workshops & Harvests",
			description: "View Agrocops Chelakkara farms, workshops, products, farmers, harvests, and community agriculture moments.",
			path: "/gallery"
		}),
		links: [{
			rel: "canonical",
			href: getCanonicalUrl("/gallery")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./events-CYj9E3UH.mjs");
var Route$7 = createFileRoute("/events")({
	head: () => ({
		meta: seo({
			title: "Agrocops Chelakkara Events | Agriculture Workshops",
			description: "Register for Agrocops Chelakkara workshops, crop advisory days, kitchen garden sessions, and seasonal farming events.",
			path: "/events"
		}),
		links: [{
			rel: "canonical",
			href: getCanonicalUrl("/events")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./crop-advisory-C9IM5C_9.mjs");
var Route$6 = createFileRoute("/crop-advisory")({
	head: () => ({
		meta: seo({
			title: "Agrocops Chelakkara Farm Advisory | Crop Help",
			description: "Get crop advisory for coconut, banana, vegetables, pepper, arecanut, terrace gardens, and urgent WhatsApp crop help from Agrocops Chelakkara.",
			path: "/crop-advisory"
		}),
		links: [{
			rel: "canonical",
			href: getCanonicalUrl("/crop-advisory")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./contact-CUoTiQDz.mjs");
var Route$5 = createFileRoute("/contact")({
	head: () => ({
		meta: seo({
			title: "Contact Agrocops Chelakkara | Call, WhatsApp & Directions",
			description: "Call or WhatsApp Agrocops Chelakkara at +91 97449 20187, get directions to Venganellur, and submit agriculture product inquiries.",
			path: "/contact"
		}),
		links: [{
			rel: "canonical",
			href: getCanonicalUrl("/contact")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./community-DrH3doRk.mjs");
var Route$4 = createFileRoute("/community")({
	head: () => ({
		meta: seo({
			title: "Agrocops WhatsApp Farmer Community | Chelakkara",
			description: "Join the Agrocops Chelakkara farmer community for WhatsApp updates, seasonal guidance, workshops, farmer stories, and gardening support.",
			path: "/community"
		}),
		links: [{
			rel: "canonical",
			href: getCanonicalUrl("/community")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./about-ohx2g66v.mjs");
var Route$3 = createFileRoute("/about")({
	head: () => ({
		meta: seo({
			title: "About Agrocops Chelakkara | Agriculture Community & Advisory",
			description: pageIntro.about.description,
			path: "/about"
		}),
		links: [{
			rel: "canonical",
			href: getCanonicalUrl("/about")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./routes-gMbw3yEJ.mjs");
var Route$2 = createFileRoute("/")({
	head: () => ({
		meta: seo({
			title: "Agrocops Chelakkara | Agrocops Outlet, Organic Inputs & Crop Advisory",
			description: "Visit Agrocops Chelakkara near BSNL Telephone Exchange, Venganellur for official Agrocops product categories, crop advisory, WhatsApp support, and local farmer community services.",
			path: "/"
		}),
		links: [{
			rel: "canonical",
			href: getCanonicalUrl("/")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./admin.index-CWJnpwtT.mjs");
var Route$1 = createFileRoute("/admin/")({
	head: () => ({
		meta: seo({
			title: "Agrocops Admin Dashboard Architecture",
			description: "Supabase-backed admin modules for products, blogs, crop guides, events, leads, community, stories, gallery, and reviews.",
			path: "/admin",
			noIndex: true
		}),
		links: [{
			rel: "canonical",
			href: getCanonicalUrl("/admin")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./admin.login-DJK5Lv7g.mjs");
var Route = createFileRoute("/admin/login")({
	head: () => ({
		meta: seo({
			title: "Agrocops Admin Login",
			description: "Protected admin login for Agrocops Chelakkara.",
			path: "/admin/login",
			noIndex: true
		}),
		links: [{
			rel: "canonical",
			href: getCanonicalUrl("/admin/login")
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ProductsRoute = Route$10.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$11
});
var KnowledgeCenterRoute = Route$9.update({
	id: "/knowledge-center",
	path: "/knowledge-center",
	getParentRoute: () => Route$11
});
var GalleryRoute = Route$8.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$11
});
var EventsRoute = Route$7.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$11
});
var CropAdvisoryRoute = Route$6.update({
	id: "/crop-advisory",
	path: "/crop-advisory",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$5.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var CommunityRoute = Route$4.update({
	id: "/community",
	path: "/community",
	getParentRoute: () => Route$11
});
var AboutRoute = Route$3.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$11
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var AdminIndexRoute = Route$1.update({
	id: "/admin/",
	path: "/admin/",
	getParentRoute: () => Route$11
});
var ServiceAreasAreaRoute = Route$14.update({
	id: "/service-areas/$area",
	path: "/service-areas/$area",
	getParentRoute: () => Route$11
});
var ProductsSlugRoute = Route$13.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ProductsRoute
});
var KnowledgeCenterSlugRoute = Route$12.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => KnowledgeCenterRoute
});
var AdminLoginRoute = Route.update({
	id: "/admin/login",
	path: "/admin/login",
	getParentRoute: () => Route$11
});
var KnowledgeCenterRouteChildren = { KnowledgeCenterSlugRoute };
var KnowledgeCenterRouteWithChildren = KnowledgeCenterRoute._addFileChildren(KnowledgeCenterRouteChildren);
var ProductsRouteChildren = { ProductsSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CommunityRoute,
	ContactRoute,
	CropAdvisoryRoute,
	EventsRoute,
	GalleryRoute,
	KnowledgeCenterRoute: KnowledgeCenterRouteWithChildren,
	ProductsRoute: ProductsRoute._addFileChildren(ProductsRouteChildren),
	AdminLoginRoute,
	ServiceAreasAreaRoute,
	AdminIndexRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent"
	});
}
//#endregion
export { getRouter };
