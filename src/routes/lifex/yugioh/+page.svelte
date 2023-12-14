<script lang="ts">
	let playerOneLife = 0;
	let playerTwoLife = 0;

	let player;
	let value;

	function adjustPlayerValue(player: number, value: number) {
		if (player === 1) {
			console.log('in here 1');
			playerOneLife += value;
		} else {
			console.log('in here 2');
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
</script>

<article class="card box-shadow-hover-none">
	<header>LifeX for Yu-Gi-Oh!</header>

	<footer>
		<div class="flex two">
			<div>
				<span
					><article class="card box-shadow-apply">
						<header>Player 1</header>
						<footer>
							<article class="card">
								<header>Life</header>
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
							</article>
							<article class="card">
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
												><button class="full" on:click={() => adjustPlayerValue(1, -500)}
													>-500</button
												></span
											>
										</div>
										<div>
											<span
												><button class="full" on:click={() => adjustPlayerValue(1, 500)}
													>+500</button
												></span
											>
										</div>
										<div>
											<span
												><button class="full" on:click={() => adjustPlayerValue(1, -100)}
													>-100</button
												></span
											>
										</div>
										<div>
											<span
												><button class="full" on:click={() => adjustPlayerValue(1, 100)}
													>+100</button
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
							</article>
						</footer>
					</article></span
				>
			</div>

			<div>
				<span
					><article class="card box-shadow-apply">
						<header>Player 2</header>
						<footer>
							<article class="card">
								<header>Life</header>
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
							</article>
							<article class="card">
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
												><button class="full" on:click={() => adjustPlayerValue(2, -500)}
													>-500</button
												></span
											>
										</div>
										<div>
											<span
												><button class="full" on:click={() => adjustPlayerValue(2, 500)}
													>+500</button
												></span
											>
										</div>
										<div>
											<span
												><button class="full" on:click={() => adjustPlayerValue(2, -100)}
													>-100</button
												></span
											>
										</div>
										<div>
											<span
												><button class="full" on:click={() => adjustPlayerValue(2, 100)}
													>+100</button
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
							</article>
						</footer>
					</article></span
				>
			</div>
		</div>
	</footer>
</article>

<style>
	.box-shadow-apply {
		box-shadow: 0 0 0.2em rgba(170, 170, 170, 0.2);
	}

	.card:hover {
		box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
	}

	.box-shadow-hover-none:hover {
		box-shadow: none;
	}
</style>
