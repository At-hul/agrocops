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
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"50-G0ClPlQq6uL4WNdmWVQBop0BcSg\"",
		"mtime": "2026-05-24T16:08:36.036Z",
		"size": 80,
		"path": "../public/robots.txt"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"2fe-znT4wzsOmVow0lo1RNDU0bdBuTU\"",
		"mtime": "2026-05-24T19:56:28.034Z",
		"size": 766,
		"path": "../public/favicon.ico"
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
	"/assets/about-CmxhiJMZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"73e-lMxGZo49t+tO/ldCTkwXJMZ+TyQ\"",
		"mtime": "2026-05-25T19:26:32.051Z",
		"size": 1854,
		"path": "../public/assets/about-CmxhiJMZ.js"
	},
	"/assets/admin.login-CV9L5BCu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c38-nf8EqB0NMgo2Qk/YbwQVNjWtp5c\"",
		"mtime": "2026-05-25T19:26:32.054Z",
		"size": 3128,
		"path": "../public/assets/admin.login-CV9L5BCu.js"
	},
	"/assets/app-DhvYsTWC.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"6a9c-XVIeoNDaHmYNDBvcAphqiPlvsGQ\"",
		"mtime": "2026-05-25T19:26:32.070Z",
		"size": 27292,
		"path": "../public/assets/app-DhvYsTWC.css"
	},
	"/assets/badge-D_c0bSlB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d4-Z0xbzls8xzf4c1VHF04Asz9zs+g\"",
		"mtime": "2026-05-25T19:26:32.055Z",
		"size": 468,
		"path": "../public/assets/badge-D_c0bSlB.js"
	},
	"/assets/admin.index-DPXh5OWW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b18-qGMI97w5y8fd4paNlhgnwAXLl3Q\"",
		"mtime": "2026-05-25T19:26:32.052Z",
		"size": 27416,
		"path": "../public/assets/admin.index-DPXh5OWW.js"
	},
	"/assets/book-open-CG0za-X0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10b-h/gIRzRXyBvR/Vm4IYuBL4K/O28\"",
		"mtime": "2026-05-25T19:26:32.055Z",
		"size": 267,
		"path": "../public/assets/book-open-CG0za-X0.js"
	},
	"/assets/card-Cbe98fr4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"da-fsza1csTaxwl2+1fUSHmEgvxXLU\"",
		"mtime": "2026-05-25T19:26:32.056Z",
		"size": 218,
		"path": "../public/assets/card-Cbe98fr4.js"
	},
	"/assets/community-BwViZEQH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e06-Ff+wteQB0OuJ1Sy8jHq0EfsoMW4\"",
		"mtime": "2026-05-25T19:26:32.056Z",
		"size": 3590,
		"path": "../public/assets/community-BwViZEQH.js"
	},
	"/assets/contact-BER5Z_Hk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11f5-gB68LiTDcVEaRYoM/1zoJMYIqy0\"",
		"mtime": "2026-05-25T19:26:32.057Z",
		"size": 4597,
		"path": "../public/assets/contact-BER5Z_Hk.js"
	},
	"/assets/content-page-BQDjFxij.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d6f-D1dZTOoecLexcEUv6DW9bW+SmbE\"",
		"mtime": "2026-05-25T19:26:32.057Z",
		"size": 3439,
		"path": "../public/assets/content-page-BQDjFxij.js"
	},
	"/assets/crop-advisory-DHcCrv3-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bc0-1/hxr5nyeA8pPXeyNOZsmyGRK2I\"",
		"mtime": "2026-05-25T19:26:32.058Z",
		"size": 3008,
		"path": "../public/assets/crop-advisory-DHcCrv3-.js"
	},
	"/assets/events-BW_ch3Rx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dfe-dvpMA8ngx6GA2YMPBPS4I00qEE4\"",
		"mtime": "2026-05-25T19:26:32.058Z",
		"size": 3582,
		"path": "../public/assets/events-BW_ch3Rx.js"
	},
	"/assets/knowledge-center-Cy_tu2op.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cd4-/OEyRyh7QKV9hxmtjX9YTIJe9Q0\"",
		"mtime": "2026-05-25T19:26:32.060Z",
		"size": 3284,
		"path": "../public/assets/knowledge-center-Cy_tu2op.js"
	},
	"/assets/gallery-D0xgNTgw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d4-pARnhjOHPSUYJ6EuxJ65LMPXFAE\"",
		"mtime": "2026-05-25T19:26:32.059Z",
		"size": 724,
		"path": "../public/assets/gallery-D0xgNTgw.js"
	},
	"/assets/knowledge-center._slug-itvqJc3z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1867-MKXoaHVT2H22Me9Wz81O2bbvZoA\"",
		"mtime": "2026-05-25T19:26:32.060Z",
		"size": 6247,
		"path": "../public/assets/knowledge-center._slug-itvqJc3z.js"
	},
	"/assets/lead-capture-form-Bftwd4ak.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f52-kXqYMHsZWqQ6B9SAGGd3OvrI4q8\"",
		"mtime": "2026-05-25T19:26:32.061Z",
		"size": 3922,
		"path": "../public/assets/lead-capture-form-Bftwd4ak.js"
	},
	"/assets/products-C8AjbQst.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"215c-c+3SDMkiuLPfFF0boimx88USWas\"",
		"mtime": "2026-05-25T19:26:32.061Z",
		"size": 8540,
		"path": "../public/assets/products-C8AjbQst.js"
	},
	"/assets/products._slug-B7BzGQKA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1afb-8jw5HnN75foF8ikm/L1wSksJBvw\"",
		"mtime": "2026-05-25T19:26:32.062Z",
		"size": 6907,
		"path": "../public/assets/products._slug-B7BzGQKA.js"
	},
	"/assets/public-content-repository-DUjYBFj4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17e-sL+iXxb0VTNXcrQfuV7ewril6c0\"",
		"mtime": "2026-05-25T19:26:32.062Z",
		"size": 382,
		"path": "../public/assets/public-content-repository-DUjYBFj4.js"
	},
	"/assets/index-B8P4BTaW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b110-qKolJdbn3+/tD5n6LUzsA7JRl8c\"",
		"mtime": "2026-05-25T19:26:32.051Z",
		"size": 373008,
		"path": "../public/assets/index-B8P4BTaW.js"
	},
	"/assets/public-conversion-forms-CVwjbRk3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c81-5DlVHtbwq20n+Iegi/nQyagrbKk\"",
		"mtime": "2026-05-25T19:26:32.063Z",
		"size": 3201,
		"path": "../public/assets/public-conversion-forms-CVwjbRk3.js"
	},
	"/assets/public-form-repository-ClVSNmo3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b8-1tmu160L3AOtFl5iJQA2VpentlU\"",
		"mtime": "2026-05-25T19:26:32.064Z",
		"size": 2488,
		"path": "../public/assets/public-form-repository-ClVSNmo3.js"
	},
	"/assets/routes-CxHuz36W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e91-esjmGPCCGBOKET1XfOA2My0auXY\"",
		"mtime": "2026-05-25T19:26:32.065Z",
		"size": 20113,
		"path": "../public/assets/routes-CxHuz36W.js"
	},
	"/assets/service-areas._area-B8cVdkfF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a59-SlVoqNO53KcXvxKWSXn7K7gQp74\"",
		"mtime": "2026-05-25T19:26:32.065Z",
		"size": 2649,
		"path": "../public/assets/service-areas._area-B8cVdkfF.js"
	},
	"/assets/sparkles-DxivGhmq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f1-uSTsOysW2Nh0755M0x09ttCZPkI\"",
		"mtime": "2026-05-25T19:26:32.066Z",
		"size": 497,
		"path": "../public/assets/sparkles-DxivGhmq.js"
	},
	"/assets/shield-check-DJbikYP4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"134-ncXcOLKRmdTZMfl8mIdgHC5l8UA\"",
		"mtime": "2026-05-25T19:26:32.066Z",
		"size": 308,
		"path": "../public/assets/shield-check-DJbikYP4.js"
	},
	"/assets/use-admin-auth-Cf7jZG2O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"197-ZBzQphSSALQp6OxIb11FEu68ltA\"",
		"mtime": "2026-05-25T19:26:32.068Z",
		"size": 407,
		"path": "../public/assets/use-admin-auth-Cf7jZG2O.js"
	},
	"/assets/sprout-CcpJ7siV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"186-KmVeQZZkQyMw1ga0sGcV3edAzBg\"",
		"mtime": "2026-05-25T19:26:32.067Z",
		"size": 390,
		"path": "../public/assets/sprout-CcpJ7siV.js"
	},
	"/assets/useRouterState-EsMOOMpv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"173-yrTJSJm3clvFS0YfLGakJ2BWye8\"",
		"mtime": "2026-05-25T19:26:32.069Z",
		"size": 371,
		"path": "../public/assets/useRouterState-EsMOOMpv.js"
	},
	"/assets/zod-B3cX8VGS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"154a0-+qIZblho1Ojj26VF2rPtUQhpvyk\"",
		"mtime": "2026-05-25T19:26:32.069Z",
		"size": 87200,
		"path": "../public/assets/zod-B3cX8VGS.js"
	},
	"/brand/agrocops-logo-256.png": {
		"type": "image/png",
		"etag": "\"aa77-ASMd2PyMLe0iEAJ1IQlh6bcX/+E\"",
		"mtime": "2026-05-24T19:56:27.901Z",
		"size": 43639,
		"path": "../public/brand/agrocops-logo-256.png"
	},
	"/brand/agrocops-logo-512.png": {
		"type": "image/png",
		"etag": "\"1df20-GlmFggQxC7Zf/sdk+TKvv5rAZrc\"",
		"mtime": "2026-05-24T19:56:27.927Z",
		"size": 122656,
		"path": "../public/brand/agrocops-logo-512.png"
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
	"/brand/agrocops-official-logo.png": {
		"type": "image/png",
		"etag": "\"2e7de-Pe3nv9SUV0mFFJANpgZrSWAdlKI\"",
		"mtime": "2026-05-24T18:56:21.691Z",
		"size": 190430,
		"path": "../public/brand/agrocops-official-logo.png"
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
	"/products/agrocops-network.webp": {
		"type": "image/webp",
		"etag": "\"142ca-Vs7ogvUgxJEfLBFwvr3vVyz4df0\"",
		"mtime": "2026-05-24T18:58:00.925Z",
		"size": 82634,
		"path": "../public/products/agrocops-network.webp"
	},
	"/products/flower-seeds.webp": {
		"type": "image/webp",
		"etag": "\"f3de-G4HONY5JNjmb/+Fyp8ItTwLb6lc\"",
		"mtime": "2026-05-24T18:58:38.928Z",
		"size": 62430,
		"path": "../public/products/flower-seeds.webp"
	},
	"/products/garden-pots.webp": {
		"type": "image/webp",
		"etag": "\"9c7c-6Ll1vUzrLHkhm1F7GiBPcpYF30c\"",
		"mtime": "2026-05-24T18:59:06.702Z",
		"size": 40060,
		"path": "../public/products/garden-pots.webp"
	},
	"/products/garden-tools.webp": {
		"type": "image/webp",
		"etag": "\"b858-KSv52MhWMdhRSEjBy+5+4gO2im0\"",
		"mtime": "2026-05-24T18:58:27.870Z",
		"size": 47192,
		"path": "../public/products/garden-tools.webp"
	},
	"/products/inoculum-mix.webp": {
		"type": "image/webp",
		"etag": "\"dc54-6Cwz5rN+qFkFyRsGFsaDOIju/H4\"",
		"mtime": "2026-05-24T18:59:01.208Z",
		"size": 56404,
		"path": "../public/products/inoculum-mix.webp"
	},
	"/products/grow-bags.webp": {
		"type": "image/webp",
		"etag": "\"a706-iMJMCxITeX8VhuYe5VUTWHLf2YE\"",
		"mtime": "2026-05-24T18:58:49.683Z",
		"size": 42758,
		"path": "../public/products/grow-bags.webp"
	},
	"/products/organic-fertilizers.webp": {
		"type": "image/webp",
		"etag": "\"b4d8-3UKE3T3Ui6zhCDVnn6E86J0H898\"",
		"mtime": "2026-05-24T18:59:21.425Z",
		"size": 46296,
		"path": "../public/products/organic-fertilizers.webp"
	},
	"/products/organic-pesticides.webp": {
		"type": "image/webp",
		"etag": "\"6e70-JTpVXvpm4qWEdg7quc+ez7GB+Is\"",
		"mtime": "2026-05-24T18:59:26.836Z",
		"size": 28272,
		"path": "../public/products/organic-pesticides.webp"
	},
	"/products/sprayers.webp": {
		"type": "image/webp",
		"etag": "\"da9e-aNGCSW3od27vqFVxaY+QiBwrUH4\"",
		"mtime": "2026-05-24T18:59:13.286Z",
		"size": 55966,
		"path": "../public/products/sprayers.webp"
	},
	"/products/vegetable-seeds.webp": {
		"type": "image/webp",
		"etag": "\"dd3c-T3unQiXoDcPfD8cR6ztb0sFCzLY\"",
		"mtime": "2026-05-24T18:58:44.580Z",
		"size": 56636,
		"path": "../public/products/vegetable-seeds.webp"
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
