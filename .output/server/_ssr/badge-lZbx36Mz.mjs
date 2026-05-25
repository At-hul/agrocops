import "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { O as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./button-DrsB15xH.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var tones = {
	green: "bg-secondary/15 text-primary ring-secondary/30",
	yellow: "bg-accent/15 text-amber-900 ring-accent/30",
	brown: "bg-earth/15 text-earth ring-earth/30",
	neutral: "bg-muted text-muted-foreground ring-border"
};
function Badge({ className, tone = "green", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1", tones[tone], className),
		...props
	});
}
//#endregion
export { Badge as t };
