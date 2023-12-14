<script lang="ts">
	let playerOneLife = 0;
	let playerTwoLife = 0;

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
			A;
		}
	}
</script>

<article class="card card-last">
	<header>LifeX for Yu-Gi-Oh!</header>

	<footer>
		<div class="flex two">
			<div>
				<span>
					<header>Player 1</header>

					<footer>
						<div class="flex one two-600">
							<div>
								<span
									><button disabled class="full" style="background-color: goldenrod;"
										>{playerOneLife}</button
									></span
								>
							</div>
							<div>
								<span
									><button
										class="full"
										style="background-color: red;"
										on:click={() => resetPlayerValue(1)}>Reset</button
									></span
								>
							</div>
						</div>

						<div class="flex one two-600">
							<div>
								<span
									><button class="full" on:click={() => adjustPlayerValue(1, -1000)}>-1000</button
									></span
								>
							</div>
							<div>
								<span
									><button class="full" on:click={() => adjustPlayerValue(1, 1000)}>+1000</button
									></span
								>
							</div>
							<div>
								<span
									><button class="full" on:click={() => adjustPlayerValue(1, -500)}>-500</button
									></span
								>
							</div>
							<div>
								<span
									><button class="full" on:click={() => adjustPlayerValue(1, 500)}>+500</button
									></span
								>
							</div>
							<div>
								<span
									><button class="full" on:click={() => adjustPlayerValue(1, -100)}>-100</button
									></span
								>
							</div>
							<div>
								<span
									><button class="full" on:click={() => adjustPlayerValue(1, 100)}>+100</button
									></span
								>
							</div>
							<div>
								<span
									><button class="full" on:click={() => adjustPlayerValue(1, -50)}>-50</button
									></span
								>
							</div>
							<div>
								<span
									><button class="full" on:click={() => adjustPlayerValue(1, 50)}>+50</button></span
								>
							</div>
						</div>
					</footer>
				</span>
			</div>

			<div>
				<span>
					<header>Player 2</header>
					<footer>
						<div class="flex one two-600">
							<div>
								<span
									><button disabled class="full" style="background-color: goldenrod;"
										>{playerTwoLife}</button
									></span
								>
							</div>
							<div>
								<span
									><button
										class="full"
										style="background-color: red;"
										on:click={() => resetPlayerValue(2)}>Reset</button
									></span
								>
							</div>
						</div>

						<div class="flex one two-600">
							<div>
								<span
									><button class="full" on:click={() => adjustPlayerValue(2, -1000)}>-1000</button
									></span
								>
							</div>
							<div>
								<span
									><button class="full" on:click={() => adjustPlayerValue(2, 1000)}>+1000</button
									></span
								>
							</div>
							<div>
								<span
									><button class="full" on:click={() => adjustPlayerValue(2, -500)}>-500</button
									></span
								>
							</div>
							<div>
								<span
									><button class="full" on:click={() => adjustPlayerValue(2, 500)}>+500</button
									></span
								>
							</div>
							<div>
								<span
									><button class="full" on:click={() => adjustPlayerValue(2, -100)}>-100</button
									></span
								>
							</div>
							<div>
								<span
									><button class="full" on:click={() => adjustPlayerValue(2, 100)}>+100</button
									></span
								>
							</div>
							<div>
								<span
									><button class="full" on:click={() => adjustPlayerValue(2, -50)}>-50</button
									></span
								>
							</div>
							<div>
								<span
									><button class="full" on:click={() => adjustPlayerValue(2, 50)}>+50</button></span
								>
							</div>
						</div>
					</footer>
				</span>
			</div>
		</div>

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
