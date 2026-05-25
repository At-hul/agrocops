import { r as sampleProducts } from "./site-content-kdN7BxgY.mjs";
import { c as lazyRouteComponent, l as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as seo, t as getCanonicalUrl } from "./metadata-BUTat0y8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-Belja4f2.js
var $$splitComponentImporter = () => import("./products._slug-C44VD1Qw.mjs");
var Route = createFileRoute("/products/$slug")({
	head: ({ params }) => {
		const product = sampleProducts.find((item) => item.slug === params.slug);
		const fallbackTitle = titleizeSlug(params.slug);
		return {
			meta: seo({
				title: `${product?.name ?? fallbackTitle} | Agrocops Chelakkara`,
				description: `Inquire about ${product?.name ?? fallbackTitle} with stock status, pack sizes, brand, price range, and crop guidance.`,
				path: `/products/${params.slug}`
			}),
			links: [{
				rel: "canonical",
				href: getCanonicalUrl(`/products/${params.slug}`)
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
function titleizeSlug(slug) {
	return slug.split("-").filter(Boolean).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
//#endregion
export { Route as t };
