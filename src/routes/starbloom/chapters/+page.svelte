<script>
	export let data;
</script>

<article class="card box-shadow-hover-none">
	<header>Chapters</header>

	<footer>
		{#each data.posts as post, i}
			{@const isLast = i === data.posts.length - 1}
			{#if i}
				<article class="card card-last">
					<header>
						<a href={post.path}>
							{post.meta.title}
						</a>
					</header>

					<footer>
						Published: {post.meta.date}
					</footer>
				</article>
			{:else}
				<article class="card">
					<header>
						<a href={post.path}>
							{post.meta.title}
						</a>
					</header>

					<footer>
						Published: {post.meta.date}
					</footer>
				</article>
			{/if}
		{/each}
	</footer>
</article>

<style>
	a {
		color: unset;
	}

	.card:hover {
		box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
	}

	.box-shadow-hover-none:hover {
		box-shadow: none;
	}
</style>
