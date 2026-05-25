import { O as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as buttonClassName, r as cn } from "./button-DrsB15xH.mjs";
import { _ as MapPin, h as MessageCircle, m as Phone, s as Siren } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/whatsapp-cta-qvALClaP.js
var import_jsx_runtime = require_jsx_runtime();
var siteConfig = {
	name: "Agrocops Chelakkara",
	tagline: "Grow Better. Harvest Smarter.",
	description: "Agricultural products, crop advisory, seasonal farming guidance, and farmer community support from Agrocops Chelakkara in Venganellur, Thrissur.",
	phone: "+91 97449 20187",
	phoneHref: "tel:+919744920187",
	email: "agrocopschelakkara@gmail.com",
	address: "Opposite BSNL Telephone Exchange, Venganellur P.O., Chelakkara, Thrissur, Kerala, India",
	hours: "Monday-Sunday, 9:00 AM-8:00 PM",
	directionsUrl: "https://maps.app.goo.gl/A2RqdwULKuoS9j3a8",
	whatsappNumber: "919744920187",
	siteUrl: "https://www.agrocopschelakkara.com",
	logoPath: "/brand/agrocops-logo-256.png",
	logoFullPath: "/brand/agrocops-official-logo.png",
	ogImagePath: "/social/og-image.png",
	twitterImagePath: "/social/twitter-image.png"
};
var contextCopy = {
	product: "I want to inquire about this product",
	"crop-guide": "I need guidance based on this crop guide",
	article: "I read this article and need advice",
	event: "I want to register or know more about this event",
	"service-area": "I am looking for agricultural support in my area",
	emergency: "Need urgent crop guidance. Please help me now",
	community: "I want to join the Agrocops farmer community",
	general: "I want to contact Agrocops Chelakkara"
};
function createWhatsAppUrl(input = { context: "general" }) {
	const parts = [
		`Hello Agrocops, ${contextCopy[input.context]}.`,
		input.title ? `Reference: ${input.title}.` : "",
		input.cropType ? `Crop: ${input.cropType}.` : "",
		input.serviceArea ? `Location: ${input.serviceArea}.` : "",
		input.pagePath ? `Page: ${input.pagePath}.` : ""
	].filter(Boolean);
	return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(parts.join(" "))}`;
}
function WhatsappCta({ label = "WhatsApp Agrocops", context = "general", title, cropType, serviceArea, pagePath, variant = "primary", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		className: buttonClassName({
			variant,
			size: "lg",
			className
		}),
		href: createWhatsAppUrl({
			context,
			title,
			cropType,
			serviceArea,
			pagePath
		}),
		target: "_blank",
		rel: "noreferrer",
		"data-analytics-event": "whatsapp_click",
		"data-whatsapp-context": context,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
			className: "size-5",
			"aria-hidden": "true"
		}), label]
	});
}
function EmergencyCropHelpCta({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		className: cn("focus-ring fixed bottom-4 right-6 z-40 hidden min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-bold text-accent-foreground shadow-soft transition-colors hover:bg-accent/90 md:inline-flex", className),
		href: createWhatsAppUrl({
			context: "emergency",
			title: "Urgent crop guidance"
		}),
		target: "_blank",
		rel: "noreferrer",
		"data-analytics-event": "emergency_crop_help_click",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, {
			className: "size-5",
			"aria-hidden": "true"
		}), "Need urgent crop guidance? WhatsApp Agrocops now"]
	});
}
function InlineEmergencyCropHelpCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-accent/14 px-4 py-6 md:hidden",
		"aria-label": "Urgent crop guidance",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			className: "focus-ring mx-auto flex max-w-md items-center justify-center gap-2 rounded-md bg-accent px-4 py-4 text-center text-sm font-extrabold leading-6 text-accent-foreground shadow-soft",
			href: createWhatsAppUrl({
				context: "emergency",
				title: "Urgent crop guidance"
			}),
			target: "_blank",
			rel: "noreferrer",
			"data-analytics-event": "emergency_crop_help_click",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, {
				className: "size-5 shrink-0",
				"aria-hidden": "true"
			}), "Need urgent crop guidance? WhatsApp Agrocops now"]
		})
	});
}
function MobileQuickActions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t bg-card/98 shadow-soft backdrop-blur md:hidden",
		"aria-label": "Mobile quick actions",
		children: [
			{
				label: "WhatsApp",
				href: createWhatsAppUrl({
					context: "general",
					title: "Mobile quick action"
				}),
				icon: MessageCircle,
				event: "whatsapp_click",
				external: true
			},
			{
				label: "Call",
				href: siteConfig.phoneHref,
				icon: Phone,
				event: "call_click",
				external: false
			},
			{
				label: "Directions",
				href: siteConfig.directionsUrl,
				icon: MapPin,
				event: "directions_click",
				external: true
			}
		].map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			className: "focus-ring flex min-h-16 flex-col items-center justify-center gap-1 px-2 text-xs font-extrabold text-primary transition-colors hover:bg-muted",
			href: action.href,
			target: action.external ? "_blank" : void 0,
			rel: action.external ? "noreferrer" : void 0,
			"data-analytics-event": action.event,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(action.icon, {
				className: "size-5",
				"aria-hidden": "true"
			}), action.label]
		}, action.label))
	});
}
//#endregion
export { createWhatsAppUrl as a, WhatsappCta as i, InlineEmergencyCropHelpCta as n, siteConfig as o, MobileQuickActions as r, EmergencyCropHelpCta as t };
