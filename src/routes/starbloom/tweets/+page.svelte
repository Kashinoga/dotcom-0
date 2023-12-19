<script>
	export let data;
</script>

<article class="card box-shadow-hover-none">
	<header>Tweets</header>

	<footer>
		{#each data.posts as post, i}
			{@const isLast = i === data.posts.length - 1}
			{#if isLast}
				<a href={post.path}>
					<article class="card card-last">
						<header>
							{post.meta.title}
						</header>

						<footer>
							Published: {post.meta.date}
						</footer>
					</article>
				</a>
			{:else}
				<a href={post.path}>
					<article class="card">
						<header>
							{post.meta.title}
						</header>

						<footer>
							Published: {post.meta.date}
						</footer>
					</article>
				</a>
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
