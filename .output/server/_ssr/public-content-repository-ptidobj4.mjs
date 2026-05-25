//#region node_modules/.nitro/vite/services/ssr/assets/public-content-repository-ptidobj4.js
var emptyPublicContent = () => ({
	data: [],
	error: null,
	configured: Boolean(null)
});
async function fetchPublishedProducts() {
	return emptyPublicContent();
}
async function fetchPublishedProductBySlug(slug) {
	return {
		data: null,
		error: null,
		configured: false
	};
}
async function fetchPublishedArticles() {
	return emptyPublicContent();
}
async function fetchPublishedArticleBySlug(slug) {
	return {
		data: null,
		error: null,
		configured: false
	};
}
async function fetchPublishedCropGuides() {
	return emptyPublicContent();
}
async function fetchPublishedEvents() {
	return emptyPublicContent();
}
async function fetchPublishedSuccessStories() {
	return emptyPublicContent();
}
//#endregion
export { fetchPublishedEvents as a, fetchPublishedSuccessStories as c, fetchPublishedCropGuides as i, fetchPublishedArticleBySlug as n, fetchPublishedProductBySlug as o, fetchPublishedArticles as r, fetchPublishedProducts as s, emptyPublicContent as t };
