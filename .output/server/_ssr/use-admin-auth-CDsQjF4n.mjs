import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-admin-auth-CDsQjF4n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useAdminAuth() {
	const [state, setState] = (0, import_react.useState)({
		loading: true,
		session: null,
		profile: null,
		error: null,
		isConfigured: Boolean(null)
	});
	(0, import_react.useEffect)(() => {
		async function load() {
			setState({
				loading: false,
				session: null,
				profile: null,
				error: null,
				isConfigured: false
			});
		}
		load();
		return () => {};
	}, []);
	return (0, import_react.useMemo)(() => state, [state]);
}
async function signOutAdmin() {}
//#endregion
export { useAdminAuth as n, signOutAdmin as t };
