import { D as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as buttonClassName } from "./button-DrsB15xH.mjs";
import { D as CalendarDays, c as Sprout, h as Phone, k as ArrowRight, y as MapPin } from "../_libs/lucide-react.mjs";
import { a as siteConfig, r as WhatsappCta } from "./whatsapp-cta-D8aqhAXQ.mjs";
import { t as Badge } from "./badge-lZbx36Mz.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
import { t as SectionHeading } from "./section-heading-BJigGknc.mjs";
import { t as LeadCaptureForm } from "./lead-capture-form-CJKMR9FQ.mjs";
import { a as events, c as productCategories, d as seasonalCampaigns, f as serviceAreas, g as upcomingCalendar, h as trustReasons, i as cropAdvisory, l as quickActions, m as trustMetrics, n as articles, o as networkImpact, p as stories, r as contactCards, s as outletAdvantages, t as agrocopsNetworkPillars, u as reviewHighlights } from "./home-content-CplDBPt-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B8EvucCs.js
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgrocopsNetworkSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnowledgeEcosystemSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CorePillarsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCategoriesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeasonalCampaignSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CropAdvisorySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnowledgeSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunitySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutletAdvantagesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkImpactSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceAreasSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
	] });
}
function AgrocopsNetworkSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-background",
		id: "agrocops-network",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "green",
					children: "About Agrocops Network"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-bold md:text-4xl",
					children: "Local Chelakkara service, connected to the wider Agrocops ecosystem"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-7 text-muted-foreground",
					children: "Agrocops Chelakkara is built as a local outlet identity for nearby farmers, home gardeners, and terrace growers. The experience connects store visits, WhatsApp guidance, organic inputs, and practical knowledge inspired by the parent Agrocops network."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
					label: "Ask Agrocops Chelakkara",
					context: "general",
					title: "Agrocops Network section",
					variant: "primary",
					className: "mt-6"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: networkImpact.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold uppercase text-muted-foreground",
							children: item.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-2xl font-extrabold text-primary",
							children: item.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-muted-foreground",
							children: item.description
						})
					]
				}, item.label))
			})]
		})
	});
}
function HeroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-primary text-primary-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 -z-10 bg-cover bg-center opacity-24",
				style: { backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80')" },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/90 to-primary/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 md:grid-cols-[1.05fr_0.95fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "yellow",
							children: "Agricultural Shop & Farm Advisory in Chelakkara"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 text-4xl font-extrabold leading-tight tracking-normal md:text-6xl",
							children: siteConfig.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/82 md:text-xl",
							children: "Visit Agrocops Chelakkara near the BSNL Telephone Exchange in Venganellur for agricultural products, terrace gardening supplies, seasonal crop advice, and WhatsApp support."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: buttonClassName({
									variant: "accent",
									size: "lg"
								}),
								href: "#contact",
								children: ["Contact Us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-5",
									"aria-hidden": "true"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
								label: "Join Community",
								context: "community",
								title: "Homepage hero community CTA",
								variant: "outline",
								className: "border-white/40 bg-white/10 text-white hover:bg-white/18"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-3 sm:grid-cols-3",
							children: quickActions.map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 text-sm font-semibold text-white transition-colors hover:bg-white/16",
								href: action.href === "#whatsapp" ? "#community" : action.href,
								target: action.label === "Get Directions" ? "_blank" : void 0,
								rel: action.label === "Get Directions" ? "noreferrer" : void 0,
								"data-analytics-event": action.label === "Get Directions" ? "directions_click" : action.label === "Call Now" ? "call_click" : "whatsapp_click",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(action.icon, {
									className: "size-4",
									"aria-hidden": "true"
								}), action.label]
							}, action.label))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "border-white/16 bg-white/92 p-5 text-foreground shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] overflow-hidden rounded-md bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "h-full w-full object-cover",
							src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
							alt: "Healthy farm field representing Agrocops crop support"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 grid gap-3 sm:grid-cols-2",
						children: upcomingCalendar.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md bg-muted p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase text-muted-foreground",
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-bold text-foreground",
								children: item.value
							})]
						}, item.label))
					})]
				})]
			})
		]
	});
}
function TrustSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-background",
		id: "trust",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Trust Layer",
					title: "Why farmers trust Agrocops",
					description: "The platform leads with local presence, advisory support, product quality, and visible community impact.",
					align: "center"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "mt-10 grid gap-5 p-5 md:grid-cols-[auto_1fr] md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "size-24 shrink-0 rounded-md bg-white object-contain p-2 shadow-sm",
						src: siteConfig.logoPath,
						alt: "Agrocops Official Logo",
						width: "96",
						height: "96",
						loading: "lazy",
						decoding: "async"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "green",
							children: "Part of the Agrocops Network"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-2xl font-extrabold",
							children: "Agrocops Chelakkara brings the wider Agrocops ecosystem closer to local growers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-muted-foreground",
							children: "The Chelakkara outlet keeps the relationship local while using Agrocops brand knowledge, official product categories, and farmer-first advisory principles to support store visits and WhatsApp guidance."
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: trustMetrics.map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl font-extrabold text-primary",
							children: metric.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm font-semibold text-muted-foreground",
							children: metric.label
						})]
					}, metric.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4",
					children: trustReasons.map((reason) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(reason.icon, {
								className: "size-6 text-secondary",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-lg font-bold",
								children: reason.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-muted-foreground",
								children: reason.description
							})
						]
					}, reason.title))
				})
			]
		})
	});
}
function KnowledgeEcosystemSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-muted/55",
		id: "knowledge-ecosystem",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Agrocops Knowledge Ecosystem",
				title: "Backed by product knowledge, local advisory, and farmer education",
				description: "The Chelakkara outlet is positioned as a practical front door to the wider Agrocops knowledge model: local crop conversations, central learning resources, and action-oriented recommendations.",
				align: "center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-3",
				children: agrocopsNetworkPillars.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(pillar.icon, {
							className: "size-6 text-secondary",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-xl font-bold",
							children: pillar.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-6 text-muted-foreground",
							children: pillar.description
						})
					]
				}, pillar.title))
			})]
		})
	});
}
function CorePillarsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-primary text-primary-foreground",
		id: "economics-education-extension",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "yellow",
					children: "Economics · Education · Extension"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-bold md:text-4xl",
					children: "Three practical pillars for better farming decisions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-7 text-primary-foreground/78",
					children: "Agrocops Chelakkara turns the parent network's core thinking into a local service model: help farmers reduce uncertainty, learn before buying, and get support after the first conversation."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: agrocopsNetworkPillars.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-white/14 bg-white/10 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(pillar.icon, {
							className: "size-6 text-accent",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-xl font-bold",
							children: pillar.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-6 text-primary-foreground/72",
							children: pillar.description
						})
					]
				}, pillar.title))
			})]
		})
	});
}
function ProductCategoriesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-muted/55",
		id: "products",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Products",
				title: "Product categories built for Kerala growing needs",
				description: "Ask about stock, pack sizes, brands, crop fit, and application guidance before visiting the store."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: productCategories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "green",
							children: category.featuredCrop
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-xl font-bold",
							children: category.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 min-h-16 text-sm leading-6 text-muted-foreground",
							children: category.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
							label: "Ask about products",
							context: "product",
							title: category.title,
							cropType: category.featuredCrop,
							variant: "outline",
							className: "mt-5 w-full"
						})
					]
				}, category.title))
			})]
		})
	});
}
function SeasonalCampaignSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-background",
		id: "seasonal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Campaign Engine",
				title: "Seasonal agriculture campaigns",
				description: "Campaigns power homepage modules, articles, product bundles, WhatsApp messages, and local offers."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: seasonalCampaigns.map((campaign) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "yellow",
								children: campaign.month
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
								className: "size-5 text-accent",
								"aria-hidden": "true"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-bold",
							children: campaign.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-muted-foreground",
							children: campaign.description
						})
					]
				}, campaign.title))
			})]
		})
	});
}
function CropAdvisorySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-primary text-primary-foreground",
		id: "advisory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "yellow",
					children: "Crop Advisory"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-bold md:text-4xl",
					children: "Practical guidance before product selection"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-7 text-primary-foreground/78",
					children: "Crop guides connect symptoms, crop type, seasonal context, and recommended products. Every guide includes urgent WhatsApp support."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
					label: "Need urgent crop guidance?",
					context: "emergency",
					title: "Crop advisory section",
					variant: "accent",
					className: "mt-6"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: cropAdvisory.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-white/14 bg-white/10 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, {
							className: "size-5 text-accent",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-bold",
							children: item
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-primary-foreground/72",
							children: "Searchable crop content with treatments, product suggestions, and WhatsApp escalation."
						})
					]
				}, item))
			})]
		})
	});
}
function KnowledgeSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-background",
		id: "knowledge",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Knowledge Center",
				title: "Content that brings search visitors into the community",
				description: "Read practical Kerala-focused articles on monsoon care, organic farming, crop nutrition, and terrace gardening."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-3",
				children: articles.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "neutral",
							children: article.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-bold",
							children: article.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: article.readTime
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
							label: "Ask after reading",
							context: "article",
							title: article.title,
							variant: "outline",
							className: "mt-5 w-full"
						})
					]
				}, article.title))
			})]
		})
	});
}
function CommunitySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-muted/55",
		id: "community",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Community",
				title: "A complete farmer recognition program",
				description: "Success stories can become website features, WhatsApp community highlights, social posts, and event recognition."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
				label: "Join WhatsApp Community",
				context: "community",
				title: "Homepage community funnel",
				variant: "primary",
				className: "mt-6"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: stories.map((story) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "brown",
							children: story.location
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-bold",
							children: story.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-muted-foreground",
							children: story.story
						})
					]
				}, story.name))
			})]
		})
	});
}
function EventsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-background",
		id: "events",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Events",
				title: "Workshops and advisory days that turn interest into store visits",
				description: "Events support registration, confirmation, attendance tracking, and follow-up lead status."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-2",
				children: events.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(event.icon, {
							className: "size-6 text-secondary",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "yellow",
							className: "mt-4",
							children: event.date
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-xl font-bold",
							children: event.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-muted-foreground",
							children: event.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
							label: "Ask about this event",
							context: "event",
							title: event.title,
							variant: "outline",
							className: "mt-5 w-full"
						})
					]
				}, event.title))
			})]
		})
	});
}
function OutletAdvantagesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-muted/55",
		id: "outlet-advantages",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Outlet Advantages",
				title: "Why an Agrocops outlet matters locally",
				description: "Agrocops Chelakkara combines local trust with network-backed knowledge, pricing discipline, advisory support, and repeat community engagement."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5",
				children: outletAdvantages.map((advantage) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(advantage.icon, {
							className: "size-6 text-secondary",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-bold",
							children: advantage.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-6 text-muted-foreground",
							children: advantage.description
						})
					]
				}, advantage.title))
			})]
		})
	});
}
function NetworkImpactSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-background",
		id: "network-impact",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Agrocops Network Impact",
				title: "Parent-brand strength, translated for Chelakkara farmers",
				description: "The local outlet can use network-level positioning around organic inputs, knowledge access, outlet reach, and sustainable farming to build confidence with nearby growers.",
				align: "center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4",
				children: networkImpact.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold uppercase text-muted-foreground",
							children: item.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-3xl font-extrabold text-primary",
							children: item.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-6 text-muted-foreground",
							children: item.description
						})
					]
				}, item.label))
			})]
		})
	});
}
function ServiceAreasSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-muted/55",
		id: "service-areas",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Local SEO",
				title: "Service area pages for nearby farming communities",
				description: "Dedicated pages will target local search intent with area-specific FAQs, products, directions, and WhatsApp deep links."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
				children: serviceAreas.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							className: "size-5 text-accent",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-bold",
							children: area
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "focus-ring mt-4 inline-flex text-sm font-bold text-primary underline-offset-4 hover:underline",
							href: `/service-areas/${area.toLowerCase().replaceAll(" ", "-")}`,
							children: "View area page"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
							label: "Ask locally",
							context: "service-area",
							serviceArea: area,
							title: `Agricultural support in ${area}`,
							variant: "outline",
							className: "mt-5 w-full px-3"
						})
					]
				}, area))
			})]
		})
	});
}
function ReviewsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-background",
		id: "reviews",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Reputation",
				title: "Google Business Profile content workflow",
				description: "Google review highlights, farmer recognition, and community stories help new customers choose Agrocops with confidence."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-2",
				children: reviewHighlights.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(review.icon, {
							className: "size-6 text-accent",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-bold",
							children: review.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-muted-foreground",
							children: review.description
						})
					]
				}, review.title))
			})]
		})
	});
}
function ContactSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-muted/55 pb-28 md:pb-20",
		id: "contact",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Contact",
				title: "Call, WhatsApp, or visit Agrocops Chelakkara",
				description: "Every contact action is prepared for analytics and lead pipeline tracking from new to converted or repeat customer."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-3 sm:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: buttonClassName({
							variant: "primary",
							size: "lg"
						}),
						href: siteConfig.phoneHref,
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
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
						label: "WhatsApp Us",
						context: "general",
						title: "Contact section",
						variant: "accent"
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 xl:grid-cols-[0.85fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-1",
					children: contactCards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(card.icon, {
								className: "size-5 text-secondary",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm font-bold uppercase text-muted-foreground",
								children: card.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-semibold",
								children: card.value
							})
						]
					}, card.label))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadCaptureForm, {
					leadType: "general",
					inquirySource: "homepage_contact"
				})]
			})]
		})
	});
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
