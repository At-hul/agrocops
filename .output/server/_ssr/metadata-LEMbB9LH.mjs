import { a as siteConfig } from "./whatsapp-cta-D8aqhAXQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/metadata-LEMbB9LH.js
function seo({ title = `${siteConfig.name} | ${siteConfig.tagline}`, description = siteConfig.description, path = "/", image = siteConfig.ogImagePath, twitterImage = siteConfig.twitterImagePath, noIndex = false } = {}) {
	const url = getCanonicalUrl(path);
	const imageUrl = getCanonicalUrl(image);
	const twitterImageUrl = getCanonicalUrl(twitterImage);
	return [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			name: "robots",
			content: noIndex ? "noindex, nofollow" : "index, follow"
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:url",
			content: url
		},
		{
			property: "og:image",
			content: imageUrl
		},
		{
			property: "og:image:width",
			content: "1200"
		},
		{
			property: "og:image:height",
			content: "630"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: title
		},
		{
			name: "twitter:description",
			content: description
		},
		{
			name: "twitter:image",
			content: twitterImageUrl
		}
	];
}
function getCanonicalUrl(path = "/") {
	return new URL(path, siteConfig.siteUrl).toString();
}
//#endregion
export { seo as n, getCanonicalUrl as t };
