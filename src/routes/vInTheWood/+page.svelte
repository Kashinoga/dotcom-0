<script lang="ts">
	import { onMount } from 'svelte';

	/* 
		Field Journal
	*/
	let fieldJournalCard: HTMLElement;

	let fieldJournal: any[] = [];

	let fieldJournalEntry = {
		dateTime: '',
		actionDesc: '',
		gainLoss: '',
		test: ''
	};

	let fieldJournalEntryInitial = {
		dateTime: new Date().toLocaleString(),
		actionDesc: 'Welcome to the woods!',
		gainLoss: '',
		test: ''
	};
	fieldJournal = [...fieldJournal, fieldJournalEntryInitial];

	/*
		Buttons
	*/
	let buttonGatherTreesCut: HTMLElement;
	let woodCuttingButtonDisabled: boolean;

	/*
		Time
	*/
	let dateTimeCurrent = new Date();

	function getDateTime() {
		dateTimeCurrent = new Date();
		return dateTimeCurrent.toLocaleString();
	}

	/*
		Random number generator
	*/
	function getActionGainLossValue(min: number, max: number) {
		const minCeiled = Math.ceil(min);
		const maxFloored = Math.floor(max);
		return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
	}

	/* 
		Actions, Gathering
	*/
	let gatherTreesActions = [{ action: 'Cut', resource: 'Tree', reward: 'Wood' }];

	let gatherBushesActions = [
		{ action: 'Cut', resource: 'Bush', reward: 'Fiber' },
		{ action: 'Gather', resource: 'Bush', reward: 'Berry' }
	];

	const gatherResourcesActions = [
		{ Tree: [...gatherTreesActions] },
		{ Bush: [...gatherBushesActions] }
	];

	function gatherAction(action: string, resource: string, reward: string) {
		console.log(action);
		if (resource == 'Tree') {
			woodCuttingButtonDisabled = true;

			setTimeout(function () {
				woodCuttingButtonDisabled = false;

				fieldJournalEntry = {
					dateTime: getDateTime(),
					actionDesc: 'You [' + action + '] at a ' + '[' + resource + '].',
					gainLoss: 'You gained ' + getActionGainLossValue(1, 8) + ' [' + reward + '].',
					test: 'positive'
				};

				fieldJournal = [...fieldJournal, fieldJournalEntry];
			}, 0);
		} else if (resource == 'Bush') {
			fieldJournalEntry = {
				dateTime: getDateTime(),
				actionDesc: 'You [' + action + '] at a ' + '[' + resource + '].',
				gainLoss: 'You gained ' + getActionGainLossValue(1, 4) + ' [' + reward + '].',
				test: 'positive'
			};

			fieldJournal = [...fieldJournal, fieldJournalEntry];
		}
	}
</script>

<div class="hero"><h1>🏕️ vInTheWood</h1></div>

<article class="card">
	<header>🚧 Testing Area</header>
	<footer>
		{#each gatherResourcesActions as gatherResourcesAction}
			Help me.
		{/each}
	</footer>
</article>

<article class="card">
	<header>📓 Event Journal</header>
	<footer><p><b>[{getDateTime()}]</b> Welcome to the woods!</p></footer>
</article>

<article class="card">
	<header>✏️ Field Journal</header>
	<div class="field-journal">
		<footer bind:this={fieldJournalCard}>
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
		<div class="flex one two-600">
			<div>
				<header>🌳 Trees</header>
				<div class="flex one two-600">
					{#each gatherTreesActions as gatherTreesAction}
						<div>
							<div>
								<span
									><button
										class="full"
										on:click={() =>
											gatherAction(
												gatherTreesAction.action,
												gatherTreesAction.resource,
												gatherTreesAction.reward
											)}>{gatherTreesAction.action}</button
									></span
								>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<div>
				<header>🌿 Bushes</header>
				<div class="flex one two-600">
					{#each gatherBushesActions as gatherBushesAction}
						<div>
							<div>
								<span
									><button
										class="full"
										on:click={() =>
											gatherAction(
												gatherBushesAction.action,
												gatherBushesAction.resource,
												gatherBushesAction.reward
											)}>{gatherBushesAction.action}</button
									></span
								>
							</div>
						</div>
					{/each}
				</div>
			</div>
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
