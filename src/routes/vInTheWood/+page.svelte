<script lang="ts">
	import { playerInventory } from './playerInventoryStore.js';
	import { baseCampInventory } from './baseCampInventoryStore.js';
	import { baseCampBuildInventory } from './baseCampInventoryStore.js';

	let gameIcon = '🏕️';
	let gameName = 'vInTheWood';

	/* 
		Field Journal
	*/
	let fieldJournalCard: HTMLElement;

	let fieldJournal: any[] = [];

	let fieldJournalEntry = {
		dateTime: '',
		colorCoded: '',
		entryLine: '',
		entityName: '',
		actionName: '',
		actionDesc: '',
		resourceName: '',
		gainLoss: '',
		gainLossAmount: '',
		rewardName: ''
	};

	// let fieldJournalEntryWelcome = {
	// 	dateTime: new Date().toLocaleString(),
	// 	colorCoded: 'false',
	// 	entryLine: 'Welcome to [' + gameName + '].'
	// };
	// fieldJournal = [...fieldJournal, fieldJournalEntryWelcome];

	let fieldJournalEntryInitial = {
		dateTime: new Date().toLocaleString(),
		colorCoded: 'false',
		entryLine: 'You arrive in the woods. You are filled with hope.'
	};
	fieldJournal = [...fieldJournal, fieldJournalEntryInitial];

	let newsEntries = [{ date: '10 FEB 24', entry: 'Hi, there. 👋' }];

	let eventJournal: any[] = [];

	let eventJournalEntry = {
		date: '',
		entry: ''
	};

	let eventJournalEntryInitial = {
		date: new Date().toLocaleString(),
		entry: 'Welcome to [' + gameIcon + ' ' + gameName + '].'
	};
	eventJournal = [...eventJournal, eventJournalEntryInitial];

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
		Random Number Generator
	*/
	function getActionGainLossValue(min: number, max: number) {
		const minCeiled = Math.ceil(min);
		const maxFloored = Math.floor(max);
		return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
	}

	/* 
		Actions, Gathering
	*/
	let gatherTreesActions = [{ action: 'Cut', resource: 'Tree', reward: 'Wood', min: 1, max: 8 }];

	let gatherBushesActions = [
		{ action: 'Cut', resource: 'Bush', reward: 'Fiber', min: 1, max: 4 },
		{ action: 'Gather', resource: 'Bush', reward: 'Berry', min: 1, max: 6 }
	];

	/* 
		Resources
	*/
	let resources = [
		{ name: 'Trees', singular: 'Tree', actions: gatherTreesActions, emoji: '🌳' },
		{ name: 'Bushes', singular: 'Bush', actions: gatherBushesActions, emoji: '🌿' }
	];

	function gatherAction(
		action: string,
		resource: string,
		reward: string,
		min: number,
		max: number
	) {
		fieldJournalEntry = {
			colorCoded: 'true',
			entryLine: '',
			entityName: 'You',
			dateTime: getDateTime(),
			actionName: action,
			actionDesc: 'at the',
			resourceName: resource,
			gainLoss: 'gain',
			gainLossAmount: 'gain ' + getActionGainLossValue(min, max).toString(),
			rewardName: reward
		};

		fieldJournal = [...fieldJournal, fieldJournalEntry];
	}

	/*
	 * Scroll an element fully up or down
	 */
	function scrollFullyDirection(element: HTMLElement, direction: string) {
		if (direction == 'up') {
			fieldJournalCard.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		} else {
			fieldJournalCard.scrollIntoView({
				behavior: 'smooth',
				block: 'end'
			});
		}
	}
</script>

<svelte:head>
	<link rel="icon" href={gameName} />
	<title>{gameName}</title>
</svelte:head>

<div class="hero"><h1>🏕️ vInTheWood</h1></div>

<article class="card">
	<header>⚠ Notice</header>
	<footer>
		<p>
			This game is under development. Things will break, and you will lose your progress. Have fun!
		</p>
	</footer>
</article>

