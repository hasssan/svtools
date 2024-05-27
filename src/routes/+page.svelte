<script lang="ts">
	import { parseSaveGame, type Player, type Item } from '$lib/saveGame.js';
	import { qualityNames } from '$lib/items.js';
	import Container from '$lib/container.svelte';

	let items: Item[] = [];
	let filterByName = '';
	let filterByQuality = '';
	let player: Player;

	let files: FileList;
	let inputEl: HTMLInputElement;

	const qualityFilter = Object.values(qualityNames);

	function handleSaveUpload() {
		const file = files[0];

		if (!file) return;

		const reader = new FileReader();
		reader.onload = (event) => {
			const fileContent = event.target?.result as string;
			const saveGame = parseSaveGame(fileContent);

			items = saveGame.items;
			player = saveGame.player;

			inputEl.value = '';
		};
		reader.readAsText(file);
	}

	$: filteredItems = items
		.filter((item) => item.name.toLowerCase().includes(filterByName.toLowerCase()))
		.filter(
			(item) =>
				(filterByQuality && item.qualityName?.toLowerCase() === filterByQuality.toLowerCase()) ||
				!filterByQuality
		);
</script>

<Container>
	<div class="flex flex-col md:flex-row items-center justify-between mb-6">
		<h1 class="text-2xl font-bold text-darkBrown">Farm Info</h1>
	</div>
	<div class="text-darkBrown" data-testid="player-name">
		Name: {player?.name ?? ''}
	</div>
	<div class="text-darkBrown" data-testid="player-farmName">
		Farm Name: {player?.farmName ?? ''}
	</div>
	<div class="text-darkBrown" data-testid="player-money">
		Money: {player?.money ?? ''}
	</div>

	<div class="text-darkBrown" data-testid="player-professions">
		Professions: {player?.professionsList?.join(', ') ?? ''}
	</div>
</Container>

<Container>
	<div class="flex flex-col md:flex-row items-center justify-between mb-6">
		<h1 class="text-2xl font-bold text-darkBrown">Saves Location</h1>
		<div class="flex items-center space-x-4">
			<label for="file-upload">
				<input
					id="file-upload"
					bind:files
					bind:this={inputEl}
					required
					type="file"
					accept=""
					class="file:rounded-full file:border-0 file:bg-carla file:text-darkBrown hover:file:bg-goldCrayola inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-goldCrayola hover:bg-darkBrown focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-darkBrown cursor-pointer"
					on:change={handleSaveUpload}
				/>
			</label>
		</div>
	</div>
	<div class="text-darkBrown">
		Windows: <code class="bg-goldCrayola px-2 py-1">%appdata%\StardewValley\Saves</code>
	</div>
</Container>

<Container>
	<div class="flex flex-col md:flex-row items-center justify-between mb-6">
		<h1 class="text-2xl font-bold text-darkBrown">Items Analysis</h1>
	</div>
	<div class="flex flex-col md:flex-row items-center justify-between mb-6">
		<div class="relative mt-1">
			<label for="table-search" class="sr-only">Search</label>
			<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
				<svg
					class="w-5 h-5 text-darkBrown"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd"
					/></svg
				>
			</div>
			<input
				type="text"
				id="table-search"
				class="block p-2 pl-10 w-80 text-sm bg-carla rounded-lg border border-goldCrayola focus:ring-darkBrown focus:border-darkBrown focus:outline-none focus:ring-offset-0"
				placeholder="Filter by Name"
				bind:value={filterByName}
			/>
		</div>
		<div class="text-darkBrown">
			<label for="filter-quality">Filter by Quality:</label>
			<select
				class="py-2 px-2 rounded-lg border border-goldCrayola bg-carla focus:ring-darkBrown focus:border-darkBrown focus:outline-none focus:ring-offset-0"
				bind:value={filterByQuality}
			>
				<option value="">All</option>
				{#each qualityFilter as quality}
					<option value={quality}>{quality}</option>
				{/each}
			</select>
		</div>
	</div>
	<div class="overflow-x-auto py-4">
		<table class="min-w-full divide-y divide-goldCrayola">
			<thead class="bg-carla">
				<tr>
					<th
						scope="col"
						class="px-6 py-3 text-left text-xs font-medium text-darkBrown uppercase tracking-wider"
					>
						Name
					</th>
					<th
						scope="col"
						class="px-6 py-3 text-left text-xs font-medium text-darkBrown uppercase tracking-wider"
					>
						Quality
					</th>
					<th
						scope="col"
						class="px-6 py-3 text-left text-xs font-medium text-darkBrown uppercase tracking-wider"
					>
						Count
					</th>
					<th
						scope="col"
						class="px-6 py-3 text-left text-xs font-medium text-darkBrown uppercase tracking-wider"
					>
						Price
					</th>
					<th
						scope="col"
						class="px-6 py-3 text-left text-xs font-medium text-darkBrown uppercase tracking-wider"
					>
						Total Price
					</th>
				</tr>
			</thead>
			<tbody class="bg-carla divide-y divide-goldCrayola">
				{#each filteredItems as item}
					<tr>
						<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-darkBrown">
							{item.name}
						</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-darkBrown">{item.qualityName}</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-darkBrown">{item.stack}</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-darkBrown">{item.sellPrice}</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-darkBrown">{item.totalPrice}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</Container>
