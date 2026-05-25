import { r as __toESM } from "../_runtime.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { D as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as buttonClassName, t as Button } from "./button-DrsB15xH.mjs";
import { T as Download, _ as MessageCircle, b as LogOut, f as Save, i as Trash2, m as Plus, p as RefreshCcw, s as SquarePen, u as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as Badge } from "./badge-lZbx36Mz.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
import { n as useAdminAuth, t as signOutAdmin } from "./use-admin-auth-CDsQjF4n.mjs";
import { a as objectType, n as coerce, o as stringType, r as enumType, t as booleanType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-CdxIg_RZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var leadStatuses = [
	"new",
	"contacted",
	"interested",
	"visited_store",
	"converted",
	"repeat_customer",
	"lost"
];
function canManageModule(role, moduleId) {
	if (role === "owner" || role === "manager") return true;
	return [
		"articles",
		"crop_guides",
		"events",
		"gallery_items"
	].includes(moduleId);
}
function canManageLeads(role) {
	return role === "owner" || role === "manager";
}
var optionalText = stringType().optional().nullable();
var productSchema = objectType({
	name: stringType().min(2, "Product name is required"),
	slug: stringType().min(2, "Slug is required"),
	description: stringType().min(10, "Description is required"),
	category_id: optionalText,
	application: optionalText,
	brand: optionalText,
	price_range: optionalText,
	featured_crop: optionalText,
	stock_status: enumType([
		"in_stock",
		"limited",
		"out_of_stock",
		"on_request"
	]),
	pack_sizes: stringType().optional(),
	suitable_crops: stringType().optional(),
	benefits: stringType().optional(),
	status: enumType([
		"draft",
		"published",
		"archived"
	]),
	is_featured: booleanType().default(false)
});
var articleSchema = objectType({
	title: stringType().min(2, "Title is required"),
	slug: stringType().min(2, "Slug is required"),
	excerpt: optionalText,
	content: optionalText,
	language: stringType().default("en"),
	title_ml: optionalText,
	excerpt_ml: optionalText,
	content_ml: optionalText,
	category: optionalText,
	reading_time: optionalText,
	meta_title: optionalText,
	meta_description: optionalText,
	status: enumType([
		"draft",
		"published",
		"archived"
	])
});
var cropGuideSchema = objectType({
	crop_name: stringType().min(2, "Crop name is required"),
	slug: stringType().min(2, "Slug is required"),
	crop_name_ml: optionalText,
	problem: optionalText,
	symptoms: optionalText,
	treatment: optionalText,
	season: optionalText,
	status: enumType([
		"draft",
		"published",
		"review",
		"archived"
	])
});
var eventSchema = objectType({
	title: stringType().min(2, "Event title is required"),
	slug: stringType().min(2, "Slug is required"),
	description: optionalText,
	event_date: optionalText,
	location: optionalText,
	capacity: coerce.number().optional().nullable(),
	status: enumType([
		"draft",
		"active",
		"published",
		"archived"
	])
});
var reviewSchema = objectType({
	reviewer_name: stringType().min(2, "Reviewer name is required"),
	rating: coerce.number().min(1).max(5),
	review_text: optionalText,
	source: stringType().default("google_business_profile"),
	source_url: optionalText,
	is_featured: booleanType().default(false),
	status: enumType([
		"draft",
		"published",
		"review",
		"archived"
	])
});
var successStorySchema = objectType({
	farmer_name: stringType().min(2, "Farmer name is required"),
	phone: optionalText,
	village: optionalText,
	district: optionalText,
	crop: optionalText,
	story: stringType().min(10, "Story is required"),
	image_url: optionalText,
	recognition_type: optionalText,
	website_featured: booleanType().default(false),
	social_featured: booleanType().default(false),
	event_featured: booleanType().default(false),
	status: enumType([
		"draft",
		"published",
		"review",
		"archived"
	])
});
var galleryItemSchema = objectType({
	title: stringType().min(2, "Title is required"),
	category: optionalText,
	image_url: stringType().min(4, "Image URL is required"),
	alt_text: stringType().min(4, "Alt text is required"),
	status: enumType([
		"draft",
		"published",
		"review",
		"archived"
	])
});
objectType({
	follow_up_status: enumType(leadStatuses),
	notes: optionalText
});
async function fetchModuleRecords(config) {
	return {
		data: [],
		error: null
	};
}
async function saveModuleRecord(config, values, id) {
	return {
		data: null,
		error: null
	};
}
async function deleteModuleRecord(table, id) {
	return { error: null };
}
async function fetchDashboardSummary() {
	return {
		data: {
			stats: [],
			activity: [],
			pipeline: []
		},
		error: null
	};
}
async function fetchLeads(filters) {
	return {
		data: [],
		error: null
	};
}
async function updateLead(id, values) {
	return { error: null };
}
function LeadManager({ role }) {
	const [leads, setLeads] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [search, setSearch] = (0, import_react.useState)("");
	const [leadType, setLeadType] = (0, import_react.useState)("all");
	const [status, setStatus] = (0, import_react.useState)("all");
	const [message, setMessage] = (0, import_react.useState)(null);
	const allowed = canManageLeads(role);
	const leadTypes = (0, import_react.useMemo)(() => ["all", ...Array.from(new Set(leads.map((lead) => String(lead.lead_type))))], [leads]);
	(0, import_react.useEffect)(() => {
		refresh();
	}, [leadType, status]);
	async function refresh() {
		setLoading(true);
		const { data, error } = await fetchLeads({
			search,
			leadType,
			status
		});
		setLoading(false);
		if (error) {
			setMessage(error.message);
			return;
		}
		setLeads(data);
	}
	async function saveLead(lead, nextStatus, notes) {
		if (!allowed) {
			setMessage("Your role cannot manage leads.");
			return;
		}
		const { error } = await updateLead(lead.id, {
			follow_up_status: nextStatus,
			notes
		});
		if (error) {
			setMessage(error.message);
			return;
		}
		setMessage("Lead updated.");
		await refresh();
	}
	function exportCsv() {
		const headers = [
			"name",
			"phone",
			"lead_type",
			"crop_type",
			"inquiry_source",
			"follow_up_status",
			"notes"
		];
		const csv = [headers.join(","), ...leads.map((lead) => headers.map((header) => `"${String(lead[header] ?? "").replaceAll("\"", "\"\"")}"`).join(","))].join("\n");
		const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "agrocops-leads.csv";
		link.click();
		URL.revokeObjectURL(url);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "scroll-mt-24 rounded-lg border bg-card",
		id: "leads",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 border-b p-5 lg:flex-row lg:items-center lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-extrabold",
					children: "Leads"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Search, filter, update status, add notes, mark converted, and export CSV."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: buttonClassName({
							variant: "outline",
							size: "sm"
						}),
						type: "button",
						onClick: () => void refresh(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCcw, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Refresh"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: buttonClassName({
							variant: "primary",
							size: "sm"
						}),
						type: "button",
						onClick: exportCsv,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Export CSV"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 border-b p-5 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-bold",
						htmlFor: "lead-search",
						children: "Search"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "lead-search",
						className: "focus-ring mt-1 min-h-10 w-full rounded-md border bg-background px-3 text-sm",
						placeholder: "Name, phone, crop",
						value: search,
						onChange: (event) => setSearch(event.target.value),
						onKeyDown: (event) => {
							if (event.key === "Enter") refresh();
						}
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-bold",
						htmlFor: "lead-type",
						children: "Lead type"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						id: "lead-type",
						className: "focus-ring mt-1 min-h-10 w-full rounded-md border bg-background px-3 text-sm",
						value: leadType,
						onChange: (event) => setLeadType(event.target.value),
						children: leadTypes.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: type,
							children: type
						}, type))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-bold",
						htmlFor: "lead-status",
						children: "Follow-up status"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "lead-status",
						className: "focus-ring mt-1 min-h-10 w-full rounded-md border bg-background px-3 text-sm",
						value: status,
						onChange: (event) => setStatus(event.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: "all"
						}), leadStatuses.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item,
							children: item
						}, item))]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 p-5",
				children: [
					leads.map((lead) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadRow, {
						lead,
						allowed,
						onSave: saveLead
					}, lead.id)),
					loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-muted-foreground",
						children: "Loading leads..."
					}) : null,
					!loading && leads.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-dashed bg-muted/45 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold",
							children: "No leads found."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Public inquiry forms and WhatsApp lead capture will populate this pipeline."
						})]
					}) : null
				]
			}),
			message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-5 mb-5 rounded-md bg-muted p-3 text-sm font-semibold",
				role: "status",
				children: message
			}) : null
		]
	});
}
function LeadRow({ lead, allowed, onSave }) {
	const [nextStatus, setNextStatus] = (0, import_react.useState)(lead.follow_up_status ?? "new");
	const [notes, setNotes] = (0, import_react.useState)(String(lead.notes ?? ""));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[1fr_220px_1fr_auto] lg:items-start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-extrabold",
						children: lead.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: lead.phone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "neutral",
								children: lead.lead_type
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "green",
								children: lead.crop_type ?? "No crop"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "yellow",
								children: lead.inquiry_source
							})
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-sm font-bold",
					htmlFor: `${lead.id}-status`,
					children: "Status"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					id: `${lead.id}-status`,
					className: "focus-ring mt-1 min-h-10 w-full rounded-md border bg-background px-3 text-sm",
					value: nextStatus,
					disabled: !allowed,
					onChange: (event) => setNextStatus(event.target.value),
					children: leadStatuses.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item,
						children: item
					}, item))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-sm font-bold",
					htmlFor: `${lead.id}-notes`,
					children: "Notes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: `${lead.id}-notes`,
					className: "focus-ring mt-1 min-h-20 w-full rounded-md border bg-background px-3 py-2 text-sm",
					value: notes,
					disabled: !allowed,
					onChange: (event) => setNotes(event.target.value)
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 lg:flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						disabled: !allowed,
						onClick: () => void onSave(lead, nextStatus, notes),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Save"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: buttonClassName({ variant: "outline" }),
						type: "button",
						disabled: !allowed,
						onClick: () => void onSave(lead, "converted", notes),
						children: "Mark converted"
					})]
				})
			]
		})
	});
}
function ModuleManager({ config, role }) {
	const [records, setRecords] = (0, import_react.useState)([]);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [message, setMessage] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const allowed = canManageModule(role, config.id);
	const form = useForm({
		resolver: u(config.schema),
		defaultValues: getDefaultValues(config)
	});
	(0, import_react.useEffect)(() => {
		refresh();
	}, [config.id]);
	async function refresh() {
		setLoading(true);
		const { data, error } = await fetchModuleRecords(config);
		setLoading(false);
		if (error) {
			setMessage(error.message);
			return;
		}
		setRecords(data);
	}
	async function onSubmit(values) {
		if (!allowed) {
			setMessage("Your role cannot manage this module.");
			return;
		}
		setSaving(true);
		const parsed = config.schema.safeParse(values);
		if (!parsed.success) {
			setSaving(false);
			setMessage("Please fix validation errors before saving.");
			return;
		}
		const { error } = await saveModuleRecord(config, parsed.data, editing?.id);
		setSaving(false);
		if (error) {
			setMessage(error.message);
			return;
		}
		setMessage(editing ? "Record updated." : "Record created.");
		setEditing(null);
		form.reset(getDefaultValues(config));
		await refresh();
	}
	async function deleteRecord(record) {
		if (!allowed || !record.id) return;
		if (!window.confirm(`Delete this ${config.label} record? This cannot be undone.`)) return;
		const { error } = await deleteModuleRecord(config.table, record.id);
		if (error) {
			setMessage(error.message);
			return;
		}
		setMessage("Record deleted.");
		await refresh();
	}
	function startEdit(record) {
		if (!allowed) return;
		setEditing(record);
		form.reset(toFormValues(config, record));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "scroll-mt-24 rounded-lg border bg-card",
		id: config.id,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 border-b p-5 lg:flex-row lg:items-center lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-extrabold",
				children: config.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: allowed ? "Create, edit, and manage live Supabase records." : "Read-only for your role."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: buttonClassName({
					variant: "outline",
					size: "sm"
				}),
				type: "button",
				onClick: () => void refresh(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCcw, {
					className: "size-4",
					"aria-hidden": "true"
				}), "Refresh"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 p-5 xl:grid-cols-[minmax(0,1fr)_360px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-x-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[680px] text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-muted/70 text-xs uppercase text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [config.listColumns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3",
								children: column.label
							}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3",
								children: "Actions"
							})] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y",
							children: records.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-muted/45",
								children: [config.listColumns.map((column, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: index === 0 ? "px-4 py-3 font-bold" : "px-4 py-3 text-muted-foreground",
									children: String(record[column.key] ?? "")
								}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: buttonClassName({
												variant: "outline",
												size: "sm"
											}),
											type: "button",
											disabled: !allowed,
											onClick: () => startEdit(record),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, {
												className: "size-4",
												"aria-hidden": "true"
											}), "Edit"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: buttonClassName({
												variant: "ghost",
												size: "sm"
											}),
											type: "button",
											disabled: !allowed,
											onClick: () => void deleteRecord(record),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
												className: "size-4",
												"aria-hidden": "true"
											}), "Delete"]
										})]
									})
								})]
							}, record.id))
						})]
					}),
					loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "p-5 text-sm font-semibold text-muted-foreground",
						children: [
							"Loading ",
							config.label.toLowerCase(),
							"..."
						]
					}) : null,
					!loading && records.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-dashed bg-muted/45 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-bold",
								children: [
									"No ",
									config.label.toLowerCase(),
									" yet."
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Create the first record with the form on the right."
							})]
						})
					}) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold",
							children: editing ? "Edit record" : "Add record"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Validated before saving to Supabase."
						})] }), !allowed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "brown",
							children: "Read only"
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-4 grid gap-3",
						onSubmit: form.handleSubmit(onSubmit),
						children: [config.fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldInput, {
							field,
							form,
							disabled: !allowed
						}, field.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								disabled: !allowed || saving,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
									className: "size-4",
									"aria-hidden": "true"
								}), saving ? "Saving..." : editing ? "Save changes" : "Create"]
							}), editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: buttonClassName({ variant: "ghost" }),
								type: "button",
								onClick: () => {
									setEditing(null);
									form.reset(getDefaultValues(config));
								},
								children: "Cancel"
							}) : null]
						})]
					}),
					message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 rounded-md bg-muted p-3 text-sm font-semibold",
						role: "status",
						children: message
					}) : null
				]
			})]
		})]
	});
}
function FieldInput({ field, form, disabled }) {
	const error = form.formState.errors[field.name]?.message;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-sm font-bold",
			htmlFor: field.name,
			children: field.label
		}),
		field.type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			id: field.name,
			className: "focus-ring mt-1 min-h-24 w-full rounded-md border bg-background px-3 py-2 text-sm",
			disabled,
			...form.register(field.name)
		}) : field.type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			id: field.name,
			className: "focus-ring mt-1 min-h-10 w-full rounded-md border bg-background px-3 text-sm",
			disabled,
			...form.register(field.name),
			children: field.options?.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: option.value,
				children: option.label
			}, option.value))
		}) : field.type === "checkbox" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: field.name,
			className: "focus-ring mt-2 size-5 rounded border",
			type: "checkbox",
			disabled,
			...form.register(field.name)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: field.name,
			className: "focus-ring mt-1 min-h-10 w-full rounded-md border bg-background px-3 text-sm",
			type: field.type === "number" ? "number" : field.type === "datetime" ? "datetime-local" : "text",
			disabled,
			...form.register(field.name)
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs font-semibold text-red-700",
			children: error
		}) : null
	] });
}
function getDefaultValues(config) {
	return Object.fromEntries(config.fields.map((field) => {
		if (field.type === "checkbox") return [field.name, false];
		if (field.name === "stock_status") return [field.name, "on_request"];
		if (field.name === "status") return [field.name, field.options?.[0]?.value ?? "draft"];
		if (field.name === "language") return [field.name, "en"];
		if (field.name === "rating") return [field.name, 5];
		return [field.name, ""];
	}));
}
function toFormValues(config, record) {
	const defaults = getDefaultValues(config);
	return Object.fromEntries(Object.entries(defaults).map(([key, value]) => {
		const recordValue = record[key];
		if (Array.isArray(recordValue)) return [key, recordValue.join(", ")];
		return [key, recordValue ?? value];
	}));
}
var statusOptions = [
	{
		label: "Draft",
		value: "draft"
	},
	{
		label: "Published",
		value: "published"
	},
	{
		label: "Review",
		value: "review"
	},
	{
		label: "Archived",
		value: "archived"
	}
];
var moduleConfigs = [
	{
		id: "products",
		label: "Products",
		table: "products",
		schema: productSchema,
		listColumns: [
			{
				key: "name",
				label: "Name"
			},
			{
				key: "stock_status",
				label: "Stock"
			},
			{
				key: "brand",
				label: "Brand"
			},
			{
				key: "featured_crop",
				label: "Crop"
			},
			{
				key: "status",
				label: "Status"
			}
		],
		fields: [
			{
				name: "name",
				label: "Name"
			},
			{
				name: "slug",
				label: "Slug"
			},
			{
				name: "description",
				label: "Description",
				type: "textarea"
			},
			{
				name: "stock_status",
				label: "Stock status",
				type: "select",
				options: [
					{
						label: "In stock",
						value: "in_stock"
					},
					{
						label: "Limited",
						value: "limited"
					},
					{
						label: "Out of stock",
						value: "out_of_stock"
					},
					{
						label: "On request",
						value: "on_request"
					}
				]
			},
			{
				name: "pack_sizes",
				label: "Pack sizes"
			},
			{
				name: "brand",
				label: "Brand"
			},
			{
				name: "price_range",
				label: "Price range"
			},
			{
				name: "featured_crop",
				label: "Featured crop"
			},
			{
				name: "benefits",
				label: "Benefits",
				type: "textarea"
			},
			{
				name: "suitable_crops",
				label: "Suitable crops"
			},
			{
				name: "is_featured",
				label: "Featured product",
				type: "checkbox"
			},
			{
				name: "status",
				label: "Status",
				type: "select",
				options: statusOptions
			}
		]
	},
	{
		id: "articles",
		label: "Articles",
		table: "articles",
		schema: articleSchema,
		listColumns: [
			{
				key: "title",
				label: "Title"
			},
			{
				key: "category",
				label: "Category"
			},
			{
				key: "language",
				label: "Language"
			},
			{
				key: "status",
				label: "Status"
			}
		],
		fields: [
			{
				name: "title",
				label: "Title"
			},
			{
				name: "slug",
				label: "Slug"
			},
			{
				name: "excerpt",
				label: "Excerpt",
				type: "textarea"
			},
			{
				name: "content",
				label: "Content",
				type: "textarea"
			},
			{
				name: "category",
				label: "Category"
			},
			{
				name: "reading_time",
				label: "Reading time"
			},
			{
				name: "title_ml",
				label: "Malayalam title"
			},
			{
				name: "meta_title",
				label: "Meta title"
			},
			{
				name: "meta_description",
				label: "Meta description",
				type: "textarea"
			},
			{
				name: "status",
				label: "Status",
				type: "select",
				options: statusOptions
			}
		]
	},
	{
		id: "crop_guides",
		label: "Crop Guides",
		table: "crop_guides",
		schema: cropGuideSchema,
		listColumns: [
			{
				key: "crop_name",
				label: "Crop"
			},
			{
				key: "problem",
				label: "Problem"
			},
			{
				key: "season",
				label: "Season"
			},
			{
				key: "status",
				label: "Status"
			}
		],
		fields: [
			{
				name: "crop_name",
				label: "Crop name"
			},
			{
				name: "slug",
				label: "Slug"
			},
			{
				name: "crop_name_ml",
				label: "Malayalam crop name"
			},
			{
				name: "problem",
				label: "Problem"
			},
			{
				name: "symptoms",
				label: "Symptoms",
				type: "textarea"
			},
			{
				name: "treatment",
				label: "Treatment",
				type: "textarea"
			},
			{
				name: "season",
				label: "Season"
			},
			{
				name: "status",
				label: "Status",
				type: "select",
				options: statusOptions
			}
		]
	},
	{
		id: "events",
		label: "Events",
		table: "events",
		schema: eventSchema,
		listColumns: [
			{
				key: "title",
				label: "Title"
			},
			{
				key: "event_date",
				label: "Date"
			},
			{
				key: "location",
				label: "Location"
			},
			{
				key: "status",
				label: "Status"
			}
		],
		fields: [
			{
				name: "title",
				label: "Title"
			},
			{
				name: "slug",
				label: "Slug"
			},
			{
				name: "description",
				label: "Description",
				type: "textarea"
			},
			{
				name: "event_date",
				label: "Event date",
				type: "datetime"
			},
			{
				name: "location",
				label: "Location"
			},
			{
				name: "capacity",
				label: "Capacity",
				type: "number"
			},
			{
				name: "status",
				label: "Status",
				type: "select",
				options: [
					{
						label: "Draft",
						value: "draft"
					},
					{
						label: "Active",
						value: "active"
					},
					{
						label: "Published",
						value: "published"
					},
					{
						label: "Archived",
						value: "archived"
					}
				]
			}
		]
	},
	{
		id: "reviews",
		label: "Reviews",
		table: "reviews",
		schema: reviewSchema,
		listColumns: [
			{
				key: "reviewer_name",
				label: "Reviewer"
			},
			{
				key: "rating",
				label: "Rating"
			},
			{
				key: "source",
				label: "Source"
			},
			{
				key: "status",
				label: "Status"
			}
		],
		fields: [
			{
				name: "reviewer_name",
				label: "Reviewer name"
			},
			{
				name: "rating",
				label: "Rating",
				type: "number"
			},
			{
				name: "review_text",
				label: "Review text",
				type: "textarea"
			},
			{
				name: "source",
				label: "Source"
			},
			{
				name: "source_url",
				label: "Source URL"
			},
			{
				name: "is_featured",
				label: "Feature review",
				type: "checkbox"
			},
			{
				name: "status",
				label: "Status",
				type: "select",
				options: statusOptions
			}
		]
	},
	{
		id: "success_stories",
		label: "Success Stories",
		table: "success_stories",
		schema: successStorySchema,
		listColumns: [
			{
				key: "farmer_name",
				label: "Farmer"
			},
			{
				key: "village",
				label: "Village"
			},
			{
				key: "crop",
				label: "Crop"
			},
			{
				key: "status",
				label: "Status"
			}
		],
		fields: [
			{
				name: "farmer_name",
				label: "Farmer name"
			},
			{
				name: "phone",
				label: "Phone"
			},
			{
				name: "village",
				label: "Village"
			},
			{
				name: "district",
				label: "District"
			},
			{
				name: "crop",
				label: "Crop"
			},
			{
				name: "story",
				label: "Story",
				type: "textarea"
			},
			{
				name: "image_url",
				label: "Image URL"
			},
			{
				name: "recognition_type",
				label: "Recognition type"
			},
			{
				name: "website_featured",
				label: "Website featured",
				type: "checkbox"
			},
			{
				name: "social_featured",
				label: "Social featured",
				type: "checkbox"
			},
			{
				name: "event_featured",
				label: "Event featured",
				type: "checkbox"
			},
			{
				name: "status",
				label: "Status",
				type: "select",
				options: statusOptions
			}
		]
	},
	{
		id: "gallery_items",
		label: "Gallery Items",
		table: "gallery_items",
		schema: galleryItemSchema,
		listColumns: [
			{
				key: "title",
				label: "Title"
			},
			{
				key: "category",
				label: "Category"
			},
			{
				key: "alt_text",
				label: "Alt text"
			},
			{
				key: "status",
				label: "Status"
			}
		],
		fields: [
			{
				name: "title",
				label: "Title"
			},
			{
				name: "category",
				label: "Category"
			},
			{
				name: "image_url",
				label: "Image URL"
			},
			{
				name: "alt_text",
				label: "Alt text"
			},
			{
				name: "status",
				label: "Status",
				type: "select",
				options: statusOptions
			}
		]
	}
];
function AdminDashboardPage() {
	const { loading, profile, error, isConfigured } = useAdminAuth();
	const [summary, setSummary] = (0, import_react.useState)({
		stats: [],
		activity: [],
		pipeline: []
	});
	const [summaryLoading, setSummaryLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		async function loadSummary() {
			const { data } = await fetchDashboardSummary();
			setSummary(data);
			setSummaryLoading(false);
		}
		if (!loading) loadSummary();
	}, [loading]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-bold",
					children: "Checking admin access..."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Loading Supabase session and admin role."
				})]
			})
		})
	});
	if (!profile && isConfigured) {
		window.location.href = "/admin/login";
		return null;
	}
	const role = profile?.role ?? "owner";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b bg-primary text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container py-10 md:py-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "yellow",
									children: "Protected Admin"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 text-3xl font-extrabold leading-tight md:text-5xl",
									children: "Manage Agrocops products, content, leads, and trust."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base leading-7 text-primary-foreground/78 md:text-lg",
									children: "Role-aware admin tools for shop owners, managers, and editors. Records save to Supabase when environment variables and RLS are configured."
								}),
								!isConfigured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 rounded-md bg-white/10 p-3 text-sm font-semibold text-white",
									children: "Supabase is not configured. Admin records will show empty states until environment variables are set."
								}) : null,
								error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 rounded-md bg-red-50 p-3 text-sm font-semibold text-red-700",
									children: error
								}) : null
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "border-white/16 bg-white/95 p-4 text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-10 items-center justify-center rounded-md bg-secondary/15 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: "size-5",
										"aria-hidden": "true"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-extrabold",
										children: profile?.name ?? "Setup mode"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: profile?.email ?? "Supabase not configured"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "green",
										className: "mt-2",
										children: role
									})
								] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: buttonClassName({
									variant: "outline",
									size: "sm",
									className: "mt-4 w-full"
								}),
								type: "button",
								onClick: () => void signOutAdmin(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
									className: "size-4",
									"aria-hidden": "true"
								}), "Sign out"]
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b bg-muted/55",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						summaryLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "p-4 sm:col-span-2 lg:col-span-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: "Loading dashboard metrics..."
							})
						}) : null,
						!summaryLoading && summary.stats.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-4 sm:col-span-2 lg:col-span-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: "No dashboard metrics yet."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Connect Supabase and add records to populate this overview."
							})]
						}) : null,
						summary.stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold text-muted-foreground",
									children: stat.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-3xl font-extrabold text-primary",
									children: stat.value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: stat.detail
								})
							]
						}, stat.label))
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-padding",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container grid gap-8 xl:grid-cols-[260px_minmax(0,1fr)_320px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
							className: "xl:sticky xl:top-20 xl:self-start",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border bg-card p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "px-2 py-2 text-xs font-bold uppercase text-muted-foreground",
									children: "Modules"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
									className: "grid gap-1",
									"aria-label": "Admin modules",
									children: [moduleConfigs.map((module) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "focus-ring flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
										href: `#${module.id}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: module.label }), !canManageModule(role, module.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs",
											children: "Read"
										}) : null]
									}, module.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "focus-ring flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
										href: "#leads",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Leads" }), role === "editor" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs",
											children: "Read"
										}) : null]
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6",
							children: [moduleConfigs.map((config) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModuleManager, {
								config,
								role
							}, config.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadManager, { role })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "grid content-start gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "yellow",
									children: "Lead Pipeline"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 grid gap-3",
									children: [summary.pipeline.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-md bg-muted p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-bold",
												children: item.status
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-extrabold text-primary",
												children: item.count
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs leading-5 text-muted-foreground",
											children: item.description
										})]
									}, item.status)), !summaryLoading && summary.pipeline.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Lead status counts will appear after leads are captured."
									}) : null]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "green",
									children: "Today"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 grid gap-4",
									children: [(summary.activity.length > 0 ? summary.activity.map((item) => ({
										...item,
										icon: MessageCircle
									})) : []).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
												className: "size-4",
												"aria-hidden": "true"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold",
											children: item.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs leading-5 text-muted-foreground",
											children: item.detail
										})] })]
									}, item.title)), !summaryLoading && summary.activity.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Recent leads and events will appear here."
									}) : null]
								})]
							})]
						})
					]
				})
			})
		]
	});
}
var SplitComponent = AdminDashboardPage;
//#endregion
export { SplitComponent as component };
