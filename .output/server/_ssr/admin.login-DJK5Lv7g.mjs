import { r as __toESM } from "../_runtime.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { O as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-DrsB15xH.mjs";
import { b as LockKeyhole, y as LogIn } from "../_libs/lucide-react.mjs";
import { t as Card } from "./card-B64m9b9v.mjs";
import "./use-admin-auth-CDsQjF4n.mjs";
import { a as objectType, o as stringType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.login-DJK5Lv7g.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var loginSchema = objectType({
	email: stringType().email("Enter a valid email"),
	password: stringType().min(6, "Password must be at least 6 characters")
});
function AdminLoginPage() {
	const [message, setMessage] = (0, import_react.useState)(null);
	const [isConfigured] = (0, import_react.useState)(Boolean(null));
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
		resolver: u(loginSchema),
		defaultValues: {
			email: "",
			password: ""
		}
	});
	(0, import_react.useEffect)(() => {
		async function redirectIfLoggedIn() {}
		redirectIfLoggedIn();
	}, []);
	async function onSubmit(values) {
		setMessage("Supabase is not configured. Add env vars to enable login.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding min-h-[calc(100vh-4rem)] bg-muted/55",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "w-full max-w-md p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex size-12 items-center justify-center rounded-md bg-secondary/15 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, {
							className: "size-6",
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 text-3xl font-extrabold",
						children: "Admin login"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-6 text-muted-foreground",
						children: "Sign in with a Supabase Auth account that exists in the `admin_users` table."
					}),
					!isConfigured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 rounded-md bg-accent/15 p-3 text-sm font-semibold text-accent-foreground",
						children: "Supabase env vars are not configured. The dashboard runs in preview mode only."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-6 grid gap-4",
						onSubmit: handleSubmit(onSubmit),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-bold",
									htmlFor: "admin-email",
									children: "Email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "admin-email",
									className: "focus-ring mt-2 min-h-11 w-full rounded-md border bg-background px-3 text-sm",
									type: "email",
									autoComplete: "email",
									"aria-invalid": Boolean(errors.email),
									...register("email")
								}),
								errors.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-red-700",
									children: errors.email.message
								}) : null
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-bold",
									htmlFor: "admin-password",
									children: "Password"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "admin-password",
									className: "focus-ring mt-2 min-h-11 w-full rounded-md border bg-background px-3 text-sm",
									type: "password",
									autoComplete: "current-password",
									"aria-invalid": Boolean(errors.password),
									...register("password")
								}),
								errors.password ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-red-700",
									children: errors.password.message
								}) : null
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								disabled: isSubmitting || !isConfigured,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, {
									className: "size-4",
									"aria-hidden": "true"
								}), isSubmitting ? "Signing in..." : "Sign in"]
							})
						]
					}),
					message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 rounded-md bg-red-50 p-3 text-sm font-semibold text-red-700",
						role: "alert",
						children: message
					}) : null
				]
			})
		})
	});
}
var SplitComponent = AdminLoginPage;
//#endregion
export { SplitComponent as component };
