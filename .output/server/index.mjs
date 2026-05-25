globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as NodeResponse, i as defineLazyEventHandler, l as serve, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"2fe-znT4wzsOmVow0lo1RNDU0bdBuTU\"",
		"mtime": "2026-05-24T19:56:28.034Z",
		"size": 766,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"50-G0ClPlQq6uL4WNdmWVQBop0BcSg\"",
		"mtime": "2026-05-24T16:08:36.036Z",
		"size": 80,
		"path": "../public/robots.txt"
	},
	"/site.webmanifest": {
		"type": "application/manifest+json",
		"etag": "\"235-HX5XRa01qj7lyKHcAThVvVHTYf0\"",
		"mtime": "2026-05-24T19:58:50.430Z",
		"size": 565,
		"path": "../public/site.webmanifest"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"47c-WPgg0L5VfyHWNp/7G7iXptQNYk8\"",
		"mtime": "2026-05-24T16:08:36.126Z",
		"size": 1148,
		"path": "../public/sitemap.xml"
	},
	"/assets/about-CQcy5PJb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"73e-X0QS3UU0/aoLFhsh8kQj/W2nMyU\"",
		"mtime": "2026-05-25T03:56:36.754Z",
		"size": 1854,
		"path": "../public/assets/about-CQcy5PJb.js"
	},
	"/assets/admin.index-DaBKKGwG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6937-UvuY24sroxVd/sQDypCPhdaJkls\"",
		"mtime": "2026-05-25T03:56:36.755Z",
		"size": 26935,
		"path": "../public/assets/admin.index-DaBKKGwG.js"
	},
	"/assets/admin.login-dCtubh-m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c38-muDVhAk5GhbQsFdFsD+OOCIWhQY\"",
		"mtime": "2026-05-25T03:56:36.756Z",
		"size": 3128,
		"path": "../public/assets/admin.login-dCtubh-m.js"
	},
	"/assets/app-D_F8jF9B.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"4c80-NCWgQcfGl8CncWio8xWfVxU3CII\"",
		"mtime": "2026-05-25T03:56:36.769Z",
		"size": 19584,
		"path": "../public/assets/app-D_F8jF9B.css"
	},
	"/assets/badge-DVIJdJO0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d4-wRCklHJTMq4TLD7l8c9hlCuu2BY\"",
		"mtime": "2026-05-25T03:56:36.756Z",
		"size": 468,
		"path": "../public/assets/badge-DVIJdJO0.js"
	},
	"/assets/card-BqfJEM3b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"da-rI4/gQ7Qv26VKhRvQkwzZYZFHnU\"",
		"mtime": "2026-05-25T03:56:36.757Z",
		"size": 218,
		"path": "../public/assets/card-BqfJEM3b.js"
	},
	"/assets/community-B048zeDq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"56f-5OqwuZUkWx4vhCNE8iE8kdsPgnU\"",
		"mtime": "2026-05-25T03:56:36.757Z",
		"size": 1391,
		"path": "../public/assets/community-B048zeDq.js"
	},
	"/assets/content-page-BTHQcVLV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d4-amcufFdCRqJpFbPW25pfp0y9lY0\"",
		"mtime": "2026-05-25T03:56:36.759Z",
		"size": 1236,
		"path": "../public/assets/content-page-BTHQcVLV.js"
	},
	"/assets/contact-CGdrq9Em.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1017-M8w73Mj9ekQEgRRfVcU/kyUaWYo\"",
		"mtime": "2026-05-25T03:56:36.758Z",
		"size": 4119,
		"path": "../public/assets/contact-CGdrq9Em.js"
	},
	"/assets/crop-advisory-BaFHJYrS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ca-BEP8X54kYX2KOlNPQmeSbdJKuxk\"",
		"mtime": "2026-05-25T03:56:36.759Z",
		"size": 970,
		"path": "../public/assets/crop-advisory-BaFHJYrS.js"
	},
	"/assets/events-ymO9Q_4T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"472-qjChTRjASIK8FqdDi9izT/j9reM\"",
		"mtime": "2026-05-25T03:56:36.760Z",
		"size": 1138,
		"path": "../public/assets/events-ymO9Q_4T.js"
	},
	"/assets/gallery-CFkYtKZY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d4-AklEdbXJB73q6uVUe871WZZsOIU\"",
		"mtime": "2026-05-25T03:56:36.760Z",
		"size": 724,
		"path": "../public/assets/gallery-CFkYtKZY.js"
	},
	"/assets/index-BmYjfUnu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5cf5b-kLTntKwBrUhINVAA6hrFF4C9pu0\"",
		"mtime": "2026-05-25T03:56:36.754Z",
		"size": 380763,
		"path": "../public/assets/index-BmYjfUnu.js"
	},
	"/assets/knowledge-center-DQSSsZP_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3bc-jRGNNz41sa8xzExBGy7e46I0AuM\"",
		"mtime": "2026-05-25T03:56:36.761Z",
		"size": 956,
		"path": "../public/assets/knowledge-center-DQSSsZP_.js"
	},
	"/assets/knowledge-center._slug-uOU_dT5l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"72a-3tVgLXL2uHc+hTmYL4N2d0Mvh64\"",
		"mtime": "2026-05-25T03:56:36.761Z",
		"size": 1834,
		"path": "../public/assets/knowledge-center._slug-uOU_dT5l.js"
	},
	"/assets/lead-capture-form-BNOlJAnJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed4-7pBKb1HyfoiDWeBiQyuNMzSlkYE\"",
		"mtime": "2026-05-25T03:56:36.761Z",
		"size": 3796,
		"path": "../public/assets/lead-capture-form-BNOlJAnJ.js"
	},
	"/assets/products-B4iRBHAS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8b-hv+bNAchZCcarc7CGqDVBLygpVc\"",
		"mtime": "2026-05-25T03:56:36.763Z",
		"size": 3979,
		"path": "../public/assets/products-B4iRBHAS.js"
	},
	"/assets/products._slug-C5FvThCS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4c-qdHK2sAB7Pd8ek1YoY9i6qsa10k\"",
		"mtime": "2026-05-25T03:56:36.763Z",
		"size": 2636,
		"path": "../public/assets/products._slug-C5FvThCS.js"
	},
	"/assets/public-conversion-forms-YMeIrjMQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c81-VFQxf4FMnuM4tccabe9TGakjOGg\"",
		"mtime": "2026-05-25T03:56:36.764Z",
		"size": 3201,
		"path": "../public/assets/public-conversion-forms-YMeIrjMQ.js"
	},
	"/assets/public-form-repository-C9Z1I5H6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b8-84Au8/Jm8fCwBA3K1Aw1AWOZ2ck\"",
		"mtime": "2026-05-25T03:56:36.764Z",
		"size": 2488,
		"path": "../public/assets/public-form-repository-C9Z1I5H6.js"
	},
	"/assets/routes-DAvoNeJh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d8c-c1c0Ru3iNAsStXACyta/uGenQqQ\"",
		"mtime": "2026-05-25T03:56:36.765Z",
		"size": 19852,
		"path": "../public/assets/routes-DAvoNeJh.js"
	},
	"/assets/section-heading-DWRy_T99.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"227-oKopYQV6SHKKq2vt8yYNni7wdVc\"",
		"mtime": "2026-05-25T03:56:36.765Z",
		"size": 551,
		"path": "../public/assets/section-heading-DWRy_T99.js"
	},
	"/assets/use-admin-auth-i8WQnwRN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"197-u+msU5fBwrn5MgBH4KSRmocbwIY\"",
		"mtime": "2026-05-25T03:56:36.767Z",
		"size": 407,
		"path": "../public/assets/use-admin-auth-i8WQnwRN.js"
	},
	"/assets/service-areas._area-BtCehx82.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6af-uwJkfFEZSDQakNjZ6xXtD9jpeG4\"",
		"mtime": "2026-05-25T03:56:36.767Z",
		"size": 1711,
		"path": "../public/assets/service-areas._area-BtCehx82.js"
	},
	"/brand/agrocops-logo-256.png": {
		"type": "image/png",
		"etag": "\"aa77-ASMd2PyMLe0iEAJ1IQlh6bcX/+E\"",
		"mtime": "2026-05-24T19:56:27.901Z",
		"size": 43639,
		"path": "../public/brand/agrocops-logo-256.png"
	},
	"/assets/zod-CCxHgHdP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"154a0-bQrsirl/NhRF8ZjxBK/qkrg63As\"",
		"mtime": "2026-05-25T03:56:36.768Z",
		"size": 87200,
		"path": "../public/assets/zod-CCxHgHdP.js"
	},
	"/icons/apple-touch-icon.png": {
		"type": "image/png",
		"etag": "\"57f0-600IYKz2B8U/5QDrz3OEaK20Lnc\"",
		"mtime": "2026-05-24T19:56:27.968Z",
		"size": 22512,
		"path": "../public/icons/apple-touch-icon.png"
	},
	"/icons/favicon-16x16.png": {
		"type": "image/png",
		"etag": "\"296-9M3JpWMkRYKUSR9YNWv9PxQFCNs\"",
		"mtime": "2026-05-24T19:56:27.937Z",
		"size": 662,
		"path": "../public/icons/favicon-16x16.png"
	},
	"/brand/agrocops-logo-512.png": {
		"type": "image/png",
		"etag": "\"1df20-GlmFggQxC7Zf/sdk+TKvv5rAZrc\"",
		"mtime": "2026-05-24T19:56:27.927Z",
		"size": 122656,
		"path": "../public/brand/agrocops-logo-512.png"
	},
	"/icons/favicon-48x48.png": {
		"type": "image/png",
		"etag": "\"d76-PxDUzl8+t/8EXQvDCHQpny/V5nI\"",
		"mtime": "2026-05-24T19:56:27.954Z",
		"size": 3446,
		"path": "../public/icons/favicon-48x48.png"
	},
	"/icons/favicon-32x32.png": {
		"type": "image/png",
		"etag": "\"766-myb1KiQQrE85vQs891oCZ9+SOIs\"",
		"mtime": "2026-05-24T19:56:27.946Z",
		"size": 1894,
		"path": "../public/icons/favicon-32x32.png"
	},
	"/brand/agrocops-official-logo.png": {
		"type": "image/png",
		"etag": "\"2e7de-Pe3nv9SUV0mFFJANpgZrSWAdlKI\"",
		"mtime": "2026-05-24T18:56:21.691Z",
		"size": 190430,
		"path": "../public/brand/agrocops-official-logo.png"
	},
	"/icons/icon-192.png": {
		"type": "image/png",
		"etag": "\"61e4-7en11VUVJklwzZu7MB16RFF4Bzg\"",
		"mtime": "2026-05-24T19:56:27.980Z",
		"size": 25060,
		"path": "../public/icons/icon-192.png"
	},
	"/icons/icon-512.png": {
		"type": "image/png",
		"etag": "\"1950a-bwK154q6xmE7L4T4E0PE90+H89E\"",
		"mtime": "2026-05-24T19:56:28.001Z",
		"size": 103690,
		"path": "../public/icons/icon-512.png"
	},
	"/social/og-image.png": {
		"type": "image/png",
		"etag": "\"2305d-qjor2E6PDZFDN1/fTjEaMpf4mEY\"",
		"mtime": "2026-05-24T19:56:29.443Z",
		"size": 143453,
		"path": "../public/social/og-image.png"
	},
	"/social/twitter-image.png": {
		"type": "image/png",
		"etag": "\"232b4-FVd81A6tZdpjxE2TcE4cgbfgay0\"",
		"mtime": "2026-05-24T19:56:29.478Z",
		"size": 144052,
		"path": "../public/social/twitter-image.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_mdGxqc = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_mdGxqc
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
