import "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { O as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/85",
			accent: "bg-accent text-accent-foreground hover:bg-accent/90",
			outline: "border bg-background text-foreground hover:bg-muted hover:text-foreground",
			ghost: "text-foreground hover:bg-muted"
		},
		size: {
			sm: "min-h-9 px-3 text-xs",
			md: "min-h-10 px-4",
			lg: "min-h-12 px-5 text-base",
			icon: "size-10 p-0"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function buttonClassName(props) {
	const { className, ...variantProps } = props ?? {};
	return cn(buttonVariants(variantProps), className);
}
//#endregion
export { buttonClassName as n, cn as r, Button as t };
