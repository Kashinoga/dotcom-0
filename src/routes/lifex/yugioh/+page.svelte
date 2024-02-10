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

<article class="card card-last">
	<header>🃏 LifeX for Yu-Gi-Oh!</header>

	<footer style="padding-bottom: 0;">
		<div class="flex two">
			{#each players as player}
				<div style="padding-bottom: 0;">
					<span
						><header>Player {player}</header>
						<footer style="padding-bottom: 0;">
							<div class="flex one two-600">
								<div>
									<span
										><button disabled class="full" style="background-color: goldenrod;">
											{#if player === 1}
												{playerOneLife}
											{:else}
												{playerTwoLife}
											{/if}
										</button></span
									>
								</div>
								<div>
									<span
										><button
											class="full"
											style="background-color: red;"
											on:click={() => resetPlayerValue(player)}>Reset</button
										></span
									>
								</div>

								{#each lifePointValues as lifePointValue}
									<div>
										<div>
											<span
												><button
													class="full"
													on:click={() => adjustPlayerValue(player, lifePointValue)}
													>{lifePointValue}</button
												></span
											>
										</div>
									</div>
								{/each}
							</div>
						</footer></span
					>
				</div>
			{/each}
		</div>
	</footer>

	<footer>
		<header>Starting Life Points</header>
		<footer>
			<div class="flex one two-600">
				<div>
					<span
						><button class="full" on:click={() => setDefaultPlayerValues('Master Duel')}
							>Master Duel</button
						></span
					>
				</div>
				<div>
					<span
						><button class="full" on:click={() => setDefaultPlayerValues('Speed Duel')}
							>Speed Duel</button
						></span
					>
				</div>
			</div>
		</footer>

		<header>Flip a Coin</header>
		<footer>
			<div class="flex one two-600">
				<div>
					<span><button class="full" on:click={() => flipACoin()}>Flip</button></span>
				</div>
				<div>
					<span
						><button disabled class="full" style="background-color: goldenrod;">{coinResult}</button
						></span
					>
				</div>
			</div>
		</footer>
	</footer>
</article>

<style>
	button {
		margin: 0;
	}

	@media screen and (max-width: 600px) {
		button {
			margin: 0;
			touch-action: manipulation;
		}
	}
</style>
