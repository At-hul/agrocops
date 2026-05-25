import { r as __toESM } from "../_runtime.mjs";
import { n as pageIntro } from "./site-content-kdN7BxgY.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { O as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as CalendarDays, _ as MapPin } from "../_libs/lucide-react.mjs";
import { i as WhatsappCta } from "./whatsapp-cta-qvALClaP.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
import { t as ContentPage } from "./content-page-ChFY9En3.mjs";
import { t as PublicConversionForm } from "./public-conversion-forms-Bx_5eXti.mjs";
import { a as fetchPublishedEvents, t as emptyPublicContent } from "./public-content-repository-ptidobj4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-CYj9E3UH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EventsPage() {
	const [events, setEvents] = (0, import_react.useState)(emptyPublicContent());
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		fetchPublishedEvents().then((result) => {
			if (!mounted) return;
			setEvents(result);
			setLoading(false);
		});
		return () => {
			mounted = false;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentPage, {
			...pageIntro.events,
			ctaContext: "event",
			sections: [
				{
					title: "Upcoming Events",
					description: "Event cards with date, topic, location, registration, and WhatsApp questions."
				},
				{
					title: "Past Events",
					description: "Archive workshops and advisory days for trust and local SEO."
				},
				{
					title: "Registration",
					description: "Forms capture attendee details, village, crops, source, and confirmation status."
				},
				{
					title: "Attendance",
					description: "Admin can follow up after events and move leads through the pipeline."
				},
				{
					title: "Gallery",
					description: "Event photos support community proof and Google Business Profile posts."
				},
				{
					title: "Recognition",
					description: "Events can include farmer spotlight and success story recognition moments."
				}
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "premium-container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "premium-eyebrow",
							children: "Published Events"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-4xl font-extrabold tracking-tight text-primary md:text-5xl",
							children: "Upcoming sessions managed from Supabase."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
						children: events.data.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "hover-lift overflow-hidden",
							children: [event.featured_image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "aspect-[16/10] w-full object-cover",
								src: event.featured_image,
								alt: `${event.title} at Agrocops Chelakkara`,
								loading: "lazy"
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-extrabold text-primary",
										children: event.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-base leading-7 text-muted-foreground",
										children: event.description ?? "Register for practical agriculture support."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 grid gap-2 text-sm font-semibold text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
												className: "size-4 text-accent",
												"aria-hidden": "true"
											}), event.event_date ? new Date(event.event_date).toLocaleString() : "Date announced soon"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
												className: "size-4 text-accent",
												"aria-hidden": "true"
											}), event.location ?? "Agrocops Chelakkara"]
										})]
									})
								]
							})]
						}, event.slug))
					}),
					!loading && events.configured && events.data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "mt-8 border-dashed p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-extrabold text-primary",
								children: "No published events yet."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-base leading-7 text-muted-foreground",
								children: "Add an event from the admin dashboard to show it here. Visitors can WhatsApp Agrocops for upcoming workshop information."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
								label: "Ask about events",
								context: "event",
								title: "Events empty state",
								className: "mt-5"
							})
						]
					}) : null,
					events.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 rounded-md bg-red-50 p-4 text-sm font-semibold text-red-700",
						children: ["Unable to load events: ", events.error]
					}) : null
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/45 py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "premium-container max-w-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicConversionForm, {
					kind: "event",
					source: "events_registration"
				})
			})
		})
	] });
}
//#endregion
export { EventsPage as component };
