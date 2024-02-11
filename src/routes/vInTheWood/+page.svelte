<script lang="ts">
	import { onMount } from 'svelte';

	let fieldJournalDisplay: HTMLElement;

	let fieldJournal: any[] = [];
	let fieldJournalEntry = {
		dateTime: '',
		actionDesc: '',
		gainLoss: '',
		test: ''
	};
	let initialFieldJournalEntry = {
		dateTime: new Date().toLocaleString(),
		actionDesc: 'Welcome to the woods.',
		gainLoss: '',
		test: ''
	};
	fieldJournal = [...fieldJournal, initialFieldJournalEntry];

	let currentDateTime = new Date();

	let gatherBushesActions = [{ action: 'Cut' }, { action: 'Gather' }];

	let woodCuttingButton;
	let woodCuttingButtonDisabled: boolean;

	function getDateTime() {
		currentDateTime = new Date();
		return currentDateTime.toLocaleString();
	}

	function scrollDownFieldJournal() {
		// let textarea = document.getElementById('fieldJournal');
		// if (textarea) {
		// 	textarea.scrollTop = textarea.scrollHeight;
		// }
		fieldJournalDisplay.scrollTop = fieldJournalDisplay.scrollHeight;
	}

	onMount(() => {
		scrollDownFieldJournal();
	});

	function gatherAction(action: string, resource: string) {
		console.log(action);
		if (resource == 'Tree') {
			woodCuttingButton = document.getElementById('woodCuttingButton');
			woodCuttingButtonDisabled = true;

			setTimeout(function () {
				woodCuttingButtonDisabled = false;

				let woodCuttingValues = [1, 2, 3, 4, 5, 6, 7, 8];
				let woodCuttingValue = Math.ceil(Math.random() * woodCuttingValues.length);

				fieldJournalEntry = {
					dateTime: getDateTime(),
					actionDesc: 'You chop at a tree.',
					gainLoss: 'You gained ' + woodCuttingValue + ' wood.',
					test: 'positive'
				};

				fieldJournal = [...fieldJournal, fieldJournalEntry];
			}, 0);
		}

		scrollDownFieldJournal();
	}
</script>

<div class="hero"><h1>🏕️ vInTheWood</h1></div>

<article class="card">
	<header>📓 Event Journal</header>
	<footer><p><b>[{getDateTime()}]</b> Welcome to the woods!</p></footer>
</article>

<article class="card">
	<header>✏️ Field Journal</header>
	<div class="field-journal">
		<footer bind:this={fieldJournalDisplay}>
			{#each fieldJournal as fieldJournalEntry}
				<p>
					<b>[{fieldJournalEntry.dateTime}]</b>
					{fieldJournalEntry.actionDesc}
					{#if fieldJournalEntry.test == 'positive'}
						<span style="color: green;">{fieldJournalEntry.gainLoss}</span>
					{:else}
						<span style="color: red;">{fieldJournalEntry.gainLoss}</span>
					{/if}
				</p>
			{/each}
		</footer>
	</div>
</article>

<article class="card">
	<header>🪓 Gather</header>
	<footer>
		<header>Trees</header>
		<button
			id="woodCuttingButton"
			on:click={() => gatherAction('Cut', 'Tree')}
			disabled={woodCuttingButtonDisabled}>Cut</button
		>

		<header>Bushes</header>
		<div class="flex one two-600">
			{#each gatherBushesActions as gatherBushesAction}
				<div>
					<div>
						<span
							><button class="full" on:click={() => gatherAction(gatherBushesAction.action, 'Bush')}
								>{gatherBushesAction.action}</button
							></span
						>
					</div>
				</div>
			{/each}
		</div>
	</footer>
</article>

<style>
	.hero {
		text-align: center;
	}

	.flex > * {
		padding-bottom: 0;
	}

	.flex button {
		margin-bottom: 0;
	}

	.field-journal {
		display: flex;
		flex-direction: column-reverse;
		height: 240px;
		overflow: auto;
	}
</style>