<article class="card">
	<header>📰 News</header>
	<div class="news">
		<footer>
			{#each newsEntries as newsEntry}
				<p><b>[{newsEntry.date}]</b> {newsEntry.entry}</p>
			{/each}
		</footer>
	</div>
</article>

<article class="card">
	<header>📓 Event Journal</header>
	<div class="event-journal">
		<footer>
			{#each eventJournal as eventJournalEntry}
				<p><b>[{eventJournalEntry.date}]</b> {eventJournalEntry.entry}</p>
			{/each}
		</footer>
	</div>
</article>

<article class="card">
	<center></center>
	<header>
		<div class="header-title">✏️ Field Journal</div>
	</header>
	<div class="field-journal">
		<footer bind:this={fieldJournalCard}>
			{#each fieldJournal as fieldJournalEntry}
				<p>
					<b>[{fieldJournalEntry.dateTime}]</b>
					{#if fieldJournalEntry.colorCoded == 'false'}
						{fieldJournalEntry.entryLine}
					{:else}
						{fieldJournalEntry.entityName}
						<span class="color-blue">[{fieldJournalEntry.actionName}]</span>
						{fieldJournalEntry.actionDesc}
						<span class="color-yellow">[{fieldJournalEntry.resourceName}]</span>.
						{#if fieldJournalEntry.gainLoss == 'gain'}
							{fieldJournalEntry.entityName}
							{fieldJournalEntry.gainLossAmount}
							<span class="color-green">[{fieldJournalEntry.rewardName}]</span>.
						{:else}
							{fieldJournalEntry.entityName}
							<span class="color-red">[{fieldJournalEntry.gainLossAmount}]</span>.
						{/if}
					{/if}
				</p>
			{/each}
		</footer>
	</div>
</article>

<article class="card">
	<header>🎒 Inventory</header>
	<footer class="playerInventory">
		{#each $playerInventory as item}
			<div class="item">
				{item.name} ({item.quantity})
			</div>
		{/each}
	</footer>
</article>

<article class="card">
	<header>⛺ Basecamp</header>
	<footer class="baseCampInventory">
		<div class="flex one">
			<header>Build</header>
			{#each $baseCampBuildInventory as items}
				{items.name}
			{/each}

			<header>Inventory</header>

			{#each $baseCampInventory as items}
				{#each items.items as item}
					{item}
				{/each}
			{/each}
		</div>
	</footer>
</article>

<article class="card">
	<header>🪓 Gather</header>
	<footer>
		<div class="flex one two-600 grow">
			{#each resources as resource}
				<div>
					<header>{resource.emoji} {resource.name}</header>
					<div class="flex one two-600 grow">
						{#each resource.actions as action}
							<div>
								<div>
									<span
										><button
											class="full"
											on:click={() =>
												gatherAction(
													action.action,
													action.resource,
													action.reward,
													action.min,
													action.max
												)}>{action.action}</button
										></span
									>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</footer>
</article>

<article class="card">
	<header>⚒️ Build</header>
	<footer><button disabled style="opacity: 0.5;">Coming soon...</button></footer>
</article>

<head>
	<title>he</title>
</head>

<style>
	.color-red {
		color: var(--color-red);
	}
	.color-yellow {
		color: var(--color-yellow);
	}
	.color-green {
		color: var(--color-green);
	}
	.color-blue {
		color: var(--color-blue);
	}

	.flex > * {
		padding-bottom: 0;
	}

	.flex button {
		margin-bottom: 0;
	}

	/*
	* Headers with Buttons
	*/

	.header-buttons {
		align-items: center;
		display: flex;
		gap: var(--global-spacing);
	}

	.header-buttons .header-title {
		flex-grow: 1;
	}

	.news {
		height: 90px;
		overflow: auto;
	}

	.event-journal {
		display: flex;
		flex-direction: column-reverse;
		height: 120px;
		overflow: auto;
	}

	.field-journal {
		display: flex;
		flex-direction: column-reverse;
		height: 240px;
		overflow: auto;
	}

	.playerInventory,
	.baseCampInventory {
		display: flex;
		gap: var(--global-spacing);
	}

	.playerInventory .item,
	.baseCampInventory .item {
		background-color: var(--global-button-background-color);
		border: var(--global-border);
		border-radius: var(--global-border-radius);
		padding: var(--global-spacing);
	}
</style>
