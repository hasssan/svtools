<script>
	import '../app.css';
	import { version } from '$app/environment';
</script>

<div class="">
	<div class="flex flex-col">
		<header class="h-20 flex items-center">
			<h1 class="text-3xl font-bold text-darkBrown">Stardew Valley Tools</h1>
			<span class="text-darkBrown pl-1 align-bottom pt-3 text-sm">v{version}</span>
		</header>
	</div>

	<slot />
</div>
