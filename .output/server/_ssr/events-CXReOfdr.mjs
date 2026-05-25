import { n as pageIntro } from "./site-content-kdN7BxgY.mjs";
import { D as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ContentPage } from "./content-page-CqvHIfde.mjs";
import { t as PublicConversionForm } from "./public-conversion-forms-DwZk2gsj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-CXReOfdr.js
var import_jsx_runtime = require_jsx_runtime();
function EventsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentPage, {
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
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-muted/55",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container max-w-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicConversionForm, {
				kind: "event",
				source: "events_registration"
			})
		})
	})] });
}
//#endregion
export { EventsPage as component };
