<script lang="ts">
	let statesOfAmerica = [
		{ name: 'Alabama', abbreviation: 'AL' },
		{ name: 'Alaska', abbreviation: 'AK' },
		{ name: 'Arizona', abbreviation: 'AZ' },
		{ name: 'Arkansas', abbreviation: 'AR' },
		{ name: 'California', abbreviation: 'CA' },
		{ name: 'Colorado', abbreviation: 'CO' },
		{ name: 'Connecticut', abbreviation: 'CT' },
		{ name: 'Delaware', abbreviation: 'DE' },
		{ name: 'Florida', abbreviation: 'FL' },
		{ name: 'Georgia', abbreviation: 'GA' },
		{ name: 'Hawaii', abbreviation: 'HI' },
		{ name: 'Idaho', abbreviation: 'ID' },
		{ name: 'Illinois', abbreviation: 'IL' },
		{ name: 'Indiana', abbreviation: 'IN' },
		{ name: 'Iowa', abbreviation: 'IA' },
		{ name: 'Kansas', abbreviation: 'KS' },
		{ name: 'Kentucky', abbreviation: 'KY' },
		{ name: 'Louisiana', abbreviation: 'LA' },
		{ name: 'Maine', abbreviation: 'ME' },
		{ name: 'Maryland', abbreviation: 'MD' },
		{ name: 'Massachusetts', abbreviation: 'MA' },
		{ name: 'Michigan', abbreviation: 'MI' },
		{ name: 'Minnesota', abbreviation: 'MN' },
		{ name: 'Mississippi', abbreviation: 'MS' },
		{ name: 'Missouri', abbreviation: 'MO' },
		{ name: 'Montana', abbreviation: 'MT' },
		{ name: 'Nebraska', abbreviation: 'NE' },
		{ name: 'Nevada', abbreviation: 'NV' },
		{ name: 'New Hampshire', abbreviation: 'NH' },
		{ name: 'New Jersey', abbreviation: 'NJ' },
		{ name: 'New Mexico', abbreviation: 'NM' },
		{ name: 'New York', abbreviation: 'NY' },
		{ name: 'North Carolina', abbreviation: 'NC' },
		{ name: 'North Dakota', abbreviation: 'ND' },
		{ name: 'Ohio', abbreviation: 'OH' },
		{ name: 'Oklahoma', abbreviation: 'OK' },
		{ name: 'Oregon', abbreviation: 'OR' },
		{ name: 'Pennsylvania', abbreviation: 'PA' },
		{ name: 'Rhode Island', abbreviation: 'RI' },
		{ name: 'South Carolina', abbreviation: 'SC' },
		{ name: 'South Dakota', abbreviation: 'SD' },
		{ name: 'Tennessee', abbreviation: 'TN' },
		{ name: 'Texas', abbreviation: 'TX' },
		{ name: 'Utah', abbreviation: 'UT' },
		{ name: 'Vermont', abbreviation: 'VT' },
		{ name: 'Virginia', abbreviation: 'VA' },
		{ name: 'Washington', abbreviation: 'WA' },
		{ name: 'West Virginia', abbreviation: 'WV' },
		{ name: 'Wisconsin', abbreviation: 'WI' },
		{ name: 'Wyoming', abbreviation: 'WY' }
	];

	let selectedState = 'Select a State';

	let weatherDataResponse;
	let featuresLength = 0;

	let weatherDatum = {
		title: '',
		NWSheadline: '',
		areaDesc: ''
	};

	let weatherData: { [key: string]: string }[] = [];

	async function getWeatherData() {
		weatherData = [];
		if (selectedState != 'Select a State') {
			let url = 'https://api.weather.gov/alerts/active/area/' + selectedState;
			const response = await fetch(url);
			weatherDataResponse = await response.json();
			featuresLength = weatherDataResponse.features.length;

			for (let index = 0; index < featuresLength; index++) {
				weatherDatum = {
					title: weatherDataResponse.title,
					NWSheadline: weatherDataResponse.features[index].properties.parameters.NWSheadline,
					areaDesc: weatherDataResponse.features[index].properties.areaDesc
				};
				weatherData = [...weatherData, weatherDatum];
			}
		}
	}

	const copyToClipboard = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
		} catch (err) {
			console.error('An error occurred while copying: ', err);
		}
	};
</script>

<article class="card">
	<header>🌦️ WX</header>

	<header>
		<select id="state-select" bind:value={selectedState} on:change={getWeatherData}
			>\
			<option disabled>Select a State</option>
			{#each statesOfAmerica as state}
				<option value={state.abbreviation}>
					{state.name}
				</option>
			{/each}
		</select>
	</header>

	{#await getWeatherData()}
		<p>Loading...</p>
	{:then}
		<footer>
			<div class="card-container">
				{#if featuresLength > 0}
					{#each weatherData as weatherDatum, index}
						{#if index === featuresLength - 1}
							<article class="card card-last">
								<header class="weather-data-header">
									<div class="areaDesc">
										📍 {weatherDatum.areaDesc}
									</div>
									<button
										class="copyIcon"
										on:click={() =>
											copyToClipboard(weatherDatum.areaDesc + '\n\n' + weatherDatum.NWSheadline)}
										>📑</button
									>
								</header>
								<footer>
									{weatherDatum.NWSheadline}
								</footer>
							</article>
						{:else}
							<article class="card">
								<header class="weather-data-header">
									<div class="areaDesc">
										📍 {weatherDatum.areaDesc}
									</div>
									<button
										class="copyIcon"
										on:click={() =>
											copyToClipboard(weatherDatum.areaDesc + '\n\n' + weatherDatum.NWSheadline)}
										>📑</button
									>
								</header>
								<footer>
									{weatherDatum.NWSheadline}
								</footer>
							</article>
						{/if}
					{/each}
				{:else if selectedState !== 'Select a State'}
					<p>No available alerts.</p>
				{:else}
					<p>Please select a State.</p>
				{/if}
			</div>
		</footer>
	{:catch error}
		<p>Error: {error.message}</p>
	{/await}
</article>

<style>
	.card .card header {
		display: flex;
		flex-direction: row;
	}

	.card .card header .areaDesc {
		align-self: center;
		flex-grow: 1;
	}
</style>
