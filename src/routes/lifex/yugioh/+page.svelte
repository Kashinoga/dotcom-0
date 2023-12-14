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

<article class="card box-shadow-hover-none">
	<header>LifeX for Yu-Gi-Oh!</header>

	<footer>
		<div class="flex two">
			<div class="padding-bottom-zero">
				<span
					><article class="card card-last box-shadow-apply">
						<header>Player 1</header>
						<footer>
							<header>Life Points</header>
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
							</footer>

							<header>Increments</header>
							<footer>
								<div class="flex one two-600">
									<div>
										<span
											><button class="full" on:click={() => adjustPlayerValue(1, -1000)}
												>-1000</button
											></span
										>
									</div>
									<div>
										<span
											><button class="full" on:click={() => adjustPlayerValue(1, 1000)}
												>+1000</button
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
											><button class="full" on:click={() => adjustPlayerValue(1, 50)}>+50</button
											></span
										>
									</div>
								</div>
							</footer>
						</footer>
					</article></span
				>
			</div>

			<div class="padding-bottom-zero">
				<span
					><article class="card box-shadow-apply">
						<header>Player 2</header>
						<footer>
							<header>Life Points</header>
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
							</footer>

							<header>Increments</header>
							<footer>
								<div class="flex one two-600">
									<div>
										<span
											><button class="full" on:click={() => adjustPlayerValue(2, -1000)}
												>-1000</button
											></span
										>
									</div>
									<div>
										<span
											><button class="full" on:click={() => adjustPlayerValue(2, 1000)}
												>+1000</button
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
											><button class="full" on:click={() => adjustPlayerValue(2, 50)}>+50</button
											></span
										>
									</div>
								</div>
							</footer>
						</footer>
					</article></span
				>
			</div>
		</div>

		<article class="card">
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
		</article>

		<article class="card card-last">
			<header>Flip a Coin</header>
			<footer>
				<div class="flex one two-600">
					<div>
						<span><button class="full" on:click={() => flipACoin()}>Flip</button></span>
					</div>
					<div>
						<span
							><button disabled class="full" style="background-color: goldenrod;"
								>{coinResult}</button
							></span
						>
					</div>
				</div>
			</footer>
		</article>
	</footer>
</article>

<style>
	.box-shadow-apply {
		box-shadow: 0 0 0.2em rgba(170, 170, 170, 0.2);
	}

	@media screen and (max-width: 600px) {
		.flex > * {
			padding-bottom: 0.2em;
		}

		button {
			margin: 0;
			touch-action: manipulation;
		}
	}

	.card:hover {
		box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
	}

	.box-shadow-hover-none:hover {
		box-shadow: none;
	}

	.padding-bottom-zero {
		padding-bottom: 0;
	}
</style>
