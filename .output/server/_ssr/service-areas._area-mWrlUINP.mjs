import { i as serviceAreaPages } from "./site-content-kdN7BxgY.mjs";
import { c as createFileRoute, s as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as seo, t as getCanonicalUrl } from "./metadata-LEMbB9LH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/service-areas._area-mWrlUINP.js
var $$splitComponentImporter = () => import("./service-areas._area-DlFRFeME.mjs");
var Route = createFileRoute("/service-areas/$area")({
	head: ({ params }) => {
		const area = serviceAreaPages.find((item) => item.slug === params.area);
		return {
			meta: seo({
				title: area ? `${area.title} | Agrocops Chelakkara` : "Agrocops Chelakkara Service Area",
				description: area?.description,
				path: `/service-areas/${params.area}`
			}),
			links: [{
				rel: "canonical",
				href: getCanonicalUrl(`/service-areas/${params.area}`)
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
