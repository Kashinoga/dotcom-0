<script lang="ts">
</script>

<article class="card box-shadow-hover-none">
	<header>Menu</header>

	<footer>
		<a href="/projects">
			<article class="card">
				<header>Projects</header>
				<footer>My projects.</footer>
			</article>
		</a>

		<a href="/wx">
			<article class="card card-last">
				<header>WX</header>
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
		box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
	}

	.box-shadow-hover-none:hover {
		box-shadow: none;
	}
</style>
