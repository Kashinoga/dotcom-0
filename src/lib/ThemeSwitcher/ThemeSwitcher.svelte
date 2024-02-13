<script lang="ts">
	function toggleDarkMode() {
		let darkMode = document.documentElement.getAttribute('data-theme');

		if (darkMode == 'light') {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
		}
	}
</script>

<button on:click={toggleDarkMode}>💡</button>

<style>
	button {
		margin-right: 0;
	}
</style>
