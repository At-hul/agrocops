import { D as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./button-DrsB15xH.mjs";
import { t as Badge } from "./badge-lZbx36Mz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-heading-BJigGknc.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, description, align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mx-auto max-w-3xl", align === "center" && "text-center", align === "left" && "mx-0"),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: "yellow",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-3xl font-bold tracking-normal text-foreground md:text-4xl",
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-7 text-muted-foreground md:text-lg",
				children: description
			}) : null
		]
	});
}
//#endregion
export { SectionHeading as t };
