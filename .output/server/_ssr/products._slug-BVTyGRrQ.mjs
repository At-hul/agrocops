import { r as sampleProducts } from "./site-content-kdN7BxgY.mjs";
import { c as createFileRoute, s as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as seo, t as getCanonicalUrl } from "./metadata-LEMbB9LH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-BVTyGRrQ.js
var $$splitComponentImporter = () => import("./products._slug-C6STJvFc.mjs");
var Route = createFileRoute("/products/$slug")({
	head: ({ params }) => {
		const product = sampleProducts.find((item) => item.slug === params.slug);
		return {
			meta: seo({
				title: `${product?.name ?? "Product"} | Agrocops Chelakkara`,
				description: `Inquire about ${product?.name ?? "agricultural products"} with stock status, pack sizes, brand, price range, and crop guidance.`,
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
//#endregion
export { Route as t };
