<script lang="ts">
	import { XMLParser } from 'fast-xml-parser';
	import { findItems, type ItemObject } from '../lib/items';

	let items: ItemObject[] = [];
	let filterByName = '';

	let files: FileList;

	function handleSaveUpload() {
		const file = files[0];

		if (!file) return;
		const parser = new XMLParser({ ignoreAttributes: false });

		const reader = new FileReader();
		reader.onload = (event) => {
			const fileContent = event.target?.result as string;
			const result = parser.parse(fileContent);
			items = findItems(result);
		};
		reader.readAsText(file);
	}

	$: filteredItems = items.filter((item) =>
		item.name.toLowerCase().includes(filterByName.toLowerCase())
	);
</script>

<div class="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 my-2">
	<div class="max-w-4xl w-full px-4 md:px-6">
		<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
			<div class="flex flex-col md:flex-row items-center justify-between mb-6">
				<h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Saves Location</h1>
			</div>
			<div>
				Windows: <code class="bg-gray-200 px-2">%appdata%\StardewValley\Saves</code>
			</div>
		</div>
	</div>
</div>
<div class="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
	<div class="max-w-4xl w-full px-4 md:px-6">
		<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
			<div class="flex flex-col md:flex-row items-center justify-between mb-6">
				<h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Items Analysis</h1>
			</div>
			<div class="flex flex-col md:flex-row items-center justify-between mb-6">
				<label for="table-search" class="sr-only">Search</label>
				<div class="relative mt-1">
					<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg
							class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
						class="block p-2 pl-10 w-80 text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-600 focus:border-indigo-500"
						placeholder="Filter by Name"
						bind:value={filterByName}
					/>
				</div>
				<div class="flex items-center space-x-4">
					<label for="file-upload">
						<input
							id="file-upload"
							bind:files
							required
							type="file"
							accept=""
							class="file:rounded-full file:border-0 file:bg-indigo-200 file:text-indigo-700 hover:file:bg-indigo-100 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
							on:change={handleSaveUpload}
						/>
					</label>
				</div>
			</div>
			<div class="overflow-x-auto py-4">
				<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
					<thead class="bg-gray-50 dark:bg-gray-800">
						<tr>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
							>
								Name
							</th>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
							>
								Count
							</th>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
							>
								Quality
							</th>
							<!-- <th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
							>
								Type
							</th> -->
						</tr>
					</thead>
					<tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
						{#each filteredItems as item}
							<tr>
								<td
									class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100"
								>
									{item.name}
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
									>{item.stack}</td
								>
								<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
									>{item.qualityName}</td
								>
								<!-- <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
								></td> -->
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
