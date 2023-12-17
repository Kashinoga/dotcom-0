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
			console.log(url);
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
			console.log(weatherDataResponse);
		}
	}
</script>

<article class="card card-last">
	<header>WX</header>

	<header>
		<!-- <label for="state-select">Select a State</label> -->

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
			{#if featuresLength > 0}
				<header class="wx-title">
					{weatherDatum.title}:
				</header>

				{#each weatherData as weatherDatum}
					<header>
						{weatherDatum.NWSheadline}
					</header>
					<footer>
						{weatherDatum.areaDesc}
					</footer>
				{/each}
			{:else if selectedState !== 'Select a State'}
				No available alerts.
			{:else}
				<header class="wx-title">Current watches, warnings, and advisories for:</header>
			{/if}
		</footer>
	{:catch error}
		<p>Error: {error.message}</p>
	{/await}
</article>

<style>
	.wx-title {
		background-color: goldenrod;
		border: none;
		border-radius: 0.4em;
		box-shadow: 0 0 0.2em rgba(170, 170, 170, 0.2);
		color: white;
		font-weight: normal;
	}
</style>
