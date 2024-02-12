<script lang="ts">
</script>

<article class="card box-shadow-hover-inherit">
	<header>🍔 Menu</header>

	<footer>
		<a href="/projects">
			<article class="card">
				<header>🚧 Projects</header>
				<footer>My projects.</footer>
			</article>
		</a>

		<a href="/wx">
			<article class="card card-last">
				<header>🌦️ WX</header>
				<footer>A simple weather app.</footer>
			</article>
		</a>
	</footer>
</article>

<style>
	a {
		color: unset;
	}

	.card:hover {
		box-shadow: none;
	}

	.box-shadow-hover-inherit:hover {
		box-shadow: var(--global-box-shadow);
	}
</style>
