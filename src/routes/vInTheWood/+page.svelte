<script lang="ts">
	let fieldJournalEntries = 'Welcome to the woods...\n';
	let fieldJournal: any[] = [];

	let fieldJournalEntry = {
		dateTime: '',
		actionDesc: '',
		gainLoss: '',
		test: ''
	};

	let currentDateTime = new Date();

	let woodCuttingButton;
	let woodCuttingButtonDisabled: boolean;

	function getDateTime() {
		currentDateTime = new Date();
		return currentDateTime.toLocaleString();
	}

	function scrollDownFieldJournal() {
		let textarea = document.getElementById('fieldJournalEntries');
		if (textarea) {
			textarea.scrollTop = textarea.scrollHeight;
		}
	}

	function basicAction(action: string) {
		if ((action = 'cutTree')) {
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
	<header>Field Journal</header>
	<footer id="fieldJournalEntries" style="height: 240px; overflow: scroll;">
		{#each fieldJournal as fieldJournalEntry}
			<p>
				<b>[{fieldJournalEntry.dateTime}]</b>
				{fieldJournalEntry.actionDesc}
				{#if (fieldJournalEntry.test == 'positive')}
					<span style="color: green;">{fieldJournalEntry.gainLoss}</span>
				{:else}
					<span style="color: red;">{fieldJournalEntry.gainLoss}</span>
				{/if}
			</p>
		{/each}
	</footer>
</article>

<article class="card">
	<header>🌲 Trees</header>
	<footer>
		<button
			id="woodCuttingButton"
			on:click={() => basicAction('cutTree')}
			disabled={woodCuttingButtonDisabled}>Cut</button
		>
	</footer>
</article>

<style>
	.hero {
		text-align: center;
	}
</style>
