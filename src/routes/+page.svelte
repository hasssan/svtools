<script lang="ts">
	import { writable } from 'svelte/store';
	import {
		createSvelteTable,
		flexRender,
		getCoreRowModel,
		getFilteredRowModel,
		getPaginationRowModel,
		getSortedRowModel
	} from '@tanstack/svelte-table';
	import type {
		TableOptions,
		ColumnDef,
		ColumnFiltersState,
		SortingState,
		OnChangeFn,
		PaginationState,
		SortingFn
	} from '@tanstack/svelte-table';

	import { parseSaveGame } from '$lib/saveGame.js';
	import type { Player, Item, CurrentDate } from '$lib/saveGame.js';
	import { qualityNames } from '$lib/items.js';
	import Container from '$lib/container.svelte';
	import FilterTable from '$lib/components/filter-table.svelte';
	import { moneyFormat } from '$lib/utils.js';

	let items: Item[] = [];
	let player: Player;
	let gameVersion: string;
	let currentDate: CurrentDate;

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
			gameVersion = saveGame.gameVersion;
			currentDate = saveGame.currentDate;

			inputEl.value = '';

			refreshData();
		};
		reader.readAsText(file);
	}

	const sortQualityFn: SortingFn<Item> = (rowA, rowB, _columnId) => {
		return rowA.original.quality - rowB.original.quality;
	};

	const defaultColumns: ColumnDef<Item>[] = [
		{
			accessorKey: 'name',
			header: 'Name',
			meta: { filterVariant: 'text' }
		},
		{
			accessorKey: 'qualityName',
			header: 'Quality',
			sortingFn: sortQualityFn,
			meta: { filterVariant: 'select', filterOptions: qualityFilter }
		},
		{
			accessorKey: 'stack',
			header: 'Count',
			enableColumnFilter: false
		},
		{
			accessorKey: 'sellPrice',
			header: 'Price',
			enableColumnFilter: false
		},
		{
			accessorKey: 'totalPrice',
			header: 'Total Price',
			enableColumnFilter: false
		}
	];

	let columnFilters: ColumnFiltersState = [];

	const setColumnFilter: OnChangeFn<ColumnFiltersState> = (updater) => {
		if (updater instanceof Function) {
			columnFilters = updater(columnFilters);
		} else {
			columnFilters = updater;
		}
		tableOptions.update((old) => ({
			...old,
			state: {
				...old.state,
				columnFilters
			}
		}));
	};

	let sorting: SortingState = [];

	const setSorting: OnChangeFn<SortingState> = (updater) => {
		if (updater instanceof Function) {
			sorting = updater(sorting);
		} else {
			sorting = updater;
		}
		tableOptions.update((old) => ({
			...old,
			state: {
				...old.state,
				sorting
			}
		}));
	};

	let pagination: PaginationState = {
		pageIndex: 0,
		pageSize: 10
	};

	const setPagination: OnChangeFn<PaginationState> = (updater) => {
		if (updater instanceof Function) {
			pagination = updater(pagination);
		} else {
			pagination = updater;
		}
		tableOptions.update((old) => ({
			...old,
			state: {
				...old.state,
				pagination
			}
		}));
	};

	const tableOptions = writable<TableOptions<Item>>({
		columns: defaultColumns,
		data: items,
		state: {
			columnFilters,
			sorting
		},
		onColumnFiltersChange: setColumnFilter,
		onPaginationChange: setPagination,
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel()
	});

	const refreshData = () => {
		tableOptions.update((options) => ({ ...options, data: items }));
	};

	const table = createSvelteTable(tableOptions);
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
		Money: {moneyFormat(player?.money ?? '')}
	</div>
	<div class="text-darkBrown" data-testid="current-date">
		Date:
		{currentDate?.toString() ?? ''}
	</div>

	<div class="text-darkBrown" data-testid="player-professions">
		Professions: {player?.professionsList?.join(', ') ?? ''}
	</div>
	<div class="text-darkBrown" data-testid="game-version">
		Game Version: {gameVersion ?? ''}
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
	<div class="overflow-x-auto py-4">
		<table class="min-w-full divide-y divide-goldCrayola">
			<thead class="bg-carla">
				{#each $table.getHeaderGroups() as headerGroup}
					<tr>
						{#each headerGroup.headers as header}
							<th
								scope="col"
								class="content-start pl-2 py-3 text-left text-xs font-medium text-darkBrown uppercase tracking-wider"
							>
								<div class="flex flex-col">
									<div class="flex">
										<svelte:component
											this={flexRender(header.column.columnDef.header, header.getContext())}
										/>
										<button
											class:cursor-pointer={header.column.getCanSort()}
											class:select-none={header.column.getCanSort()}
											on:click={header.column.getToggleSortingHandler()}
										>
											{#if header.column.getIsSorted().toString() === 'asc'}
												<svg
													class="w-3 h-4 ms-1.5"
													fill="#000000"
													viewBox="0 0 24 24"
													version="1.2"
													baseProfile="tiny"
													xmlns="http://www.w3.org/2000/svg"
													><path
														d="M18.2 13.3l-6.2-6.3-6.2 6.3c-.2.2-.3.5-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7z"
													/></svg
												>
											{:else if header.column.getIsSorted().toString() === 'desc'}
												<svg
													class="w-3 h-3 ms-1.5"
													fill="#000000"
													viewBox="0 0 24 24"
													version="1.2"
													baseProfile="tiny"
													xmlns="http://www.w3.org/2000/svg"
													><path
														d="M5.8 9.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z"
													/></svg
												>
											{:else}
												<svg
													class="w-3 h-3 ms-1.5"
													fill="#000000"
													viewBox="0 0 24 24"
													version="1.2"
													baseProfile="tiny"
													xmlns="http://www.w3.org/2000/svg"
													><path
														d="M18.2 9.3l-6.2-6.3-6.2 6.3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7zM5.8 14.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.7s.1.5.3.7z"
													/></svg
												>
											{/if}
										</button>
									</div>
									{#if header.column.getCanFilter()}
										<div class="mt-2">
											<FilterTable column={header.column} />
										</div>
									{/if}
								</div>
							</th>
						{/each}
					</tr>
				{/each}
			</thead>
			<tbody class="bg-carla divide-y divide-goldCrayola">
				{#each $table.getRowModel().rows as row}
					<tr>
						{#each row.getVisibleCells() as cell}
							<td class="px-6 py-4 whitespace-nowrap text-sm text-darkBrown">
								<svelte:component
									this={flexRender(cell.column.columnDef.cell, cell.getContext())}
								/>
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
		<nav
			class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
			aria-label="Table navigation"
		>
			<span
				class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"
				>Showing <span class="font-semibold text-gray-900 dark:text-white"
					>{$table.getPageCount() > 0 ? $table.getState().pagination.pageIndex + 1 : 0}</span
				>
				of
				<span class="font-semibold text-gray-900 dark:text-white">{$table.getPageCount()}</span
				></span
			>
			<div class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
				<button
					class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-darkBrown bg-carla border border-goldCrayola rounded-s-lg"
					class:hover:bg-goldCrayola={$table.getCanPreviousPage()}
					class:hover:text-darkBrown={$table.getCanPreviousPage()}
					on:click={() => $table.firstPage()}
					disabled={!$table.getCanPreviousPage()}
				>
					{'<<'}
				</button>
				<button
					class="flex items-center justify-center px-3 h-8 leading-tight text-darkBrown bg-carla border border-goldCrayola"
					class:hover:bg-goldCrayola={$table.getCanPreviousPage()}
					class:hover:text-darkBrown={$table.getCanPreviousPage()}
					on:click={() => $table.previousPage()}
					disabled={!$table.getCanPreviousPage()}
				>
					{'<'}
				</button>
				<button
					class="flex items-center justify-center px-3 h-8 leading-tight text-darkBrown bg-carla border border-goldCrayola"
					class:hover:bg-goldCrayola={$table.getCanNextPage()}
					class:hover:text-darkBrown={$table.getCanNextPage()}
					on:click={() => $table.nextPage()}
					disabled={!$table.getCanNextPage()}
				>
					{'>'}
				</button>
				<button
					class="flex items-center justify-center px-3 h-8 leading-tight text-darkBrown bg-carla border border-goldCrayola rounded-e-lg"
					class:hover:bg-goldCrayola={$table.getCanNextPage()}
					class:hover:text-darkBrown={$table.getCanNextPage()}
					on:click={() => $table.lastPage()}
					disabled={!$table.getCanNextPage()}
				>
					{'>>'}
				</button>
			</div>
		</nav>
	</div>
</Container>
