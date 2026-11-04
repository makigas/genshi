<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		children?: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<svelte:head>
	{#if title}
		<title>Genshi-Svelte &mdash; {title}</title>
	{:else}
		<title>Genshi-Svelte</title>
	{/if}
</svelte:head>

{#if title}
	<div class="pageHeader">
		<h1>{title}</h1>
	</div>
{/if}
{@render children?.()}

<style>
	.pageHeader {
		margin-bottom: 1rem;
	}

	@media screen and (min-width: 1024px) {
		.pageHeader {
			margin-bottom: 0;
			height: 6rem;
			display: inline-flex;
			flex-direction: row;
			align-items: center;
		}
	}

	.pageHeader h1 {
		margin: 0;
	}
</style>
