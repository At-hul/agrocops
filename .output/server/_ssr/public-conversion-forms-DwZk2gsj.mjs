import { r as __toESM } from "../_runtime.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { D as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-DrsB15xH.mjs";
import { d as Send } from "../_libs/lucide-react.mjs";
import { r as WhatsappCta } from "./whatsapp-cta-D8aqhAXQ.mjs";
import { c as submitNewsletter, d as successStorySubmissionSchema, i as newsletterSchema, n as farmerRegistrationSchema, o as submitEventRegistration, r as isPublicFormBackendAvailable, s as submitFarmerRegistration, t as eventRegistrationSchema, u as submitSuccessStory } from "./public-form-repository-CHwR5qe2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/public-conversion-forms-DwZk2gsj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var configs = {
	farmer: {
		title: "Farmer registration",
		schema: farmerRegistrationSchema,
		submit: submitFarmerRegistration,
		fields: [
			"name",
			"phone",
			"village",
			"district",
			"crops",
			"farm_size"
		]
	},
	event: {
		title: "Event registration",
		schema: eventRegistrationSchema,
		submit: submitEventRegistration,
		fields: [
			"name",
			"phone",
			"village",
			"district",
			"crops",
			"attendee_count"
		]
	},
	newsletter: {
		title: "Newsletter signup",
		schema: newsletterSchema,
		submit: submitNewsletter,
		fields: ["email", "phone"]
	},
	story: {
		title: "Success story submission",
		schema: successStorySubmissionSchema,
		submit: submitSuccessStory,
		fields: [
			"farmer_name",
			"phone",
			"village",
			"district",
			"crop",
			"story",
			"image_url"
		]
	}
};
function PublicConversionForm({ kind, source }) {
	const config = configs[kind];
	const backendAvailable = isPublicFormBackendAvailable();
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)("");
	const form = useForm({
		resolver: u(config.schema),
		defaultValues: Object.fromEntries([...config.fields, "honeypot"].map((field) => [field, ""]))
	});
	async function onSubmit(values) {
		setStatus("idle");
		setMessage("");
		if (!backendAvailable) {
			setStatus("error");
			setMessage("Online form is temporarily unavailable. Please contact Agrocops on WhatsApp.");
			return;
		}
		const { error } = await config.submit(values, {
			source,
			pagePath: window.location.pathname
		});
		if (error) {
			setStatus("error");
			setMessage(error);
			return;
		}
		setStatus("success");
		setMessage("Submitted successfully. Agrocops can follow up from the dashboard.");
		form.reset();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-3 rounded-lg border bg-card p-5",
		onSubmit: form.handleSubmit(onSubmit),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-extrabold",
				children: config.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "sr-only",
				htmlFor: `${kind}-company`,
				children: "Company"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: `${kind}-company`,
				className: "hidden",
				tabIndex: -1,
				autoComplete: "off",
				...form.register("honeypot")
			}),
			config.fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-sm font-bold capitalize",
					htmlFor: `${kind}-${field}`,
					children: field.replaceAll("_", " ")
				}),
				field === "story" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: `${kind}-${field}`,
					className: "focus-ring mt-1 min-h-24 w-full rounded-md border bg-background px-3 py-2 text-sm",
					...form.register(field)
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${kind}-${field}`,
					className: "focus-ring mt-1 min-h-10 w-full rounded-md border bg-background px-3 text-sm",
					type: field === "email" ? "email" : field === "attendee_count" ? "number" : "text",
					...form.register(field)
				}),
				form.formState.errors[field]?.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs font-semibold text-red-700",
					children: String(form.formState.errors[field]?.message)
				}) : null
			] }, field)),
			!backendAvailable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-md bg-accent/15 p-3 text-sm font-semibold text-accent-foreground",
				children: "Online form is temporarily unavailable. Please use WhatsApp for immediate support."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				disabled: form.formState.isSubmitting || !backendAvailable,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
					className: "size-4",
					"aria-hidden": "true"
				}), form.formState.isSubmitting ? "Submitting..." : "Submit"]
			}),
			status !== "idle" ? status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-md bg-secondary/15 p-3 text-sm font-semibold text-primary",
				role: "status",
				children: message
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 rounded-md bg-red-50 p-3",
				role: "alert",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold text-red-700",
					children: message
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
					label: "Unable to submit form? Contact us on WhatsApp.",
					context: "general",
					title: `${config.title} fallback`,
					variant: "accent",
					className: "w-full"
				})]
			}) : null
		]
	});
}
//#endregion
export { PublicConversionForm as t };
