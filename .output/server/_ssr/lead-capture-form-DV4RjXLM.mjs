import { r as __toESM } from "../_runtime.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { O as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn, t as Button } from "./button-DrsB15xH.mjs";
import { u as Send } from "../_libs/lucide-react.mjs";
import { i as WhatsappCta } from "./whatsapp-cta-qvALClaP.mjs";
import { a as publicLeadSchema, l as submitPublicLead, r as isPublicFormBackendAvailable } from "./public-form-repository-CHwR5qe2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lead-capture-form-DV4RjXLM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LeadCaptureForm({ leadType = "general", inquirySource = "website", className }) {
	const formId = (0, import_react.useId)();
	const backendAvailable = isPublicFormBackendAvailable();
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)("");
	const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
		resolver: u(publicLeadSchema),
		defaultValues: {
			name: "",
			phone: "",
			crop_type: "",
			message: "",
			honeypot: ""
		}
	});
	async function onSubmit(values) {
		setStatus("idle");
		setMessage("");
		if (!backendAvailable) {
			setStatus("error");
			setMessage("Online form is temporarily unavailable. Please contact Agrocops on WhatsApp.");
			return;
		}
		const { error } = await submitPublicLead({ ...values }, {
			source: `${inquirySource}:${leadType}`,
			pagePath: window.location.pathname
		});
		if (error) {
			setStatus("error");
			setMessage(error);
			return;
		}
		setStatus("success");
		reset();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: cn("grid gap-4 rounded-lg border bg-card p-5 shadow-sm", className),
		onSubmit: handleSubmit(onSubmit),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "sr-only",
				htmlFor: `${formId}-company`,
				children: "Company"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: `${formId}-company`,
				className: "hidden",
				tabIndex: -1,
				autoComplete: "off",
				...register("honeypot")
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-sm font-bold",
					htmlFor: `${formId}-lead-name`,
					children: "Name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${formId}-lead-name`,
					className: "focus-ring mt-2 min-h-11 w-full rounded-md border bg-background px-3 text-sm",
					autoComplete: "name",
					"aria-invalid": Boolean(errors.name),
					"aria-describedby": errors.name ? `${formId}-lead-name-error` : void 0,
					...register("name")
				}),
				errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					id: `${formId}-lead-name-error`,
					className: "mt-1 text-sm text-red-700",
					children: errors.name.message
				}) : null
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-sm font-bold",
					htmlFor: `${formId}-lead-phone`,
					children: "Phone"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${formId}-lead-phone`,
					type: "tel",
					className: "focus-ring mt-2 min-h-11 w-full rounded-md border bg-background px-3 text-sm",
					autoComplete: "tel",
					inputMode: "tel",
					"aria-invalid": Boolean(errors.phone),
					"aria-describedby": errors.phone ? `${formId}-lead-phone-error` : void 0,
					...register("phone")
				}),
				errors.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					id: `${formId}-lead-phone-error`,
					className: "mt-1 text-sm text-red-700",
					children: errors.phone.message
				}) : null
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "text-sm font-bold",
				htmlFor: `${formId}-lead-crop`,
				children: "Crop or interest"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: `${formId}-lead-crop`,
				className: "focus-ring mt-2 min-h-11 w-full rounded-md border bg-background px-3 text-sm",
				placeholder: "Coconut, banana, terrace garden...",
				...register("crop_type")
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "text-sm font-bold",
				htmlFor: `${formId}-lead-message`,
				children: "Message"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				id: `${formId}-lead-message`,
				className: "focus-ring mt-2 min-h-28 w-full rounded-md border bg-background px-3 py-2 text-sm",
				placeholder: "Tell us what you need help with",
				...register("message")
			})] }),
			!backendAvailable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-md bg-accent/15 p-3 text-sm font-semibold text-accent-foreground",
				children: "Online form is temporarily unavailable. Please use WhatsApp for immediate support."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				disabled: isSubmitting || !backendAvailable,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
					className: "size-4",
					"aria-hidden": "true"
				}), isSubmitting ? "Submitting..." : "Submit inquiry"]
			}),
			status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-md bg-secondary/15 p-3 text-sm font-semibold text-primary",
				role: "status",
				children: "Inquiry captured. Agrocops can follow up from the lead dashboard."
			}) : null,
			status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 rounded-md bg-red-50 p-3",
				role: "alert",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold text-red-700",
					children: message || "Could not submit right now. Please use WhatsApp for immediate help."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappCta, {
					label: "Unable to submit form? Contact us on WhatsApp.",
					context: "general",
					title: "Public inquiry form fallback",
					variant: "accent",
					className: "w-full"
				})]
			}) : null
		]
	});
}
//#endregion
export { LeadCaptureForm as t };
