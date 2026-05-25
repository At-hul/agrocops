import { c as lazyRouteComponent, l as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as seo, t as getCanonicalUrl } from "./metadata-BUTat0y8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/knowledge-center._slug--pfnvoQo.js
var articles = [{
	slug: "monsoon-crop-care-checklist",
	title: "Monsoon crop care checklist for Kerala farms",
	readTime: "5 min read",
	category: "Kerala monsoon care",
	description: "Heavy rain can quickly expose drainage problems, fungal pressure, weak roots, and nutrition gaps. Use this checklist before visiting the store or asking Agrocops on WhatsApp."
}];
var $$splitComponentImporter = () => import("./knowledge-center._slug-BnZHMWlL.mjs");
var Route = createFileRoute("/knowledge-center/$slug")({
	head: ({ params }) => {
		const article = articles.find((item) => item.slug === params.slug);
		const fallbackTitle = titleizeSlug(params.slug);
		return {
			meta: seo({
				title: article ? `${article.title} | Agrocops Chelakkara` : `${fallbackTitle} | Agrocops Chelakkara`,
				description: article?.description ?? `Read ${fallbackTitle} from Agrocops Chelakkara or WhatsApp us for local crop guidance.`,
				path: `/knowledge-center/${params.slug}`
			}),
			links: [{
				rel: "canonical",
				href: getCanonicalUrl(`/knowledge-center/${params.slug}`)
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
function titleizeSlug(slug) {
	return slug.split("-").filter(Boolean).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
//#endregion
export { articles as n, Route as t };
