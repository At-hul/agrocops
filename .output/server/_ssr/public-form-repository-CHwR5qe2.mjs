import { a as objectType, i as literalType, n as coerce, o as stringType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/public-form-repository-CHwR5qe2.js
var phone = stringType().min(10, "Enter a valid phone number");
var honeypot = stringType().max(0, "Spam detected").optional();
var publicLeadSchema = objectType({
	name: stringType().min(2, "Enter your name"),
	phone,
	crop_type: stringType().optional(),
	message: stringType().optional(),
	honeypot
});
var farmerRegistrationSchema = objectType({
	name: stringType().min(2, "Enter your name"),
	phone,
	village: stringType().min(2, "Village is required"),
	district: stringType().min(2, "District is required"),
	crops: stringType().optional(),
	farm_size: stringType().optional(),
	honeypot
});
var eventRegistrationSchema = objectType({
	name: stringType().min(2, "Enter your name"),
	phone,
	village: stringType().optional(),
	district: stringType().optional(),
	crops: stringType().optional(),
	attendee_count: coerce.number().min(1).default(1),
	honeypot
});
var newsletterSchema = objectType({
	email: stringType().email("Enter a valid email").optional().or(literalType("")),
	phone: stringType().optional(),
	honeypot
}).refine((value) => Boolean(value.email || value.phone), {
	message: "Enter email or phone",
	path: ["email"]
});
var successStorySubmissionSchema = objectType({
	farmer_name: stringType().min(2, "Farmer name is required"),
	phone: stringType().optional(),
	village: stringType().optional(),
	district: stringType().optional(),
	crop: stringType().optional(),
	story: stringType().min(10, "Story is required"),
	image_url: stringType().optional(),
	honeypot
});
var backendUnavailableMessage = "Online form is temporarily unavailable. Please contact Agrocops on WhatsApp.";
function isPublicFormBackendAvailable() {
	return Boolean(null);
}
async function submitPublicLead(values, options) {
	const parsed = publicLeadSchema.safeParse(values);
	if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid lead" };
	console.error("Public lead submission blocked: Supabase is not configured.");
	return { error: backendUnavailableMessage };
}
async function submitFarmerRegistration(values, options) {
	const parsed = farmerRegistrationSchema.safeParse(values);
	if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid registration" };
	console.error("Farmer registration blocked: Supabase is not configured.");
	return { error: backendUnavailableMessage };
}
async function submitEventRegistration(values, options) {
	const parsed = eventRegistrationSchema.safeParse(values);
	if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid event registration" };
	console.error("Event registration blocked: Supabase is not configured.");
	return { error: backendUnavailableMessage };
}
async function submitNewsletter(values, options) {
	const parsed = newsletterSchema.safeParse(values);
	if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid signup" };
	console.error("Newsletter signup blocked: Supabase is not configured.");
	return { error: backendUnavailableMessage };
}
async function submitSuccessStory(values, options) {
	const parsed = successStorySubmissionSchema.safeParse(values);
	if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid story" };
	console.error("Success story submission blocked: Supabase is not configured.");
	return { error: backendUnavailableMessage };
}
//#endregion
export { publicLeadSchema as a, submitNewsletter as c, successStorySubmissionSchema as d, newsletterSchema as i, submitPublicLead as l, farmerRegistrationSchema as n, submitEventRegistration as o, isPublicFormBackendAvailable as r, submitFarmerRegistration as s, eventRegistrationSchema as t, submitSuccessStory as u };
