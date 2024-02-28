<script lang="ts">
	let players = [1, 2];

	let playerOneLife = 0;
	let playerTwoLife = 0;

	let lifePointValues = [-1000, -500, -100, -50, 50, 100, 500, 1000];

	function adjustPlayerValue(player: number, value: number) {
		if (player === 1) {
			playerOneLife += value;
		} else {
			playerTwoLife += value;
		}
	}

	function resetPlayerValue(player: number) {
		if (player === 1) {
			playerOneLife = 0;
		} else {
			playerTwoLife = 0;
		}
	}

	function setDefaultPlayerValues(gameType: string) {
		if (gameType === 'Master Duel') {
			playerOneLife = 8000;
			playerTwoLife = 8000;
		} else {
			playerOneLife = 4000;
			playerTwoLife = 4000;
		}
	}

	let coinResult = 'Press the Button';

	function flipACoin() {
		let number = Math.random();

		if (number < 0.5) {
			coinResult = 'Heads';
		} else {
			coinResult = 'Tails';
		}
	}
</script>

<div class="hero"><h1>🃏 LifeX for Yu-Gi-Oh!</h1></div>

<article class="card">
	<footer>
		<div class="card-container">
			{#each players as player}
				<article class="card">
					<header>Player {player}</header>
					<footer>
						<div class="button-container">
							<button disabled>
								{#if player === 1}
									{playerOneLife}
								{:else}
									{playerTwoLife}
								{/if}
							</button>

							<button on:click={() => resetPlayerValue(player)}>Reset</button>

							{#each lifePointValues as lifePointValue}
								<button on:click={() => adjustPlayerValue(player, lifePointValue)}
									>{lifePointValue}</button
								>
							{/each}
						</div>
					</footer>
				</article>
			{/each}

			<article class="card">
				<header>Starting Life Points</header>
				<footer>
					<div class="button-container">
						<button on:click={() => setDefaultPlayerValues('Master Duel')}>Master Duel</button>
						<button on:click={() => setDefaultPlayerValues('Speed Duel')}>Speed Duel</button>
					</div>
				</footer>
			</article>

			<article class="card">
				<header>Flip a Coin</header>
				<footer>
					<div class="button-container">
						<button disabled>{coinResult}</button>
						<button on:click={() => flipACoin()}>Flip</button>
					</div>
				</footer>
			</article>
		</div>
	</footer>
</article>

<style>
	@media screen and (max-width: 600px) {
		button {
			touch-action: manipulation;
		}
	}

	.card-container {
		display: grid;
		gap: var(--global-spacing);
		grid-template-columns: 1fr;
	}

	@media (min-width: 600px) {
		.card-container {
			grid-template-columns: 1fr 1fr;
		}
	}

	.button-container {
		display: grid;
		gap: var(--global-spacing);
	}
</style>
