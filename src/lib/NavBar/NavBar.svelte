<script lang="ts">
	import ThemeSwitcher from '$lib/ThemeSwitcher/ThemeSwitcher.svelte';

	function toggleDarkMode() {
		let darkMode = document.documentElement.getAttribute('data-theme');

		if (darkMode == 'light') {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
		}
	}
</script>

<nav>
	<div class="menu menu-hero">
		<button>
			<a href="/" data-sveltekit-replaceState>💖 Kashinoga</a>
		</button>
	</div>

	<div class="menu menu-button">
		<ThemeSwitcher></ThemeSwitcher>
		<button>
			<a href="/menu" data-sveltekit-replaceState>🍔 Menu</a>
		</button>
	</div>
</nav>
