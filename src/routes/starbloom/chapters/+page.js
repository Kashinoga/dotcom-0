// export async function load({ params }) {
// 	const post = await import(`../${params.slug}.md`);
// 	const { title, date } = post.metadata;
// 	const Content = post.default;

// 	return {
// 		Content,
// 		title,
// 		date
// 	};
// }

export const load = async ({ fetch }) => {
	const response = await fetch('/api/starbloom/chapters');
	const posts = await response.json();

	return {
		posts
	};
};
