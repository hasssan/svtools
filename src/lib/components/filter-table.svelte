<script lang="ts">
	import debounce from 'debounce';
	import type { Column } from '@tanstack/svelte-table';

	export let column: Column<any, unknown>;

	const { filterVariant, filterOptions } = column.columnDef.meta ?? {};

	let filterValue = '';

	function handleSelect(e: any) {
		column.setFilterValue(e.target?.value);
	}

	const handleText = debounce((e: any) => {
		// Allow only alphanumeric characters and Enter key
		if (e.key.match(/^[a-zA-Z0-9]$/) || e.key === 'Enter' || e.target?.value === '') {
			column.setFilterValue(e.target?.value);
		}
	}, 300);
</script>

{#if filterVariant === 'text'}
	<input
		type="text"
		bind:value={filterValue}
		on:keydown={handleText}
		class="mt-1 p-1 text-sm bg-carla rounded border border-goldCrayola focus:ring-darkBrown focus:border-darkBrown focus:outline-none focus:ring-offset-0"
		placeholder="Search..."
	/>
{:else if filterVariant === 'select' && filterOptions && filterOptions?.length > 0}
	<select
		bind:value={filterValue}
		on:change={handleSelect}
		class="mt-1 p-1 rounded border border-goldCrayola bg-carla focus:ring-darkBrown focus:border-darkBrown focus:outline-none focus:ring-offset-0"
	>
		<option value="">All</option>
		{#each filterOptions as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
{/if}
